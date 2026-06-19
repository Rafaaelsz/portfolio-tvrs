import { NextResponse } from "next/server";
import { createAdminSession, verifyAdminCredentials } from "@/lib/auth";
import { adminLoginSchema } from "@/lib/validations";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const payload = adminLoginSchema.safeParse(await request.json());

    if (!payload.success) {
      return NextResponse.json({ ok: false, message: "Invalid credentials." }, { status: 400 });
    }

    const authenticated = await verifyAdminCredentials(payload.data.email, payload.data.password);

    if (!authenticated) {
      return NextResponse.json({ ok: false, message: "Invalid credentials." }, { status: 401 });
    }

    await createAdminSession(payload.data.email);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: "Unable to authenticate." }, { status: 500 });
  }
}
