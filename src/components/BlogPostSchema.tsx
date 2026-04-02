const BASE = "https://teenpattivegasgame.com.pk";

function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

type BlogPostSchemaProps = {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  breadcrumbOnly?: boolean;
  /** Key summary or first 2-3 paragraphs for AI parsing and articleBody */
  articleBody?: string;
  /** Approximate word count of the article */
  wordCount?: number;
  /** Primary keywords for this article */
  keywords?: string;
};

export default function BlogPostSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image = `${BASE}/feature/og-image.webp`,
  breadcrumbOnly = false,
  articleBody,
  wordCount,
  keywords,
}: BlogPostSchemaProps) {
  const url = `${BASE}/blog/${slug}`;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };

  const article: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: title,
    description,
    url,
    image: {
      "@type": "ImageObject",
      "url": image,
      "width": 1200,
      "height": 630,
    },
    author: {
      "@type": "Person",
      "name": "Teen Patti Vegas Editorial Team",
      "url": BASE,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      "name": "Teen Patti Vegas",
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE}/teen-patti-vegas-pakistan-logo.webp`,
        "width": 192,
        "height": 192,
      },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en-PK",
    isPartOf: { "@id": `${BASE}/#website` },
    ...(articleBody && { articleBody }),
    ...(wordCount && { wordCount }),
    ...(keywords && { keywords }),
  };

  return (
    <div suppressHydrationWarning style={{ display: "contents" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }}
      />
      {!breadcrumbOnly && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(article) }}
        />
      )}
    </div>
  );
}
