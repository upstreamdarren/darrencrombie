import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://darrencrombie.com"),
  title: {
    default: "Darren Crombie | AI for health, care and public services",
    template: "%s | Darren Crombie",
  },
  description:
    "Founder and speaker working to make artificial intelligence useful, responsible and human in health, care and public services.",
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
    title: "Darren Crombie | Technology that helps people thrive",
    description:
      "Ideas and practical work at the meeting point of AI, care and public services.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Darren Crombie — Technology that helps people thrive.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darren Crombie | Technology that helps people thrive",
    description:
      "Ideas and practical work at the meeting point of AI, care and public services.",
    images: ["/og.png"],
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
