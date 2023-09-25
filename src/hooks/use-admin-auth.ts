import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function useAdminAuth() {
  const supabase = createClientComponentClient();

  const authorize = async () => {
    console.log("authorize at ", window.location.origin);
    // await supabase.auth.signInWithOAuth({
    //   provider: "github",
    //   options: {
    //     redirectTo: `${window.location.origin}/api/auth/callback`,
    //   },
    // });
  };
  const signOut = async () => {
    await supabase.auth.signOut();
  };
  return { authorize, signOut };
}
