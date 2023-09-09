import type { Config } from "tailwindcss";
import containerQueries from "@tailwindcss/container-queries";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        page: "min(100vw,56rem);",
      },
      boxShadow: {
        bottom: "0 2px 4px -4px rgba(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [containerQueries],
};
export default config;
