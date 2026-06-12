import Script from "next/script";
import { getPageBody } from "@/lib/page-content";

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: getPageBody() }} />
      <Script src="/static/app.js" strategy="afterInteractive" />
    </>
  );
}
