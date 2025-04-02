import "./globals.css"

import NorthenLights from "@/components/NorthenLights"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: "Edu Calvo - Diseñador Web & Frontend",
  },
  description: "Diseñador web y Frontend con sede en Madrid",
  openGraph: {
    title: "Edu Calvo - Diseñador Web & Frontend",
    description: "Diseñador web y Frontend con sede en Madrid",
    url: defaultUrl,
    siteName: "Diseñador web y Frontend con sede en Madrid",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "/og.jpg",
        width: 1800,
        height: 1600,
      },
    ],
  },
  twitter: {
    title: "du Calvo - Diseñador Web & Frontend",
    description: "Diseñador web y Frontend con sede en Madrid",
    images: [
      {
        url: "/og.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "/og.jpg",
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
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
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
      <body className="bg-zinc-900 antialiased">
        <NorthenLights />
        {children}
      </body>
    </html>
  )
}
