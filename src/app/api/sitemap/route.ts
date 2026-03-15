import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://teenpattivegasgame.com.pk';
  
  type PageType = {
    url: string;
    lastMod: string;
    changeFreq: string;
    priority: number;
    images?: Array<{
      loc: string;
      title: string;
      caption: string;
    }>;
  };
  
  const mainPages: PageType[] = [
    {
      url: '/',
      lastMod: new Date().toISOString(),
      changeFreq: 'daily',
      priority: 1.0,
      images: [
        {
          loc: '/teen-patti-vegas.webp',
          title: 'Teen Patti Vegas Logo',
          caption: 'The official logo of Teen Patti Vegas gaming platform'
        },
        {
          loc: '/teen-patti-vegas-pakistan-logo.webp',
          title: 'Teen Patti Vegas Hero Image',
          caption: 'Teen Patti Vegas gaming platform showcase'
        }
      ]
    },
    {
      url: '/download-teen-patti-vegas',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/teen-patti-vegas.webp',
          title: 'Download Teen Patti Vegas',
          caption: 'Download Teen Patti Vegas APK for Android'
        }
      ]
    },
    {
      url: '/deposit-money-in-teen-patti-vegas',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/withdraw-money-from-teen-patti-vegas',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/teen-patti-vegas-for-pc',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/teen-patti-vegas.webp',
          title: 'Teen Patti Vegas for PC',
          caption: 'Play Teen Patti Vegas on PC using Android Emulator'
        }
      ]
    },
    {
      url: '/about-us',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.7,
      images: [
        {
          loc: '/teen-patti-vegas.webp',
          title: 'About Teen Patti Vegas',
          caption: 'Learn about Teen Patti Vegas gaming platform'
        }
      ]
    },
    {
      url: '/blog',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.8,
      images: [
        {
          loc: '/teen-patti-vegas.webp',
          title: 'Teen Patti Vegas Blog',
          caption: 'Guides and tutorials for Teen Patti Vegas gaming platform'
        }
      ]
    },
    {
      url: '/contact-us',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.7
    },
    {
      url: '/privacy',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.6
    },
    {
      url: '/disclaimer',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.6
    }
  ];

  const blogPosts: PageType[] = [
    { url: '/blog/is-teen-patti-vegas-real-or-fake', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/create-teen-patti-vegas-account-and-login', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/tips-to-win-big-in-teen-patti-vegas', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/ips-exceed-issue-teen-patti-vegas-how-to-fix', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/teen-patti-vegas-old-version-features-review-2026', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/teen-patti-vegas-latest-version-new-features-2026-updates', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/ways-to-earn-money-with-teen-patti-vegas-2026', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/teen-patti-vegas-app-review-2026', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.9 },
    { url: '/blog/teen-patti-vegas-bonuses-vip-guide', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/teen-patti-vegas-tips-10-smart-tricks', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/is-teen-patti-vegas-safe-legal-pakistan', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/responsible-gaming-guide-teen-patti-vegas', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/how-to-use-teen-patti-vegas-app-pakistan-guide-2026', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/dragon-vs-tiger-andar-bahar-high-payout-games', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/3patti-blue-vs-teen-patti-vegas', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/3patti-gold-vs-teen-patti-vegas', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/3patti-lucky-vs-teen-patti-vegas', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/3patti-room-vs-teen-patti-vegas', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 }
  ];

  const allPages = [...mainPages, ...blogPosts];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${page.images?.map(img => `
    <image:image>
      <image:loc>${baseUrl}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('') || ''}
  </url>
  `).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
}
