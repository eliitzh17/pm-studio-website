import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-sans",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://eliitzh17.github.io/pm-studio-website";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "P.M. Studio | נגרות בוטיק בהתאמה אישית | ירושלים",
    template: "%s | P.M. Studio",
  },
  description:
    "נגרות בוטיק בהתאמה אישית בירושלים - מטבחים, ריהוט משרדי, ארונות קיר ויחידות אחסון. עיצוב וביצוע ברמה הגבוהה ביותר. P.M. Studio Ltd.",
  keywords: [
    "נגר ירושלים",
    "מטבחים בהתאמה אישית",
    "נגרות בוטיק",
    "ריהוט משרדי ירושלים",
    "ארונות קיר",
    "נגרות מותאמת אישית",
    "מטבחים ירושלים",
    "ריהוט בהזמנה",
    "נגר בירושלים",
    "עיצוב מטבחים",
    "ארונות בגדים בהתאמה",
    "יחידות טלוויזיה",
    "P.M. Studio",
  ],
  authors: [{ name: "P.M. Studio Ltd" }],
  creator: "P.M. Studio Ltd",
  openGraph: {
    title: "P.M. Studio | נגרות בוטיק בהתאמה אישית | ירושלים",
    description:
      "עיצוב וביצוע ריהוט מותאם אישית ברמה הגבוהה ביותר — מטבחים, משרדים, ארונות קיר. ירושלים.",
    url: SITE_URL,
    siteName: "P.M. Studio",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "/images/office-meeting-2.jpg",
        width: 1200,
        height: 630,
        alt: "P.M. Studio - נגרות בוטיק בהתאמה אישית",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "P.M. Studio | נגרות בוטיק בהתאמה אישית",
    description: "עיצוב וביצוע ריהוט מותאם אישית ברמה הגבוהה ביותר. ירושלים.",
    images: ["/images/office-meeting-2.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD structured data for local business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "P.M. Studio Ltd",
  alternateName: "פי.אם. סטודיו",
  description:
    "נגרות בוטיק בהתאמה אישית בירושלים - מטבחים, ריהוט משרדי, ארונות קיר ויחידות אחסון",
  url: SITE_URL,
  telephone: ["+972-52-638-4355", "+972-50-265-4957"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "נחום חפצדי 17, מגדל רם קומה 11",
    addressLocality: "ירושלים",
    addressCountry: "IL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.78,
    longitude: 35.2,
  },
  image: `${SITE_URL}/images/office-meeting-2.jpg`,
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "שירותי נגרות",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "מטבחים בהתאמה אישית",
          description: "תכנון, עיצוב וביצוע מטבחים מותאמים אישית",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ריהוט משרדי",
          description: "דלפקי קבלה, חדרי ישיבות וארונות אחסון למשרדים",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ריהוט ביתי",
          description: "ארונות קיר, יחידות טלוויזיה וארונות בגדים",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
