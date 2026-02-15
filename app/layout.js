// app/layout.js
import "./globals.css";
import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";

export const metadata = {
  title: "Cannabis Security Systems | CalLord Unified Technologies",
  description:
    "State-compliant cannabis security system design, documentation, and implementation support so you pass inspection the first time.",
};

export default function RootLayout({ children }) {
  const hasGA = Boolean(GA_MEASUREMENT_ID);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-white text-slate-900 antialiased">
        {hasGA && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {children}
      </body>
    </html>
  );
}
