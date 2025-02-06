import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
// axios.defaults.headers.common["x-auth-token"] = `${localStorage.getItem(
//   "token"
// )}`;
// axios.defaults.headers.post["Content-Type"] = "application/json";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
