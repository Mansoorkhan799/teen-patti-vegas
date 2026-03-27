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
    default: "Teen Patti Vegas Pakistan v1.3 Free Download Official APK",
    template: "%s | Teen Patti Vegas"
  },
  description: "Teen Patti Vegas 2026 - Pakistan's #1 casino game platform. Download Teen Patti Vegas APK, play Teen Patti, Rummy, Dragon vs Tiger & win real cash. Fast withdrawals via JazzCash & EasyPaisa. Join 600K+ players!",
  keywords: [
    "Teen Patti Vegas",
    "teen patti vegas game",
    "teen patti vegas download",
    "teen patti vegas app",
    "teen patti vegas apk",
    "teen patti vegas pakistan",
    "teen patti vegas online",
    "download teen patti vegas",
    "teen patti vegas real money",
    "3 Patti Vegas",
    "how to play teen patti vegas",
    "teen patti vegas 2026",
    "Pakistan card games",
    "Teen Patti game",
    "online rummy game",
    "earn money playing cards",
    "Android gaming app 2026",
    "JazzCash gaming",
    "EasyPaisa gaming",
    "mobile card games",
    "real money games Pakistan",
    "card game earning app",
    "Teen Patti online",
    "Dragon vs Tiger",
    "best earning app Pakistan",
    "teenpatti vegas",
    "teen patti vegas apk download"
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
    title: "Teen Patti Vegas Pakistan v1.3 Free Download Official APK",
    description: "Teen Patti Vegas 2026 - Pakistan's #1 casino game platform. Join 600K+ players. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!",
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
    title: "Teen Patti Vegas Pakistan v1.3 Free Download Official APK",
    description: "Teen Patti Vegas 2026 - Pakistan's #1 casino game platform. Join 600K+ players. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!",
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
        
        {/* Structured data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://teenpattivegasgame.com.pk/#organization",
              "name": "Teen Patti Vegas",
              "url": "https://teenpattivegasgame.com.pk",
              "logo": {
                "@type": "ImageObject",
                "url": "https://teenpattivegasgame.com.pk/teen-patti-vegas-pakistan-logo.webp",
                "width": 192,
                "height": 192
              },
              "description": "Teen Patti Vegas is Pakistan's top casino gaming platform, offering Teen Patti, Rummy, Dragon vs Tiger and many other games with real cash rewards.",
              "sameAs": [
                "https://www.facebook.com/share/16zhtoNKJq/?mibextid=wwXIfr",
                "https://www.pinterest.com/3pattivegaspk/"
              ]
            })
          }}
        />
        
        {/* Structured data for SoftwareApplication */}
        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Teen Patti Vegas",
              "url": "https://teenpattivegasgame.com.pk/",
              "operatingSystem": "Android 5.0+",
              "applicationCategory": "GameApplication",
              "author": {
                "@id": "https://teenpattivegasgame.com.pk/#organization"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "PKR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "ratingCount": "600000"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
