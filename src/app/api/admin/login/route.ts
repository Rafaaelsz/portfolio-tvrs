import { NextResponse, type NextRequest } from "next/server";
import { createAdminSession, verifyAdminCredentials } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";
import { adminLoginSchema } from "@/lib/validations";

export const runtime = "nodejs";

function getClientKey(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(request: NextRequest) {
  try {
    if (!checkRateLimit(`admin-login:${getClientKey(request)}`, 5, 15 * 60_000)) {
      return NextResponse.json({ ok: false, message: "Invalid credentials." }, { status: 429 });
    }

    const payload = adminLoginSchema.safeParse(await request.json().catch(() => null));

    if (!payload.success) {
      return NextResponse.json({ ok: false, message: "Invalid credentials." }, { status: 400 });
    }

    if (!(await verifyAdminCredentials(payload.data.email, payload.data.password))) {
      return NextResponse.json({ ok: false, message: "Invalid credentials." }, { status: 401 });
    }

    await createAdminSession(payload.data.email);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Admin authentication failed.", error);
    return NextResponse.json({ ok: false, message: "Unable to authenticate." }, { status: 500 });
  }
}
