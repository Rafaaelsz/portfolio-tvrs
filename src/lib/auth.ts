import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import crypto from "node:crypto";
import { promisify } from "node:util";

const cookieName =
  process.env.NODE_ENV === "production"
    ? "__Host-portfolio_admin_session"
    : "portfolio_admin_session";
const maxAgeSeconds = 60 * 60 * 8;
const scryptAsync = promisify(crypto.scrypt);

type SessionPayload = {
  email: string;
  exp: number;
};

function getSessionSecret() {
  const secret = process.env.SESSION_SECRET;

  if (!secret || secret.length < 32) {
    throw new Error("SESSION_SECRET must be at least 32 characters long.");
  }

  return secret;
}

function getAdminEmail() {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();

  if (!email) {
    throw new Error("ADMIN_EMAIL is required.");
  }

  return email;
}

function base64Url(input: string) {
  return Buffer.from(input).toString("base64url");
}

function sign(payload: string) {
  return crypto.createHmac("sha256", getSessionSecret()).update(payload).digest("base64url");
}

function safeEqualBuffer(leftBuffer: Buffer, rightBuffer: Buffer) {
  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

function safeEqual(left: string, right: string) {
  return safeEqualBuffer(
    crypto.createHash("sha256").update(left).digest(),
    crypto.createHash("sha256").update(right).digest(),
  );
}

async function verifyPasswordHash(password: string, storedHash: string) {
  const parts = storedHash.split("$");
  const [algorithm, salt, hash] = parts;

  if (parts.length !== 3 || algorithm !== "scrypt" || !salt || !hash) {
    throw new Error("ADMIN_PASSWORD_HASH must use the documented scrypt format.");
  }

  const expected = Buffer.from(hash, "base64url");

  if (expected.length !== 64 || expected.toString("base64url") !== hash) {
    throw new Error("ADMIN_PASSWORD_HASH must contain a 64-byte base64url hash.");
  }

  const actual = (await scryptAsync(password, salt, expected.length)) as Buffer;
  return safeEqualBuffer(actual, expected);
}

function createToken(email: string) {
  const payload = base64Url(
    JSON.stringify({
      email,
      exp: Date.now() + maxAgeSeconds * 1000,
    } satisfies SessionPayload),
  );

  return `${payload}.${sign(payload)}`;
}

export async function verifyAdminCredentials(email: string, password: string) {
  const adminEmail = getAdminEmail();
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;
  let passwordMatches: boolean;

  if (adminPasswordHash) {
    passwordMatches = await verifyPasswordHash(password, adminPasswordHash);
  } else if (process.env.NODE_ENV !== "production" && process.env.ADMIN_PASSWORD) {
    passwordMatches = safeEqual(password, process.env.ADMIN_PASSWORD);
  } else {
    throw new Error("ADMIN_PASSWORD_HASH is required in production.");
  }

  return safeEqual(email.trim().toLowerCase(), adminEmail) && passwordMatches;
}

export async function createAdminSession(email: string) {
  const cookieStore = await cookies();
  cookieStore.set(cookieName, createToken(email), {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: maxAgeSeconds,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.set(cookieName, "", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(cookieName)?.value;

  if (!token) {
    return null;
  }

  const parts = token.split(".");
  const [payload, signature] = parts;

  if (parts.length !== 2 || !payload || !signature || !safeEqual(signature, sign(payload))) {
    return null;
  }

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as SessionPayload;

    if (
      typeof parsed.email !== "string" ||
      typeof parsed.exp !== "number" ||
      !Number.isSafeInteger(parsed.exp) ||
      parsed.exp < Date.now() ||
      !safeEqual(parsed.email.trim().toLowerCase(), getAdminEmail())
    ) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export async function requireAdminSession() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  return session;
}

export async function isAdminRequest() {
  return Boolean(await getAdminSession());
}
