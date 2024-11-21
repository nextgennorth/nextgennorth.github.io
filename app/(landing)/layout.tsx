import type { Metadata } from "next";

import Component from "@/components/layouts/default";

import "@fontsource/league-gothic/latin.css";
import "@fontsource/montserrat/latin.css";

import "@/styles/index.scss";

export const metadata: Metadata = {
  title: "NextGenNorth",
  description: "BIG IDEAS - BIGGER IMPACT",
  metadataBase: new URL("https://nextgennorth-github-io.vercel.app"),
  keywords: ["NextGenNorth", "nextgen", "next gen north"],
  authors: [
    { name: "NextGenNorth", url: "https://nextgennorth-github-io.vercel.app/" },
  ],
  openGraph: {
    siteName: "NextGenNorth",
    title: "NextGenNorth",
    description: "BIG IDEAS - BIGGER IMPACT",
    url: "https://nextgennorth-github-io.vercel.app",
    type: "website",
    images:
      "https://nextgennorth-github-io.vercel.app/img/nextgen-thumbnail.png",
  },
  twitter: {
    site: "https://nextgennorth-github-io.vercel.app",
    card: "summary_large_image",
    title: "NextGenNorth",
    description: "BIG IDEAS - BIGGER IMPACT",
    images:
      "https://nextgennorth-github-io.vercel.app/img/nextgen-thumbnail.png",
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

export default Component;
