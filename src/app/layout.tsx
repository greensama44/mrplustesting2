import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

// Geom Graphic comes from Adobe Fonts. Set NEXT_PUBLIC_ADOBE_FONTS_KIT to the
// web project ID (the part before .css in use.typekit.net/xxxxxxx.css).
const adobeKit = process.env.NEXT_PUBLIC_ADOBE_FONTS_KIT;

export const metadata: Metadata = {
  title: "Mega Rewards · Save more. Experience more. Enjoy more.",
  description:
    "6,000+ discounts, free giveaways every week and member prices with Plus. Join free in 60 seconds.",
};

export const viewport: Viewport = {
  themeColor: "#E10600",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={montserrat.variable}>
      <head>{adobeKit && <link rel="stylesheet" href={`https://use.typekit.net/${adobeKit}.css`} />}</head>
      <body>{children}</body>
    </html>
  );
}
