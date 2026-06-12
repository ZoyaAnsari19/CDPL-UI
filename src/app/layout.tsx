import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cinematic Dream — Hindi Heartland's Own Film Industry",
  description:
    "Cinematic Dream Pvt Ltd — a talent-to-screen ecosystem for India's Hindi heartland (UP · Bihar · Delhi-NCR). Discover, train, pay and make famous — close to home.",
  icons: {
    icon: "/static/favicon.svg",
  },
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
