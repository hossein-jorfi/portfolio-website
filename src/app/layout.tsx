import "./globals.css";

// Components
import NavBar from "@/components/modules/NavBar";
import Footer from "@/components/modules/Footer";

// Font
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
// import { Montserrat } from "next/font/google";
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
  // const theme = localStorage.getItem("theme");

  return (
    <html>
      <body
        className={`${inter.className} bg-light w-full min-h-screen`}
      >
        <NavBar>
          {children}
          <Footer />
        </NavBar>
      </body>
    </html>
  );
}
