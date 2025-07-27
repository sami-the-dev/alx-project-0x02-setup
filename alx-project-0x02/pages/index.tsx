import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <Header />
      <main className="w-full max-w-3xl">
        <p className="text-lg text-center">
          This is a simple Next.js project setup with a custom layout and fonts.
        </p>
      </main>
      <footer className="w-full max-w-3xl text-center">
        <p className="text-sm">© 2023 My Website</p>
      </footer>
    </div>
  );
}
