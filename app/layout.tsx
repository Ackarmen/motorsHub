import { Footer, Navbar } from "@/components";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "MotorsHub 🚗 | Discover Seamless Car Rentals | Your Gateway to Reliable Transportation",
  description:
    "Explore our diverse range of rental cars for a hassle-free journey. Affordable rates, top-notch service, and a fleet to suit every need. Book now for an unforgettable travel experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
