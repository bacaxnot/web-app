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
      height: {
        "with-caret": "1.2em",
      },
      width: {
        page: "min(100%,56rem);",
      },
      padding: {
        page: "1rem",
      },
      boxShadow: {
        bottom: "0 2px 4px -4px rgba(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [containerQueries],
};
export default config;
