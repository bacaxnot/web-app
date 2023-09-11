import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function useAdminAuth() {
  const supabase = createClientComponentClient();

  const authorize = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/api/auth/callback",
      },
    });
  };
  const signOut = async () => {
    await supabase.auth.signOut();
  };
  return { authorize, signOut };
}
