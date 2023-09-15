import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { PostCreationForm } from "@/ui/templates";

export default async function AdminPage() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/admin/security-breach");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/admin/security-breach");
  }

  const {
    user_metadata: { user_name },
  } = user;

  if (user_name !== "bacaxnot") {
    redirect("/");
  }

  return (
    <section>
      <PostCreationForm />
    </section>
  );
}
