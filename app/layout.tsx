import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
// import 'antd/dist/antd.css';
import NavBar from "@/components/NavBar";
import FooterComponent from "@/components/Footer";

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
      <body className={`${inter.variable} ${bricolageGrotesque.variable} `}>
        <main className="flex flex-col min-h-screen">
          <NavBar />
          <div className="flex-grow">{children}</div>
          <FooterComponent />
        </main>
      </body>
    </html>
  );
}
