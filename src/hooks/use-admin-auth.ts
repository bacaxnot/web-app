import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function useAdminAuth() {
  const supabase = createClientComponentClient();

  console.log(
    "using admint auth to redirect to:",
    `${location.origin}/api/auth/callback`,
  );
  const authorize = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/api/auth/callback`,
      },
    });
  };
  const signOut = async () => {
    await supabase.auth.signOut();
  };
  return { authorize, signOut };
}
