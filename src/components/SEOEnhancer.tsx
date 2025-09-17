"use client"

import Head from 'next/head'

export default function SEOEnhancer() {
  return (
    <Head>
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon and app icons */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Theme color for mobile browsers */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
      
      {/* Language and locale */}
      <meta httpEquiv="content-language" content="en-US" />
      
      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Preload critical resources */}
      <link
        rel="preload"
        href="/profile_picture.png"
        as="image"
        type="image/png"
      />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://your-domain.com/" />
      
      {/* Additional structured data for breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://your-domain.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://your-domain.com/#about"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Projects",
                "item": "https://your-domain.com/#projects"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Experience",
                "item": "https://your-domain.com/#experience"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Skills",
                "item": "https://your-domain.com/#skills"
              }
            ]
          })
        }}
      />
    </Head>
  )
}
