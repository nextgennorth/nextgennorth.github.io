import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Header from "./shared-components/header";
import Footer from "./shared-components/footer";

const geistSans = localFont({
  src: "./fonts/LeagueGothic-Regular.ttf",
  variable: "--font-LeagueGothic",
  weight: "400",
});
const geistMono = localFont({
  src: "./fonts/helveticaneuemedium-webfont.woff",
  variable: "--font-helveticaneue",
  weight: "300",
});

export const metadata: Metadata = {
  title: "NextGenNorth",
  description: "NextGenNorth website",
  metadataBase: new URL("https://nextgennorth.au"),
  keywords: ['NextGenNorth', 'nextgen','next gen north'],
  authors: [{ name: 'NextGenNorth', url: 'https://nextgennorth.au' }],
  openGraph: {
    siteName: 'NextGenNorth',
    title: "NextGenNorth",
    description: "NextGenNorth website",
    url: 'https://nextgennorth.au',
    type: "website",
    images: 'https://nextgennorth.org/img/nextgen-thumbnail.png',
  },
  twitter: {
    site: "https://nextgennorth.au",
    card: "summary_large_image",
    title: "NextGenNorth",
    description: "NextGenNorth website",
    images: "https://nextgennorth.au/img/nextgen-thumbnail.png"
  },
  // icons: {
  //   icon: [
  //     {
  //       media: '(prefers-color-scheme: light)',
  //       url: 'favicon-light.svg',
  //       href: 'favicon-light.svg',
  //     },
  //     {
  //       media: '(prefers-color-scheme: dark)',
  //       url: 'favicon-dark.svg',
  //       href: 'favicon-dark.svg',
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
