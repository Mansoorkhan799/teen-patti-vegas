import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://teenpattivegasgame.com.pk';
  
  const robotsTxt = `# robots.txt for teenpattivegasgame.com.pk

# ============================================
# AI CONTENT USAGE POLICY
# ============================================
# As a condition of accessing this website, you agree to abide by the following
# content signals:
#
# (a) If a content-signal = yes, you may collect content for the corresponding use.
# (b) If a content-signal = no, you may not collect content for the corresponding use.
# (c) If no signal is present, the website operator neither grants nor restricts
#     permission via content signal with respect to the corresponding use.
#
# Content signals:
# - search:    Building search index and providing search results
# - ai-input:  Using content for AI-generated answers and responses
# - ai-train:  Training or fine-tuning AI models
#
# ANY RESTRICTIONS EXPRESSED VIA CONTENT SIGNALS ARE EXPRESS RESERVATIONS OF
# RIGHTS UNDER ARTICLE 4 OF THE EUROPEAN UNION DIRECTIVE 2019/790 ON COPYRIGHT
# AND RELATED RIGHTS IN THE DIGITAL SINGLE MARKET.

# ============================================
# MAIN CRAWLER RULES
# ============================================

# Allow search engines, but prevent AI training
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

# Priority pages
Allow: /download-teen-patti-vegas
Allow: /deposit-money-in-teen-patti-vegas
Allow: /withdraw-money-from-teen-patti-vegas
Allow: /teen-patti-vegas-for-pc
Allow: /about-us
Allow: /blog
Allow: /blog/is-teen-patti-vegas-real-or-fake
Allow: /blog/create-teen-patti-vegas-account-and-login
Allow: /blog/tips-to-win-big-in-teen-patti-vegas

# Standard pages
Allow: /contact-us
Allow: /privacy
Allow: /disclaimer

# ============================================
# AI BOT RESTRICTIONS (Training Prevention)
# ============================================

User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: meta-externalagent
Disallow: /

User-agent: Amazonbot
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: cohere-ai
Disallow: /

# ============================================
# SEARCH ENGINE BOTS (Explicitly Allow)
# ============================================

User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Googlebot-Mobile
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: Yandex
Allow: /

# ============================================
# SITEMAPS
# ============================================

Sitemap: ${baseUrl}/sitemap-index.xml
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/image-sitemap.xml
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
}
