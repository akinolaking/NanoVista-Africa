import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Indestructible and Flexible Glasses for Kids | NanoVista Africa",
  description: "NanoVista Africa is the official NanoVista franchise for Nigeria and West Africa. Indestructible, flexible eyewear for babies, children and teenagers aged 0 to 16.",
  keywords: "children glasses Nigeria, kids eyewear West Africa, NanoVista Africa, indestructible glasses children, flexible kids glasses Lagos, Siliflex",
  openGraph: {
    title: "NanoVista Africa | Indestructible Children's Eyewear",
    description: "Official NanoVista franchise for Nigeria and West Africa. Indestructible, flexible eyewear from 0 to 16 years.",
    url: "https://nanovista.africa",
    siteName: "NanoVista Africa",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
