import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { checkRateLimit } from "@/lib/rate-limit";
import { contactMessageSchema } from "@/lib/validations";

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
    if (!checkRateLimit(getClientKey(request))) {
      return NextResponse.json(
        { ok: false, message: "Too many requests. Try again later." },
        { status: 429 },
      );
    }

    const payload = contactMessageSchema.safeParse(await request.json());

    if (!payload.success) {
      return NextResponse.json({ ok: false, message: "Invalid contact data." }, { status: 400 });
    }

    if (payload.data.company) {
      return NextResponse.json({ ok: true });
    }

    const message = await prisma.contactMessage.create({
      data: {
        name: payload.data.name,
        email: payload.data.email,
        subject: payload.data.subject || null,
        message: payload.data.message,
      },
      select: {
        id: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ ok: true, message });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Unable to save contact message." },
      { status: 500 },
    );
  }
}
