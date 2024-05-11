import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolageGrotesque",
});

export const metadata: Metadata = {
  title: "TEDxALU",
  description: "TEDX Website for the African Leadership University",
  icons: {
    icon: "/images/tedxicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bricolageGrotesque} `}>
        <main className="flex h-screen flex-col w-full px-4 md:px-14 pt-1">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
