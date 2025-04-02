
import "./globals.css";

import NorthenLights from "@/components/NorthenLights";
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: "SparkBites | Web Design Inspiration Directory",
    template: "%s | SparkBites",
  },
  description:
    "Discover SparkBites, a curated directory of innovative web design inspiration. Explore UI/UX trends, creative portfolios, and cutting-edge design resources for your next project.",
  openGraph: {
    title: "SparkBites | Web Design Inspiration Directory",
    description:
      "Discover SparkBites, a curated directory of innovative web design inspiration. Explore UI/UX trends, creative portfolios, and cutting-edge design resources for your next project.",
    url: defaultUrl,
    siteName:
      "Discover SparkBites, a curated directory of innovative web design inspiration. Explore UI/UX trends, creative portfolios, and cutting-edge design resources for your next project.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "/opengraph-image.jpg",
        width: 1800,
        height: 1600,
      },
    ],
  },
  twitter: {
    title: "SparkBites | Web Design Inspiration Directory",
    description:
      "Discover SparkBites, a curated directory of innovative web design inspiration. Explore UI/UX trends, creative portfolios, and cutting-edge design resources for your next project.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "/opengraph-image.jpg",
        width: 1800,
        height: 1600,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
       <head>
        {process.env.NODE_ENV === "production" && (
          <script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id="64cb81c9-f980-4561-a02e-73774d21ce57"
          ></script>
        )}
      </head>
      <body className="antialiased bg-zinc-900">
        <NorthenLights />
        {children}
      </body>
    </html>
  );
}
