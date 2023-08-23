import NavBar from "@/components/NavBar";
import "./globals.css";
import { Montserrat } from "next/font/google"; 
const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${montserrat.className} bg-light w-full min-h-screen`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
