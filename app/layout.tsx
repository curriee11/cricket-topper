import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import {
  ADDRESS,
  BUSINESS_HOURS,
  CITY,
  COMPANY_NAME,
  DISPLAY_PHONE,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  PHONE_NUMBER
} from "@/lib/constants";
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportingGoodsStore",
    name: COMPANY_NAME,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS,
      addressLocality: "Jalandhar",
      addressRegion: "Punjab",
      postalCode: "144002",
      addressCountry: "IN"
    },
    areaServed: CITY,
    telephone: PHONE_NUMBER,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      opens: "09:00",
      closes: "19:30"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: GOOGLE_RATING,
      reviewCount: GOOGLE_REVIEW_COUNT
    }
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
