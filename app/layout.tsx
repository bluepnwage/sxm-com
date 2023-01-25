import "@/styles/globals.css";
import { Nav } from "@/components/Nav";
import { Poppins as Font } from "@next/font/google";
const inter = Font({ subsets: ["latin"], weight: ["400"], variable: "--font-sans" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.className}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
