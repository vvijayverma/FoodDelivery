import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// import Footer from "./_components/Footer";
// import Header from "./_components/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Providers } from "./features/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Delivery",
  description: "Restro Delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ToastContainer />
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
