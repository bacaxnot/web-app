import { AsciiArt } from "@/ui/atoms";
import UnlockAuthBtn from "@/ui/atoms/unlock-auth-btn";

export default function AdminLoginPage() {
  return (
    <section className="grid h-full content-center justify-center gap-10">
      <AsciiArt design="lock" className="text-xs" />
      <UnlockAuthBtn />
    </section>
  );
}
