import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { messageStatusSchema } from "@/lib/validations";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function PATCH(request: Request, context: RouteContext) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ ok: false, message: "Unauthorized." }, { status: 401 });
  }

  const { id } = await context.params;
  const payload = messageStatusSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ ok: false, message: "Invalid status." }, { status: 400 });
  }

  try {
    const message = await prisma.contactMessage.update({
      where: { id },
      data: { status: payload.data.status },
    });

    return NextResponse.json({ ok: true, message });
  } catch {
    return NextResponse.json({ ok: false, message: "Unable to update message." }, { status: 500 });
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ ok: false, message: "Unauthorized." }, { status: 401 });
  }

  const { id } = await context.params;

  try {
    await prisma.contactMessage.delete({
      where: { id },
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: "Unable to delete message." }, { status: 500 });
  }
}
