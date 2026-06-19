import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const session = await getAdminSession();
  redirect(session ? "/admin/inbox" : "/admin/login");
}
