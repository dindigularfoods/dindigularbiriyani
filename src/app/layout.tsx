import type { Metadata } from "next";
import { Playfair_Display, Cinzel, Lato } from "next/font/google";
import "./globals.css";
// 1. IMPORT THE AUTH PROVIDER
// Try this if "@/" doesn't work
import { AuthProvider } from "../components/AuthProvider";
import { ProspectusProvider } from "@/context/ProspectusContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Dindigul AR Biryani | Authentic Seeraga Samba Catering & Franchise",
  
  // DESCRIPTION: Includes "Tamil Nadu", "Wedding Catering", and "2008" to build trust
  description: "Taste the legacy of Dindigul since 2008. We serve authentic Seeraga Samba Biryani across Tamil Nadu. Enquire today for premium wedding catering and franchise opportunities.",
  
  // KEYWORDS: Helps connect specific search terms to your site
  keywords: [
    "Dindigul Biryani", 
    "Seeraga Samba", 
    "Biryani Franchise", 
    "Catering Service Tamil Nadu", 
    "AR Biryani", 
    "Wedding Catering", 
    "Best Biryani Franchise"
  ],
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${cinzel.variable} ${lato.variable} font-sans antialiased bg-brand-ivory text-brand-burgundy`}
      >
        {/* 2. WRAP THE APP WITH BOTH PROVIDERS */}
        <ProspectusProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ProspectusProvider>
      </body>
    </html>
  );
}