import type { Metadata, Viewport } from "next";

const siteName = "Cinematic Dream";
const title = "Cinematic Dream — Hindi Heartland's Own Film Industry";
const description =
  "Cinematic Dream Pvt Ltd — a talent-to-screen ecosystem for India's Hindi heartland (UP · Bihar · Delhi-NCR). Discover, train, pay and make famous — close to home.";
const shareDescription =
  "Discover, train, pay and make famous — close to home. A talent-to-screen ecosystem for Uttar Pradesh, Bihar & Delhi-NCR. No Mumbai gamble. Real, credited, paid screen work.";
const shareImage = "/static/img/hero-set.jpg";
const shareImageAlt =
  "Cinematic Dream — Building the Hindi heartland's own film industry";

function resolveMetadataBase(): URL {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL);
  }

  if (process.env.VERCEL) {
    if (
      process.env.VERCEL_ENV === "production" &&
      process.env.VERCEL_PROJECT_PRODUCTION_URL
    ) {
      return new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
    }

    if (process.env.VERCEL_URL) {
      return new URL(`https://${process.env.VERCEL_URL}`);
    }
  }

  return new URL("http://localhost:3000");
}

export const metadata: Metadata = {
  metadataBase: resolveMetadataBase(),
  title,
  description,
  icons: {
    icon: "/static/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName,
    title,
    description: shareDescription,
    images: [
      {
        url: shareImage,
        width: 1200,
        height: 630,
        alt: shareImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: shareDescription,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Inter:wght@300;400;500;600&family=Tiro+Devanagari+Hindi:ital@0;1&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.1/css/all.min.css"
        />
        <link rel="stylesheet" href="/static/style.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
