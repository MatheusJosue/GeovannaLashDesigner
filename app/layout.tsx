import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Geovanna | Lash Designer",
  description: "Extensão de cílios com técnicas modernas, seguras e personalizadas para realçar a beleza do seu olhar.",
  metadataBase: new URL("https://gnlashdesigner.vercel.app"),
  openGraph: {
    title: "Geovanna | Lash Designer",
    description: "Técnicas modernas, seguras e personalizadas para realçar a beleza do seu olhar.",
    url: "/",
    siteName: "Geovanna Lash Designer",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Geovanna Lash Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geovanna | Lash Designer",
    description: "Técnicas modernas, seguras e personalizadas para realçar a beleza do seu olhar.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
