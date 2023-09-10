import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { cn } from "@bacaxnot/utils";
import { Navbar } from "@/ui/organisms";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bacaxnot",
  description: "Supongo que esta es mi pagina web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const classNames = cn(
    "grid bg-black text-white [color-scheme:dark]",
    robotoMono.className,
  );

  return (
    <html lang="es">
      <body className={classNames}>
        <Navbar className="px-page w-page justify-self-center" />
        <main className="px-page w-page justify-self-center">{children}</main>
      </body>
    </html>
  );
}
