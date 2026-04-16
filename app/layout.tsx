import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://crickettopper.example.com"),
  title: {
    default: "Cricket Topper | Premium Cricket Equipment Catalogue",
    template: "%s | Cricket Topper"
  },
  description:
    "Browse premium cricket bats, gloves, and complete kits with direct call and WhatsApp enquiries.",
  keywords: [
    "cricket equipment",
    "cricket bats",
    "batting gloves",
    "cricket kit",
    "cricket catalogue"
  ],
  openGraph: {
    title: "Cricket Topper",
    description:
      "Premium cricket equipment catalogue built for fast lead generation via call and WhatsApp.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cricket Topper",
    description:
      "Premium cricket equipment catalogue built for fast lead generation via call and WhatsApp."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
