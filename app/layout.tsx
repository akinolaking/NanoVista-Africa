import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NanoVista Africa | Indestructible & Flexible Children's Eyewear",
  description:
    "NanoVista Africa is the official NanoVista franchise for Nigeria and West Africa. Discover indestructible, flexible eyewear for babies, children and teenagers.",
  keywords: "children glasses Nigeria, kids eyewear West Africa, NanoVista Africa, indestructible glasses children",
  openGraph: {
    title: "NanoVista Africa | Children's Eyewear Nigeria & West Africa",
    description: "Official NanoVista franchise for Nigeria and West Africa",
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
