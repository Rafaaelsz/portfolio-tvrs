import assert from "node:assert/strict";
import crypto from "node:crypto";
import { promisify } from "node:util";

const scrypt = promisify(crypto.scrypt);
const salt = crypto.randomBytes(16).toString("base64url");
const hash = ((await scrypt("correct-password", salt, 64)) as Buffer).toString("base64url");

process.env.NODE_ENV = "production";
process.env.ADMIN_EMAIL = "admin@example.com";
process.env.ADMIN_PASSWORD_HASH = `scrypt$${salt}$${hash}`;

const { verifyAdminCredentials } = await import("../src/lib/auth");

assert.equal(await verifyAdminCredentials("ADMIN@example.com", "correct-password"), true);
assert.equal(await verifyAdminCredentials("admin@example.com", "wrong-password"), false);
assert.equal(await verifyAdminCredentials("other@example.com", "correct-password"), false);

delete process.env.ADMIN_PASSWORD_HASH;
process.env.ADMIN_PASSWORD = "plaintext-is-not-accepted";
await assert.rejects(
  verifyAdminCredentials("admin@example.com", process.env.ADMIN_PASSWORD),
  /ADMIN_PASSWORD_HASH is required/,
);

console.log("Authentication check passed.");
