import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'About Teen Patti Vegas – Pakistan\'s #1 Card Gaming Platform',
  description: 'Learn about Teen Patti Vegas, our history, mission, and vision for creating the best card gaming platform in Pakistan with Teen Patti, Rummy and more.',
  keywords: ['Teen Patti Vegas about', 'about us', 'gaming company Pakistan', 'Teen Patti Vegas history', 'card gaming platform', 'Teen Patti', '3 Patti'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://teenpattivegasgame.com.pk/about-us",
  },
  openGraph: {
    title: 'About Teen Patti Vegas – Pakistan\'s #1 Card Gaming Platform',
    description: 'Learn about Teen Patti Vegas, our history, mission, and vision for creating the best card gaming platform in Pakistan with real cash rewards.',
    url: "https://teenpattivegasgame.com.pk/about-us",
    siteName: "Teen Patti Vegas",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://teenpattivegasgame.com.pk/feature/og-image.webp",
        width: 1200,
        height: 630,
        alt: "About Teen Patti Vegas – Pakistan's #1 Card Gaming Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'About Teen Patti Vegas – Pakistan\'s #1 Card Gaming Platform',
    description: 'Learn about Teen Patti Vegas, our history, mission, and vision for creating the best card gaming platform in Pakistan with real cash rewards.',
    images: ["https://teenpattivegasgame.com.pk/feature/og-image.webp"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Us</h1>
          </div>
          
          {/* Main Content */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-20 mb-8">
              <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                <Link href="/" className="block">
                  <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] mx-auto md:mx-0 rounded-lg overflow-hidden bg-[#0A1029]">
                    <Image 
                      src="/teen-patti-vegas-pakistan-logo.webp" 
                      alt="Teen Patti Vegas Pakistan Logo" 
                      width={320}
                      height={320}
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-contain p-4 w-full h-full"
                      priority
                    />
                  </div>
                </Link>
              </div>
              <div className="md:w-2/3 md:pl-4 lg:pl-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Welcome to <a href="https://www.teenpattivegasgame.com.pk/" className="text-accent hover:text-accent font-semibold" target="_blank" rel="noopener noreferrer">www.teenpattivegasgame.com.pk</a>, a trusted platform to provide the latest information about 3patti <Link href="/" className="text-accent hover:underline font-semibold">Teen Patti Vegas</Link>. This is one of the most popular online casino games in Pakistan, having <span className="font-bold text-accent">600K+ users</span>. <Link href="/download-teen-patti-vegas" className="text-accent hover:underline font-semibold">Download Teen Patti Vegas</Link> now to join thousands of players earning real cash rewards.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Hundreds of people are playing these wonderful games and earning a handsome amount on a daily or weekly basis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Aim Section */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">Our Aim!</h2>
            <p className="text-lg md:text-xl text-white leading-relaxed text-center">
              Our aim is to provide the users with the latest and updated information and earning tips about Teen Patti Vegas. Browse our <Link href="/blog" className="underline hover:text-orange-100 font-semibold">blog</Link> for guides, tips, and reviews. For any queries, visit our <Link href="/contact-us" className="underline hover:text-orange-100 font-semibold">contact us page</Link>.
            </p>
          </div>

          {/* Helpful Resources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <Link href="/deposit-money-in-teen-patti-vegas" className="bg-secondary p-5 rounded-xl border border-gray-700 hover:border-accent transition-colors">
              <h3 className="text-white font-semibold mb-1">💳 How to Deposit Money</h3>
              <p className="text-gray-400 text-sm">Add funds via JazzCash or EasyPaisa</p>
            </Link>
            <Link href="/withdraw-money-from-teen-patti-vegas" className="bg-secondary p-5 rounded-xl border border-gray-700 hover:border-accent transition-colors">
              <h3 className="text-white font-semibold mb-1">💸 How to Withdraw Money</h3>
              <p className="text-gray-400 text-sm">Cash out your winnings securely</p>
            </Link>
            <Link href="/blog/how-to-use-teen-patti-vegas-app-pakistan-guide-2026" className="bg-secondary p-5 rounded-xl border border-gray-700 hover:border-accent transition-colors">
              <h3 className="text-white font-semibold mb-1">📖 Beginner&apos;s Guide</h3>
              <p className="text-gray-400 text-sm">Step-by-step: download, register & earn</p>
            </Link>
            <Link href="/blog/is-teen-patti-vegas-safe-legal-pakistan" className="bg-secondary p-5 rounded-xl border border-gray-700 hover:border-accent transition-colors">
              <h3 className="text-white font-semibold mb-1">🔒 Is It Safe & Legal?</h3>
              <p className="text-gray-400 text-sm">Full safety and legal review for Pakistan</p>
            </Link>
          </div>
          
          {/* Contact CTA */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Have Questions?</h2>
            <p className="text-gray-300 mb-6 text-lg">
              We&apos;re here to help! Contact our team for any information or queries about Teen Patti Vegas.
            </p>
            <Link 
              href="/contact-us" 
              className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Teen Patti Vegas",
              "alternateName": "3 Patti Vegas",
              "url": "https://teenpattivegasgame.com.pk",
              "logo": "https://teenpattivegasgame.com.pk/teen-patti-vegas-pakistan-logo.webp",
              "description": "Teen Patti Vegas is Pakistan's premier card gaming platform, offering Teen Patti, Rummy, Dragon vs Tiger and more with real cash rewards.",
              "foundingDate": "2024",
              "foundingLocation": {
                "@type": "Country",
                "name": "Pakistan"
              },
              "sameAs": [
                "https://www.facebook.com/share/16zhtoNKJq/?mibextid=wwXIfr",
                "https://www.pinterest.com/3pattivegaspk/"
              ],
              "founder": {
                "@type": "Organization",
                "name": "3 Patti Vegas"
              }
            },
            "about": {
              "@type": "Thing",
              "name": "Card Gaming Platform",
              "description": "Online card gaming platform with real cash rewards serving Pakistani users"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://teenpattivegasgame.com.pk/about-us"
            }
          })
        }}
      />
    </div>
  );
} 