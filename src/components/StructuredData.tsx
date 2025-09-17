"use client"

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yuhao Cheng",
    jobTitle: ["Full Stack Developer", "Machine Learning Engineer", "Graduate Student"],
    description: "Master's student in Computer Science at UIUC, specializing in Full Stack Development, Machine Learning, and NLP",
    url: "https://your-domain.com",
    image: "https://your-domain.com/profile_picture.png",
    email: "mailto:your-email@example.com", // Update with your actual email
    telephone: "+1-XXX-XXX-XXXX", // Update with your actual phone if you want to include it
    address: {
      "@type": "PostalAddress",
      addressLocality: "Urbana-Champaign",
      addressRegion: "IL",
      addressCountry: "US"
    },
    alumniOf: {
      "@type": "Organization",
      name: "University of Illinois Urbana-Champaign",
      url: "https://illinois.edu"
    },
    knowsAbout: [
      "JavaScript",
      "Python",
      "React",
      "Node.js",
      "Machine Learning",
      "PyTorch",
      "Full Stack Development",
      "Natural Language Processing",
      "Vue.js",
      "Express.js",
      "MySQL",
      "Docker",
      "FastAPI",
      "Three.js",
      "Computer Science"
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Graduate Student",
      occupationLocation: {
        "@type": "Place",
        name: "University of Illinois Urbana-Champaign"
      }
    },
    worksFor: {
      "@type": "Organization",
      name: "University of Illinois Urbana-Champaign",
      url: "https://illinois.edu"
    },
    sameAs: [
      "https://github.com/your-github-username", // Update with your actual GitHub
      "https://linkedin.com/in/your-linkedin", // Update with your actual LinkedIn
      // Add other social profiles
    ],
    mainEntity: {
      "@type": "WebSite",
      name: "Yuhao Cheng Portfolio",
      url: "https://your-domain.com",
      description: "Personal portfolio showcasing full stack development and machine learning projects",
      author: {
        "@type": "Person",
        name: "Yuhao Cheng"
      }
    }
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Yuhao Cheng Portfolio",
    url: "https://your-domain.com",
    description: "Personal portfolio showcasing full stack development and machine learning projects",
    author: {
      "@type": "Person",
      name: "Yuhao Cheng",
      jobTitle: "Full Stack Developer & ML Engineer"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://your-domain.com/#search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Personal Finance Manager",
    description: "Full-stack web application for comprehensive personal finance management with real-time multi-currency conversion and AI-powered expense prediction",
    author: {
      "@type": "Person",
      name: "Yuhao Cheng"
    },
    dateCreated: "2024",
    programmingLanguage: ["JavaScript", "Python", "SQL"],
    runtimePlatform: ["React", "Node.js", "MySQL"],
    applicationCategory: "WebApplication",
    operatingSystem: "Cross-platform"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 2),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData, null, 2),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioStructuredData, null, 2),
        }}
      />
    </>
  );
}
