import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://darrencrombie.com"),
  title: {
    default: "Darren Crombie | Founder, technologist & builder",
    template: "%s | Darren Crombie",
  },
  description:
    "Founder and technologist Darren Crombie builds practical AI for carers, communities and public services, including Bridgit Care, Brum Chat and My UK Life.",
  applicationName: "Darren Crombie",
  creator: "Darren Crombie",
  keywords: [
    "Darren Crombie",
    "responsible AI",
    "social care technology",
    "public service innovation",
    "Bridgit Care",
    "Bridgit Care Local",
    "Brum Chat",
    "Upstream Health",
    "Any Guru",
    "My UK Life",
    "international recruits",
    "unpaid carers",
    "Innovate UK",
    "Carers Trust",
    "community resilience",
    "local welfare support",
    "Crisis and Resilience Fund",
    "social impact",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://darrencrombie.com",
    siteName: "Darren Crombie",
    title: "Darren Crombie | Tech is the thread. People are the point.",
    description:
      "Practical AI for carers, communities and public services — from Bridgit Care to Brum Chat and My UK Life.",
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
      "Practical AI for carers, communities and public services — built around impact, not technology for its own sake.",
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
