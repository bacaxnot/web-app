import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

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
      <form className="grid gap-4">
        <label htmlFor="post-title" className="grid gap-2">
          <span>título</span>
          <input type="text" name="post-title" id="post-title" />
        </label>
        <label htmlFor="post-content" className="grid gap-2">
          <span>contenido</span>
          <textarea name="post-content" id="post-content" />
        </label>
        <button
          type="button"
          className="border border-transparent py-1.5 hover:border-white"
        >
          publicar
        </button>
      </form>
    </section>
  );
}
