import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import Footer from "./_components/Footer";
// import Header from "./_components/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Providers } from "./features/provider";

const roboto = Roboto({ subsets: ["latin"],weight:['100', '300', '400', '500', '700', '900'] });

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
      <body className={roboto.className}>
      <main className="max-w-6xl mx-auto pt-4 pl-4 pr-4">
        <Providers>
          <ToastContainer />
          {/* <Header /> */}
          {children}
          <Footer />
        </Providers>
      </main>
      </body>
    </html>
  );
}
