import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://darrencrombie.com"),
  title: {
    default: "Darren Crombie | Founder, technologist & human optimist",
    template: "%s | Darren Crombie",
  },
  description:
    "The personal story of Darren Crombie — technologist, innovation leader and founder of Bridgit Care, working to keep AI useful, responsible and human.",
  applicationName: "Darren Crombie",
  creator: "Darren Crombie",
  keywords: [
    "Darren Crombie",
    "responsible AI",
    "social care technology",
    "public service innovation",
    "Bridgit Care",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://darrencrombie.com",
    siteName: "Darren Crombie",
    title: "Darren Crombie | Tech is the thread. People are the point.",
    description:
      "From Accenture and DXC to founder: Darren's journey through technology, innovation, care and the human side of building.",
    images: [
      {
        url: "/og-v2.png",
        width: 1728,
        height: 906,
        alt: "Darren Crombie — Tech is the thread. People are the point.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darren Crombie | Tech is the thread. People are the point.",
    description:
      "From Accenture and DXC to founder: a personal journey through technology, innovation and care.",
    images: ["/og-v2.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
