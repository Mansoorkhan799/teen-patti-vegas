import Image from "next/image";
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
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
    "3 Patti Vegas",
    "teenpatti vegas",
    "teen patti vegas 2026",
    "Pakistan casino games",
    "Teen Patti game",
    "online rummy game",
    "earn money playing cards",
    "Android gaming app 2026",
    "JazzCash gaming",
    "EasyPaisa gaming",
    "real money games Pakistan",
    "Dragon vs Tiger",
    "best earning app Pakistan"
  ],
  alternates: {
    canonical: "https://teenpattivegasgame.com.pk/",
  },
  openGraph: {
    title: 'Teen Patti Vegas Pakistan v1.3 Free Download Official APK',
    description: 'Teen Patti Vegas 2026 - Pakistan\'s #1 casino game platform. Join 600K+ players. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!',
    images: [
      {
        url: 'https://teenpattivegasgame.com.pk/feature/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Teen Patti Vegas - Premier Casino Gaming Platform'
      },
      {
        url: 'https://teenpattivegasgame.com.pk/feature/og-image-square.webp',
        width: 800,
        height: 800,
        alt: 'Teen Patti Vegas - Premier Casino Gaming Platform'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teen Patti Vegas Pakistan v1.3 Free Download Official APK',
    description: 'Teen Patti Vegas 2026 - Pakistan\'s #1 casino game platform. Join 600K+ players. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!',
    images: ['https://teenpattivegasgame.com.pk/feature/og-image.webp']
  }
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://teenpattivegasgame.com.pk/#website",
        "url": "https://teenpattivegasgame.com.pk/",
        "name": "Teen Patti Vegas",
        "description": "Pakistan's top casino game platform with Teen Patti, Rummy, Dragon Tiger and more",
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://teenpattivegasgame.com.pk/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://teenpattivegasgame.com.pk/#organization",
        "name": "Teen Patti Vegas",
        "url": "https://teenpattivegasgame.com.pk/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://teenpattivegasgame.com.pk/teen-patti-vegas.webp",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://www.facebook.com/share/16zhtoNKJq/?mibextid=wwXIfr",
          "https://www.pinterest.com/3pattivegaspk/"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "support@teenpattivegasgame.com.pk",
          "contactType": "Customer Support",
          "areaServed": "PK"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Teen Patti Vegas",
        "operatingSystem": "Android 5.0+",
        "applicationCategory": "GameApplication",
        "image": "https://teenpattivegasgame.com.pk/teen-patti-vegas.webp",
        "logo": "https://teenpattivegasgame.com.pk/teen-patti-vegas.webp",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.5",
          "ratingCount": "600000"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "PKR"
        },
        "downloadUrl": "https://teenpattivegasgame.com.pk/download-teen-patti-vegas",
        "softwareVersion": "1.3(1)",
        "fileSize": "47.21MB",
        "description": "Play Teen Patti, Rummy, Dragon Tiger and other casino games. Earn real money with JazzCash & EasyPaisa withdrawals.",
        "screenshot": [
          "https://teenpattivegasgame.com.pk/teen-patti-vegas.webp",
          "https://teenpattivegasgame.com.pk/teen-patti-vegas-app-interface.webp",
          "https://teenpattivegasgame.com.pk/teen-patti-vegas-games.webp",
          "https://teenpattivegasgame.com.pk/teen-patti-vegas-add-moeny.webp",
          "https://teenpattivegasgame.com.pk/teen-patti-vegas-withdraw-money.webp",
          "https://teenpattivegasgame.com.pk/teen-patti-vegas-refer-and-earn.webp"
        ],
        "author": {
          "@type": "Organization",
          "name": "3 Patti Vegas"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Teen Patti Vegas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Teen Patti Vegas is Pakistan's top online casino game platform where you can play Teen Patti, Rummy, Dragon vs Tiger, and many other exciting casino games. Teen Patti Vegas offers real cash rewards with fast withdrawals via JazzCash and EasyPaisa."
            }
          },
          {
            "@type": "Question",
            "name": "How to download Teen Patti Vegas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can download Teen Patti Vegas APK from the official website teenpattivegasgame.com.pk. The app is available for Android devices and can be installed directly by downloading the APK file."
            }
          },
          {
            "@type": "Question",
            "name": "How to download Teen Patti Vegas app for Android?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To download the Teen Patti Vegas app for Android, visit teenpattivegasgame.com.pk, click the download button, enable Unknown Sources in your settings, and install the APK file. The Teen Patti Vegas game is free to download and works on Android 5.0 or higher."
            }
          },
          {
            "@type": "Question",
            "name": "Is Teen Patti Vegas safe and legal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Teen Patti Vegas is safe to use with secure data protection. The platform uses encrypted transactions and protects user privacy. However, legality depends on local laws, so always check your region's regulations."
            }
          },
          {
            "@type": "Question",
            "name": "How to earn money on Teen Patti Vegas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can earn money on Teen Patti Vegas by playing games like Teen Patti, Rummy, and Dragon vs Tiger. The platform offers welcome bonuses, daily rewards, referral commissions of 800-1000 PKR per player, and deposit bonuses to help you start earning."
            }
          },
          {
            "@type": "Question",
            "name": "How to withdraw money from Teen Patti Vegas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can withdraw money from Teen Patti Vegas using JazzCash or EasyPaisa. Go to the Withdraw section, enter the amount, choose your payment method, fill in your details, and tap Confirm. Withdrawals are processed within minutes."
            }
          },
          {
            "@type": "Question",
            "name": "What games are available on Teen Patti Vegas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Teen Patti Vegas offers 35+ games including Teen Patti, Classic Rummy, Dragon vs Tiger, Andar Bahar, Ludo, Zoo Roulette, Mines, Domino, 7 UP Down, and various slot games. All games are available 24/7 with real cash prizes."
            }
          },
          {
            "@type": "Question",
            "name": "What bonuses does Teen Patti Vegas offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Teen Patti Vegas offers welcome bonuses for new users (100% match), daily login bonuses, deposit bonuses, referral bonuses of 800-1000 PKR per player, recharge rebates up to 30%, and VIP transfer bonuses."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <Script
        id="homepage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" style={{ minHeight: '400px' }}>
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">Teen Patti Vegas</span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-[#FFA500]">Game Download Latest Version</span>{' '}
                <span className="text-white">For Android 2026</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed" style={{ contain: 'layout style', minHeight: '120px', display: 'block' }}>
              <Link href="/" className="text-accent hover:underline">Teen Patti Vegas</Link>, also known as 3 Patti Vegas, is one of the best casino games where players can play various games and earn real money. It is mostly played in Pakistan, and it works efficiently on Android devices. You can play more than 35 games and place bets on them to earn real cash.
            </p>

            {/* Download Button */}
            <div className="flex justify-center my-8">
              <a 
                href="https://pkteenpattivegas.com/?from_gameid=7225198&channelCode=4713331"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group"
              >
                <span>DOWNLOAD NOW</span>
                <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                </div>
              </a>
            </div>

            {/* Stats Grid */}
            <div className="flex flex-row gap-4 justify-center mt-8 mb-4" style={{ minHeight: '120px' }}>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: '120px' }}>
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <div className="text-white text-2xl font-bold mb-1">600K+</div>
                <div className="text-gray-400 text-sm">Downloads</div>
              </div>
              
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: '120px' }}>
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <div className="text-white text-2xl font-bold mb-1">4.5/5</div>
                <div className="text-gray-400 text-sm">Rating</div>
              </div>
              
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: '120px' }}>
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                <div className="text-white text-2xl font-bold mb-1">47.21MB</div>
                <div className="text-gray-400 text-sm">App Size</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm text-center italic">*Available for Android devices only</p>
          </div>

          {/* Desktop Image */}
          <div className="hidden md:block md:w-1/2 md:mt-8">
            <div className="relative ml-auto" style={{ width: '320px', height: '320px', maxWidth: '100%' }}>
              <Image
                src="/teen-patti-vegas.webp"
                alt="Teen Patti Vegas Logo"
                width={320}
                height={320}
                className="object-contain drop-shadow-2xl"
                priority={true}
                fetchPriority="high"
                quality={90}
                sizes="320px"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Mobile Image */}
          <div className="mt-8 md:hidden">
            <div className="relative mx-auto" style={{ width: '280px', height: '280px', maxWidth: '100%' }}>
              <Image
                src="/teen-patti-vegas.webp"
                alt="Teen Patti Vegas Logo"
                width={280}
                height={280}
                className="object-contain drop-shadow-2xl"
                priority={true}
                fetchPriority="high"
                quality={90}
                sizes="280px"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Specifications Table */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Download Information</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">App Name</td>
                  <td className="py-4 px-6 text-left text-white">Teen Patti Vegas</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Category</td>
                  <td className="py-4 px-6 text-left text-white">Cards, Game</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">APK Size</td>
                  <td className="py-4 px-6 text-left text-white">47.21MB</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Latest Version</td>
                  <td className="py-4 px-6 text-left text-white">1.3(1)</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Requirements</td>
                  <td className="py-4 px-6 text-left text-white">Android 5.0+</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Last Update</td>
                  <td className="py-4 px-6 text-left text-white">15-March-2026</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Downloads</td>
                  <td className="py-4 px-6 text-left text-white">600K+</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Ratings</td>
                  <td className="py-4 px-6 text-left text-white">4.5/5</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Developers</td>
                  <td className="py-4 px-6 text-left text-white">3 Patti Vegas</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Gaming Language</td>
                  <td className="py-4 px-6 text-left text-white">English & Urdu</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Price</td>
                  <td className="py-4 px-6 text-left text-white">Free (0$)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What is Teen Patti Vegas Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">What is the Teen Patti Vegas Game?</h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Teen Patti Vegas Game is an app that gives you fun and comfort when you play different online games. It can give you money if you play games smartly. Some games of this wagering platform are based on luck, while other games require skills and practice. You can bet on live sports matches that make this game more exciting.
            </p>
            <p className="text-gray-300 leading-relaxed">
              It is not difficult to play for anyone because it is made with a simple design. You can also change the language to Urdu for better understanding and comfort. Users can enjoy daily, weekly, and monthly bonuses that are provided by the platform. Your VIP level increases when you deposit more money, and it means you can get higher rewards and special offers.
            </p>
          </div>
        </div>
      </section>

      {/* Promotions & Rewards Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Different Promotions & Rewards on Teen Patti Vegas</h2>

          {/* Refer & Earn */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">Refer & Earn</h3>
            <p className="text-gray-300 mb-4">You can earn money on TeenPatti Vegas just by referring your friends and family to the game. Each valid sub player on this game helps you earn up to 800 to 1000 rupees as a bonus.</p>
          </div>

          {/* New Player Bonus */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">New Player Bonus</h3>
            <p className="text-gray-300 mb-4">Now, this game offers a large amount of money as a bonus on your arrival in the game. You can earn thousands of rupees as a bonus on your first deposit in the game.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
                <thead className="bg-[#0a1029]">
                  <tr>
                    <th className="py-3 px-6 text-left text-white font-semibold">Deposit Amount (PKR)</th>
                    <th className="py-3 px-6 text-left text-white font-semibold">Bonus Amount (PKR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">100</td><td className="py-3 px-6 text-gray-300">100</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">1,000</td><td className="py-3 px-6 text-gray-300">1,000</td></tr>
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">5,000</td><td className="py-3 px-6 text-gray-300">5,000</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">10,000</td><td className="py-3 px-6 text-gray-300">10,000</td></tr>
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">20,000</td><td className="py-3 px-6 text-gray-300">20,000</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">100,000</td><td className="py-3 px-6 text-gray-300">100,000</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* VIP Promo */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">VIP Promo</h3>
            <p className="text-gray-300 mb-4">If you are a VIP on another platform, then switch your level to the TeenPatti Vegas game and get heavy salaries and bonuses.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
                <thead className="bg-[#0a1029]">
                  <tr>
                    <th className="py-3 px-4 text-left text-white font-semibold text-sm">Competitor VIP</th>
                    <th className="py-3 px-4 text-left text-white font-semibold text-sm">Granted VIP</th>
                    <th className="py-3 px-4 text-left text-white font-semibold text-sm">Compensation</th>
                    <th className="py-3 px-4 text-left text-white font-semibold text-sm">Monthly Claimable</th>
                    <th className="py-3 px-4 text-left text-white font-semibold text-sm">Deposit Required</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-4 text-gray-300 text-sm">VIP3</td><td className="py-3 px-4 text-gray-300 text-sm">VIP3</td><td className="py-3 px-4 text-gray-300 text-sm">30,000</td><td className="py-3 px-4 text-gray-300 text-sm">3,000/Month</td><td className="py-3 px-4 text-gray-300 text-sm">9,000</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-4 text-gray-300 text-sm">VIP4</td><td className="py-3 px-4 text-gray-300 text-sm">VIP4</td><td className="py-3 px-4 text-gray-300 text-sm">40,000</td><td className="py-3 px-4 text-gray-300 text-sm">4,000/Month</td><td className="py-3 px-4 text-gray-300 text-sm">12,000</td></tr>
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-4 text-gray-300 text-sm">VIP5</td><td className="py-3 px-4 text-gray-300 text-sm">VIP5</td><td className="py-3 px-4 text-gray-300 text-sm">50,000</td><td className="py-3 px-4 text-gray-300 text-sm">5,000/Month</td><td className="py-3 px-4 text-gray-300 text-sm">15,000</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-4 text-gray-300 text-sm">VIP6</td><td className="py-3 px-4 text-gray-300 text-sm">VIP6</td><td className="py-3 px-4 text-gray-300 text-sm">60,000</td><td className="py-3 px-4 text-gray-300 text-sm">6,000/Month</td><td className="py-3 px-4 text-gray-300 text-sm">18,000</td></tr>
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-4 text-gray-300 text-sm">VIP7</td><td className="py-3 px-4 text-gray-300 text-sm">VIP7</td><td className="py-3 px-4 text-gray-300 text-sm">70,000</td><td className="py-3 px-4 text-gray-300 text-sm">7,000/Month</td><td className="py-3 px-4 text-gray-300 text-sm">21,000</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-4 text-gray-300 text-sm">VIP8</td><td className="py-3 px-4 text-gray-300 text-sm">VIP8</td><td className="py-3 px-4 text-gray-300 text-sm">80,000</td><td className="py-3 px-4 text-gray-300 text-sm">8,000/Month</td><td className="py-3 px-4 text-gray-300 text-sm">24,000</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Recharge Rebate */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">Recharge Rebate</h3>
            <p className="text-gray-300 mb-4">Recharge Rebate is a special type of bonus where you can receive a bonus by recharging some amount in the game. You can withdraw the recharge rebate bonus by playing games and completing wagers.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
                <thead className="bg-[#0a1029]">
                  <tr>
                    <th className="py-3 px-6 text-left text-white font-semibold">Rebate</th>
                    <th className="py-3 px-6 text-left text-white font-semibold">Recharge More than</th>
                    <th className="py-3 px-6 text-left text-white font-semibold">Required Wager</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">5%</td><td className="py-3 px-6 text-gray-300">3,000</td><td className="py-3 px-6 text-gray-300">2x</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">10%</td><td className="py-3 px-6 text-gray-300">5,000</td><td className="py-3 px-6 text-gray-300">3x</td></tr>
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">15%</td><td className="py-3 px-6 text-gray-300">8,000</td><td className="py-3 px-6 text-gray-300">4x</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">20%</td><td className="py-3 px-6 text-gray-300">10,000</td><td className="py-3 px-6 text-gray-300">5x</td></tr>
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">25%</td><td className="py-3 px-6 text-gray-300">20,000</td><td className="py-3 px-6 text-gray-300">6x</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">30%</td><td className="py-3 px-6 text-gray-300">50,000</td><td className="py-3 px-6 text-gray-300">7x</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Double Bonus */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">Double Bonus</h3>
            <p className="text-gray-300">To earn a double bonus on this platform, you must share the game link with your friends on social media like WhatsApp, Facebook, and Telegram. The more you invite your friends, the higher you can earn from this platform.</p>
          </div>
        </div>
      </section>

      {/* How to Get Started Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Get Started with TeenPatti Vegas?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">1. Download the App</h3>
              <p className="text-gray-300">Visit the official website or a trusted source to download the TeenPatti Vegas APK on your Android phone. Click on the download button. Once done, install it by allowing unknown sources in your phone settings.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">2. Create your Account</h3>
              <p className="text-gray-300">After successfully installing, open the app and start creating your account. You will get a small bonus after registration to start the game.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">3. Choose your Game</h3>
              <p className="text-gray-300">You can see a lot of games, such as Teen Patti, Rummy, Ludo, and more. Select your favorite game and choose the table that suits your budget level.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">4. Start Playing</h3>
              <p className="text-gray-300">Place a bet, play your cards smartly, and enjoy the game to earn real cash. If you win, your earnings will be added to your wallet instantly.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">5. Withdraw your Winnings</h3>
              <p className="text-gray-300">When you have collected enough money in your wallet, withdraw your winnings quickly using Easypaisa and JazzCash. The withdrawal process is easy, simple, fast, and secure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Screenshots Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#06091F] rounded-xl p-8">
          <h2 className="text-4xl font-bold mb-12 text-[#FFA500] text-center">Teen Patti Vegas App Screenshots</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/teen-patti-vegas-app-interface.webp"
                  alt="Teen Patti Vegas Game Interface"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Game Interface</p>
            </div>

            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/teen-patti-vegas-games.webp"
                  alt="Teen Patti Vegas Games Collection"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Games Collection</p>
            </div>

            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/teen-patti-vegas-add-moeny.webp"
                  alt="Teen Patti Vegas Add Money"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Add Money</p>
            </div>

            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/teen-patti-vegas-withdraw-money.webp"
                  alt="Teen Patti Vegas Withdraw Money"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Withdraw Money</p>
            </div>

            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/teen-patti-vegas-refer-and-earn.webp"
                  alt="Teen Patti Vegas Refer and Earn"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Refer & Earn</p>
            </div>
          </div>

        </div>
      </section>

      {/* What's New Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">What's New in the Latest Version of TeenPatti Vegas APK?</h2>
          <div className="space-y-4">
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>It allows you to reset your password directly within the game app anytime.</li>
              <li>It increased the deposit limit, so you can add up to 1000 PKR at one time.</li>
              <li>It also improved the background music and sound in the latest version.</li>
              <li>To make transactions safer, it has enhanced security and encryption for deposits and withdrawals.</li>
              <li>Now you can enjoy more tournaments and competitions in the app.</li>
              <li>The latest version improves the game atmosphere and anti-cheat measures.</li>
              <li>The latest version adds new games other than card games, such as Car Roulette, Crash, etc.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Top Features Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">Top Features of Teen Patti Vegas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">1: Real-Money Earning</h3>
              <p className="text-gray-300">You can earn real cash through different games and events. This game gives you a chance to earn money by joining tournaments or completing tasks in the app. The game offers secure and fast payment options.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">2: Wide Game Variety</h3>
              <p className="text-gray-300">Teen Patti Vegas offers a wide range of fun cards and casino games including Ludo, Rummy, Teen Patti, and many more. These games keep the players fresh and entertained.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">3: Daily Bonuses & Rewards</h3>
              <p className="text-gray-300">It gives players free bonuses and rewards every day just for logging in. You can get daily chips, coins, and surprise gifts to keep playing longer. Old players often get extra prizes and special event rewards.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">4: Easy Deposit & Withdrawal</h3>
              <p className="text-gray-300">This amazing platform offers simple and fast payment options for all players. The app supports secure payment methods, like Easypaisa and JazzCash. All your transactions are safe and quick.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">5: User-Friendly Interface</h3>
              <p className="text-gray-300">It has a clean and simple layout that is easy for everyone to use. All game options and buttons are well-organized and clear for new and old players. Its smooth design makes the game comfortable, fast, and enjoyable.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">6: Multiple Language Support</h3>
              <p className="text-gray-300">TeenPatti Vegas can be played in many different languages, making it easy for every player to use. You can select your favorite language from the settings menu including English and Urdu.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">7: Regular Updates & Bug Fixes</h3>
              <p className="text-gray-300">This game regularly updates its features and brings new things and improvements for players. Each update of the game makes it run smoother and faster than before.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">8: Safe & Secure Platform</h3>
              <p className="text-gray-300">Teen Patti Vegas uses a secure system to protect your personal information and game data. It follows the legal rules of online entertainment to ensure safe gameplay.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">9: 24/7 Customer Support</h3>
              <p className="text-gray-300">Teen Patti Vegas provides help and assistance every time for its users. You can reach the support team anytime through WhatsApp and Telegram. The Support Team is always ready to solve your problems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highest Paying Games */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Highest Paying Games on TeenPatti Vegas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Sports</h3>
              <p className="text-gray-300">Sports Games offers you to get high payouts by betting on different matches, leagues, and sports. The interface of sports games is designed to be easy for all players with high-earning opportunities.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Dragon VS Tiger</h3>
              <p className="text-gray-300">Dragon VS Tiger is one of the most played casino games on Teen Patti Vegas. It is a simple card game with two sides — fast-paced and thrilling where you can earn a good amount.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Zoo Roulette</h3>
              <p className="text-gray-300">Zoo Roulette is a traditional game with easy rules and gameplay. You can earn exciting rewards just by placing bets on the different numbers. It provides bigger winning chances than any other game.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Mines</h3>
              <p className="text-gray-300">Mines is a strategic game based on luck. You just need to tap on the tiles and avoid the mines to earn potential rewards. Each safe tile provides you with potential rewards and money.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Domino</h3>
              <p className="text-gray-300">It is one of the best table games where you need to align the tiles with the same numbers. You must plan your moves wisely to earn the potential outcomes based on luck and strategy.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">7 UP Down</h3>
              <p className="text-gray-300">7 UP Down is a simple prediction game where you need to predict the different numbers. You should guess whether the next number will be higher, lower than 7, or exactly 7 to win the game.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Instructions */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Download TeenPatti Vegas APK Latest Version For Android</h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300 mb-8">
            <li>Open the Official Website — visit the official website using your Android browser.</li>
            <li>Tap Download Button — look for the Download APK button highlighted on the main page. Click on it to start downloading.</li>
            <li>Wait for Download — wait until the APK file fully downloads on your device.</li>
            <li>Check Downloads Folder — once completed, find the APK file saved in the File Manager.</li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Installation of TeenPatti Vegas APK (For Android)</h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300 mb-8">
            <li>Enable Unknown Sources — go to phone Settings &gt; Security and turn on Install from Unknown Sources.</li>
            <li>Open the Downloaded File — click on the Teen Patti Vegas APK in the Downloads folder to start the installation.</li>
            <li>Start the Installation — press the install button. Make sure that the screen does not close during this step.</li>
            <li>Wait for Installation to Finish — once done, a notification will appear: "App Installed Successfully".</li>
            <li>Start Playing — log in or sign up with your phone number or email address and enjoy your favorite games.</li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">System Requirements</h2>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-[#0a1029]">
                <tr>
                  <th className="py-3 px-6 text-left text-white font-semibold">System</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">Minimum</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">Recommended</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">Operating System</td><td className="py-3 px-6 text-gray-300">Android 5.0</td><td className="py-3 px-6 text-gray-300">Android 8.0 or above</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">RAM</td><td className="py-3 px-6 text-gray-300">2GB or more</td><td className="py-3 px-6 text-gray-300">4GB or more</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">Storage Space</td><td className="py-3 px-6 text-gray-300">At least 100 MB free</td><td className="py-3 px-6 text-gray-300">500MB free space</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">Processor</td><td className="py-3 px-6 text-gray-300">Quad-core 1.5 GHz</td><td className="py-3 px-6 text-gray-300">Octa-core 2.0 GHz</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">Internet</td><td className="py-3 px-6 text-gray-300">Stable 3G or WiFi</td><td className="py-3 px-6 text-gray-300">Fast & stable 4G or WiFi</td></tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-center">
            <a 
              href="https://pkteenpattivegas.com/?from_gameid=7225198&channelCode=4713331"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn bg-transparent hover:bg-[#0ea5e9]/10 text-white font-bold py-4 px-8 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl border-2 border-[#0ea5e9]"
            >
              <span className="text-lg">DOWNLOAD NOW</span>
              <div className="download-icon ml-2 bg-[#f97316] rounded-full p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Register & Login Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Sign in Teen Patti Vegas App?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">Register Method</h3>
              <ol className="list-decimal pl-5 space-y-3 text-gray-300">
                <li>Open the Teen Patti Vegas app on your Android phone.</li>
                <li>Go to the Profile or Account Settings section of guest mode.</li>
                <li>Tap on the option Bind Email or Register Email.</li>
                <li>Put your active email address and phone number in the given lobby.</li>
                <li>Check your email for a verification link after entering the captcha code.</li>
                <li>Enter the code in the app to verify your account.</li>
                <li>Once verified, your email will be successfully linked to your account.</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">Login Method</h3>
              <ol className="list-decimal pl-5 space-y-3 text-gray-300">
                <li>Open the Teen Patti Vegas app on your mobile.</li>
                <li>Tap on the Login button on the main screen.</li>
                <li>Choose your login method — Email or Guest.</li>
                <li>Enter your registered details, like your email and password.</li>
                <li>Type your verification code or password.</li>
                <li>Tap Submit or Login to access your account.</li>
                <li>Once logged in, you can start playing and enjoying the game.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Deposit & Withdraw Instructions */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Deposit Money in the Teen Patti Vegas Game?</h2>
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>Open the Teen Patti Vegas app on your phone.</li>
              <li>Go to the wallet or Add Cash section.</li>
              <li>Choose the amount you want to deposit.</li>
              <li>Select a payment method like Easypaisa and JazzCash.</li>
              <li>Enter your payment details carefully, like account number and name.</li>
              <li>Tap Confirm to complete the process of deposit.</li>
              <li>The money will be added to your game wallet instantly.</li>
              <li>Now you can start playing on your Android phone.</li>
            </ol>
          </div>
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Withdraw Money From Teen Patti Vegas?</h2>
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>Open the TeenPatti Vegas app on your mobile.</li>
              <li>Go to the Withdraw section in the game.</li>
              <li>Enter the amount that you wish to withdraw.</li>
              <li>Choose your payment option, like Easypaisa or JazzCash.</li>
              <li>Fill in your correct payment details carefully.</li>
              <li>Tap on the Confirm option to proceed with the process.</li>
              <li>It will take a few minutes, so wait patiently.</li>
              <li>The money will be sent to your account safely after the successful withdrawal.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* How to Download for PC */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Download TeenPatti Vegas For PC?</h2>
          <p className="text-gray-300 mb-4">You can download this game through an emulator, which helps to run mobile apps on a computer. Here is the method:</p>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>First of all, open the Chrome Browser on your PC.</li>
            <li>Visit the official website or a trusted source to find the PC version.</li>
            <li>Install an emulator, like BlueStacks, on your PC.</li>
            <li>Once the installation is done, launch the emulator on your PC.</li>
            <li>Search the APK file in the emulator for installation.</li>
            <li>Tap to install and wait for it to complete.</li>
            <li>Click on the game icon inside the emulator to start playing Teen Patti Vegas on your PC.</li>
          </ol>
        </div>
      </section>

      {/* Download for iOS */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Download Teen Patti Vegas App for iOS</h2>
          <p className="text-gray-300">Teen Patti Vegas App is not available for iOS devices, and you can play this game only on your PC or Android devices. You must avoid downloading the TeenPatti Vegas APK from unofficial websites for iOS devices and wait until the official version for iOS devices has been released.</p>
        </div>
      </section>

      {/* Requirements to Install */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Requirements to Download & Install TeenPatti Vegas</h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>Turn on the Bluetooth option.</li>
            <li>Give access to record sound.</li>
            <li>Allow it to use your location.</li>
            <li>Keep the internet connection on.</li>
            <li>Permit game alerts and messages.</li>
            <li>Allow the app to open media files.</li>
          </ol>
        </div>
      </section>

      {/* Password Recovery */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Recover the Forgotten Password?</h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>Open the TeenPatti Vegas APK on your Android device.</li>
            <li>Select the option of Reset Password on the login screen.</li>
            <li>Enter your registered email or account information correctly.</li>
            <li>You will get a verification code in your registered email.</li>
            <li>Enter the captcha code and set a new password.</li>
            <li>Now log in again using your new password.</li>
          </ol>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Strategies to Play the TeenPatti Vegas Game</h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>You must start with a small amount to avoid big losses.</li>
            <li>Learn from other players before taking big risks.</li>
            <li>Use blind play wisely sometimes to confuse someone.</li>
            <li>Stay calm and don't play to chase losses.</li>
            <li>Fold your card if your cards are weak.</li>
            <li>Always play with a clear mind to make smart decisions.</li>
            <li>Know when to stop the game, so set a limit for yourself.</li>
          </ol>
        </div>
      </section>

      {/* Customer Support Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Ways to Contact the Customer Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">WhatsApp</h3>
              <p className="text-gray-300">It is one of the best ways to contact TeenPatti Vegas's customer support team. You can contact the official WhatsApp number provided in the app. Send a message with your question or problem, and the support team will respond quickly.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Telegram</h3>
              <p className="text-gray-300">Another way to contact the support team is via Telegram. Open the Telegram app and search for their official channel or support ID mentioned on the website. The team replies in a few minutes and lets you solve your problem instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Safety & Legality of Teen Patti Vegas Game</h2>
          <p className="text-gray-300 leading-relaxed">
            Teen Patti Vegas is a safe and trusted gambling app that is made for fun and entertainment. It uses a secure system to protect your personal information and game data, which is why many gamers around the world love to play this game and earn real money. It follows the legal rules of online entertainment to ensure legal and safe gameplay. If you play responsibly, you can earn thousands of rupees just by playing your favorite games. You can enjoy this platform with full confidence and safety without any hesitation.
          </p>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Pros & Cons – Teen Patti Vegas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Pros</h3>
              <div className="bg-[#0A1029] px-8 py-8 rounded-lg">
                <ul className="list-disc pl-5 space-y-3 text-gray-300">
                  <li>Easy to learn</li>
                  <li>Engaging Gameplay</li>
                  <li>Quick Entertainment</li>
                  <li>Social Interaction</li>
                  <li>Convenient Access</li>
                  <li>Real Earning Opportunities</li>
                  <li>Jazzcash and Easypaisa make payment easy</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Cons</h3>
              <div className="bg-[#0A1029] px-8 py-8 rounded-lg">
                <ul className="list-disc pl-5 space-y-3 text-gray-300">
                  <li>Risk of losing Money</li>
                  <li>Addictive Gameplay</li>
                  <li>Waste of Time</li>
                  <li>Required Stable Internet</li>
                  <li>No legal Support</li>
                  <li>Not Suitable for everyone</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                What is the Teen Patti Vegas Game?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                TeenPatti Vegas is the Casino Game that enables you to play your favorite games to earn real cash for free. It offers 35+ games including Teen Patti, Rummy, Dragon vs Tiger, Ludo, and more with fast withdrawals via JazzCash and EasyPaisa.
              </div>
            </details>

            <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                Where can I find legit TeenPatti Vegas tournaments with cash prizes?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                You can find official Teen Patti Vegas tournaments directly within the app. Navigate to the Tournaments section to find active competitions with real cash prizes. The platform regularly hosts daily and weekly tournaments.
              </div>
            </details>

            <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                What are the Safe methods to deposit money for TeenPatti Vegas games online?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                The safest methods to deposit money in Teen Patti Vegas are Easypaisa and JazzCash. Both are Pakistan's most trusted mobile payment platforms with secure encryption. Simply go to the Wallet section, select Add Money, choose your preferred method, and follow the on-screen instructions.
              </div>
            </details>

            <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                How to withdraw winnings from TeenPatti Vegas easily?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                To withdraw winnings from Teen Patti Vegas, open the app, go to the Withdraw section, enter the amount, choose Easypaisa or JazzCash, fill in your payment details, and tap Confirm. The money is sent to your account within a few minutes.
              </div>
            </details>

            <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                What about the Customer Support of the TeenPatti Vegas?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                Teen Patti Vegas provides 24/7 customer support via WhatsApp and Telegram. The support team is always ready to solve your problems and answer your questions quickly. You can also reach out through the in-app support chat.
              </div>
            </details>

            <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                What are the Promotions or bonuses available for new users on TeenPatti Vegas?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                Teen Patti Vegas offers several promotions for new users: a 100% New Player Welcome Bonus on first deposit (up to PKR 100,000 match), a Refer & Earn bonus of 800-1000 PKR per valid referral, a Recharge Rebate of up to 30%, VIP Transfer bonuses, and daily login rewards.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="pt-12 pb-4 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Final Thoughts</h2>
          <p className="text-gray-300">
            Teen Patti Vegas is not just a game but an opportunity for you to get unlimited rewards, bonuses, and potential outcomes just by playing your favorite games. The user-friendly interface and engaging layout make it a top trending choice among casino enthusiasts. You can find all of your favorite games in just a single app without any subscription charges. It offers you instant entertainment and quick earnings at your fingertips. If you want to invest your money in casino games, then TeenPatti Vegas could be the best choice for you. Download the game, play your favorite games, and get unlimited rewards and bonuses from today.
          </p>
        </div>
      </section>
    </>
  );
}
