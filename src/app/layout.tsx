import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06091F",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://teenpattivegasgame.com.pk'),
  title: {
    default: "Teen Patti Vegas | 3 Patti Vegas Pakistan APK Download 2026 - Real Money",
    template: "%s | Teen Patti Vegas"
  },
  description: "Download Teen Patti Vegas APK latest version 2026 — Pakistan's #1 real money casino app. Play 35+ games: Teen Patti, Rummy, Dragon vs Tiger, Ludo & more. Earn real cash via JazzCash & EasyPaisa. Get PKR 100 welcome bonus. Works on 2G!",
  keywords: [
    "Teen Patti Vegas",
    "3 Patti Vegas",
    "3patti vegas",
    "teen patti vegas download",
    "teen patti vegas app",
    "teen patti vegas apk",
    "teen patti vegas pakistan",
    "teenpatti vegas",
    "teen patti vegas game",
    "teen patti vegas online",
    "download teen patti vegas",
    "teen patti vegas real money",
    "teen patti vegas latest version",
    "teen patti vegas star",
    "3 patti vegas download",
    "3 patti vegas apk",
    "ludo vegas",
    "how to play teen patti vegas",
    "teen patti vegas 2026",
    "Pakistan card games",
    "casino app pakistan",
    "Teen Patti game",
    "online rummy game",
    "earn money playing cards",
    "Android gaming app 2026",
    "JazzCash gaming",
    "EasyPaisa gaming",
    "easypaisa game",
    "jazzcash game",
    "mobile card games",
    "real money games Pakistan",
    "card game earning app",
    "Teen Patti online",
    "Dragon vs Tiger",
    "best earning app Pakistan",
    "teen patti vegas apk download",
    "pkr 100 bonus",
    "welcome bonus pkr"
  ],
  authors: [{ name: "Teen Patti Vegas Team" }],
  creator: "Teen Patti Vegas",
  publisher: "Teen Patti Vegas",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/teen-patti-vegas-pakistan-logo.webp', type: 'image/webp', sizes: '192x192' },
      { url: '/teen-patti-vegas.webp', type: 'image/webp', sizes: '512x512' }
    ],
    apple: [
      { url: '/teen-patti-vegas-pakistan-logo.webp', sizes: '180x180' }
    ],
    shortcut: [
      { url: '/teen-patti-vegas-pakistan-logo.webp', type: 'image/webp' }
    ]
  },
  alternates: {
    canonical: "https://teenpattivegasgame.com.pk",
  },
  openGraph: {
    title: "Teen Patti Vegas | 3 Patti Vegas Pakistan - Download APK & Earn Real Money",
    description: "Pakistan's #1 Teen Patti Vegas platform. Join 600K+ players. Play 35+ games — Teen Patti, Rummy, Dragon vs Tiger & more. Earn real money via JazzCash & EasyPaisa. Get PKR 100 welcome bonus!",
    url: "https://teenpattivegasgame.com.pk",
    siteName: "Teen Patti Vegas",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://teenpattivegasgame.com.pk/feature/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Teen Patti Vegas - Premier Casino Gaming Platform",
      },
      {
        url: "https://teenpattivegasgame.com.pk/feature/og-image-square.webp",
        width: 800,
        height: 800,
        alt: "Teen Patti Vegas - Premier Casino Gaming Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teen Patti Vegas | 3 Patti Vegas Pakistan - Real Money App",
    description: "Pakistan's #1 Teen Patti Vegas platform. Play 35+ games, earn real cash via JazzCash & EasyPaisa. Get PKR 100 welcome bonus!",
    creator: "@teenpattivegas",
    images: [
      {
        url: "https://teenpattivegasgame.com.pk/feature/twitter-card.webp",
        width: 1200,
        height: 600,
        alt: "Teen Patti Vegas - Premier Casino Gaming Platform",
      }
    ],
  },
  applicationName: "Teen Patti Vegas",
  category: "Gaming",
  classification: "Casino Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/teen-patti-vegas-pakistan-logo.webp" type="image/webp" sizes="192x192" />
        <link rel="shortcut icon" href="/teen-patti-vegas-pakistan-logo.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/teen-patti-vegas-pakistan-logo.webp" sizes="180x180" />
        <meta property="og:image" content="https://teenpattivegasgame.com.pk/teen-patti-vegas-pakistan-logo.webp" />

        {/* ── Geo Targeting ── Pakistan-specific ranking signals */}
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Pakistan" />
        <meta name="geo.position" content="30.3753;69.3451" />
        <meta name="ICBM" content="30.3753, 69.3451" />

        {/* ── Hreflang ── language + regional signals */}
        <link rel="alternate" hrefLang="en" href="https://teenpattivegasgame.com.pk/" />
        <link rel="alternate" hrefLang="x-default" href="https://teenpattivegasgame.com.pk/" />

        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Defer manifest to avoid critical path (374ms latency) - load after page interactive */}
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {/* Google Analytics - only load if GA ID is set in env (use NEXT_PUBLIC_GA_MEASUREMENT_ID) */}
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === 'string' &&
         process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
         !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className="antialiased bg-primary text-white min-h-screen flex flex-col"
        style={{
          backgroundImage: "radial-gradient(circle at 10% 20%, rgba(10, 16, 41, 0.4) 0%, rgba(6, 9, 31, 0.01) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <Header />
        <main className="flex-grow relative z-10">
        {children}
        </main>
        <DeferredStyles />
        <Footer />
        <ScrollToTopWrapper />
        <WebVitalsTracker />
        
        {/* Organization & SoftwareApplication schema are in page.tsx to avoid duplication */}
      </body>
    </html>
  );
}
