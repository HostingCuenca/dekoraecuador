import type { Metadata } from "next";
import { Fira_Sans_Condensed, Poppins } from "next/font/google";
import "./globals.css";

const firaSansCondensed = Fira_Sans_Condensed({
  variable: "--font-fira-sans-condensed",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dekoraecuador.com"),
  title: "DEKORA - Profesionales en Pinturas y Revestimientos",
  description: "Empresa especializada en servicios de pintura y revestimientos de alta calidad, tanto arquitectónica, comercial e industrial. Acreditados por PDCA, certificados SGS y SSPC.",
  keywords: ["pintura", "revestimientos", "construcción", "Ecuador", "DEKORA", "PDCA", "pintura arquitectónica", "pintura industrial", "impermeabilización"],
  authors: [{ name: "DEKORA Cía. Ltda." }],
  creator: "DEKORA Cía. Ltda.",
  publisher: "DEKORA Cía. Ltda.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "DEKORA - Profesionales en Pinturas y Revestimientos",
    description: "Empresa especializada en servicios de pintura y revestimientos de alta calidad, tanto arquitectónica, comercial e industrial.",
    url: "https://dekoraecuador.com",
    siteName: "DEKORA",
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "DEKORA - Pinturas y Revestimientos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DEKORA - Profesionales en Pinturas y Revestimientos",
    description: "Empresa especializada en servicios de pintura y revestimientos de alta calidad.",
    images: ["/logo.png"],
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
  alternates: {
    canonical: "https://dekoraecuador.com",
  },
  verification: {
    google: "google-site-verification-code", // Agregar el código de verificación de Google Search Console
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${firaSansCondensed.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
