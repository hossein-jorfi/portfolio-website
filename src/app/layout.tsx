import NavBar from "@/components/NavBar";
import "./globals.css";
// import { Montserrat } from "next/font/google";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
// const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Hossein Jorfi",
  description: "Hossein Jorfi Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={`${inter.className} bg-light w-full min-h-screen`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
