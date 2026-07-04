"use client";

export default function Experience() {
  const experiences = [
    {
      year: "2026",
      title: "Software Engineer",
      company: "Loopsio",
      logo: "/logos/loopsio.jpeg",
      url: "https://loopsio.com",
      duration: "January 2026 - Present",
      bullets: [
        "Engineered and delivered a desktop MVP for an AI construction-tech startup in 4 months using Tauri (React + Rust) that analyses building crack images, helping secure a follow-on Phase 2 development contract through rapid iteration driven by weekly customer demos and feedback sessions.",
        "Reduced GPU segmentation workloads by 90% and enabled processing of 1,000+ images per session by developing a performant ML inference pipeline leveraging coarse object detection and near-zero-latency IPC.",
        "Built an AI business support platform for an early stage startup serving 30+ paying customers, designing REST APIs in NodeJS, realtime chatbot interface in React and GPT-4 context-engineering pipelines deployed on AWS ECS.",
      ],
    },
    {
      year: "2023 - 2025",
      title: "Fullstack Software Engineer",
      company: "Wavelet Solutions",
      logo: "/logos/wavelet.jpeg",
      url: "https://wavelet.net",
      duration: "January 2023 - August 2025",
      bullets: [
        "Secured MYR 1M in contract value and converted a client into a recurring customer by leading a team of 4 engineers to design and deliver a greenfield manufacturing MRP SaaS module, owning frontend delivery, backend REST API design and onsite client collaboration from initial requirements through to UAT sign-off.",
        "Migrated 20M+ records from 3 legacy ERP systems into a central data platform by designing a queue-based ETL architecture using PostgreSQL event tables and distributed consumer microservices, supporting both batch and real-time ingestion with idempotent processing.",
        "Extended a high-throughput event-driven messaging platform processing ~500k ERP events daily, leveraging asynchronous Spring Boot producers/consumers, PostgreSQL queue tables, and SKIP LOCKED concurrency across order, inventory, and financial workflows.",
        "Designed multi-tenant PostgreSQL architectures supporting 50+ clients and 50M+ row datasets, implementing partitioning and audit-trail patterns to ensure scalability, data integrity, and traceability; complemented by DynamoDB for JWT-based RBAC authentication and tenant isolation.",
        "Spearheaded internationalisation across 50+ Angular microfrontend apps, designing a lazy-loading resource bundle that dynamically swaps languages at runtime - unlocking 3 new markets without requiring app rebuilds per locale.",
        "Improved UI consistency and development velocity across 50+ microfrontend apps by building a shared Angular component library with 200+ reusable components distributed as a versioned NPM package.",
        "Reduced deployment time by 40% and accelerated cross-team releases by designing and authoring Bitbucket CI/CD pipelines across containerised Spring Boot services, micro-frontends and NPM libraries.",
        "Reduced incident detection and resolution time for production Spring Boot services on AWS ECS by implementing AWS CloudWatch monitoring with real-time alerts and centralised logging."
      ],
    },
    {
      year: "2021",
      title: "Software Engineer Intern",
      company: "BigLedger",
      logo: "/logos/bigledger.jpeg",
      url: "https://bigledger.com",
      duration: "July 2021 - December 2021",
      bullets: [
        "Reduced customer page delivery time by 3× by building a drag-and-drop WYSIWYG website builder using Angular CDK, a JSON-driven component engine, and NgRx-powered state management.",
        "Reduced application startup time by 40% through service-worker-based caching in an Angular e-commerce application, improving load performance and reducing user drop-off.",
        "Engineered an enterprise inventory management web application using Spring Boot and Angular for handling stock transfers, currently serving various logistics companies in Malaysia.",
      ],
    },
  ];

  return (
    <section id="experience" className="scroll-mt-10 w-full py-8 border-t border-border-default transition-colors duration-200">
      <h2 className="text-xl font-semibold mb-6 text-fg-default font-sans">
        Professional Experience
      </h2>

      <div className="relative border-l border-border-default ml-4 pl-8 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline node - GitHub action icon style */}
            <span className="absolute -left-[44px] top-1.5 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-canvas-subtle border border-border-default text-fg-muted ring-4 ring-canvas-default">
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-3.5 h-3.5"
              >
                <path d="M11.5 8a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.5 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
                <path d="M8 1v3.5a.5.5 0 0 1-1 0V1a1 1 0 0 1 1-1Zm0 11.5V16a1 1 0 0 1-1 0v-3.5a.5.5 0 0 1 1 0Z" />
              </svg>
            </span>

            {/* Experience Card */}
            <div className="border border-border-default rounded-md bg-canvas-default overflow-hidden shadow-sm hover:border-accent-border transition-colors duration-200">
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-4 py-3 border-b border-border-default bg-canvas-subtle">
                <div className="flex items-center gap-3">
                  {/* Company Logo */}
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative shrink-0 w-8 h-8 rounded-md overflow-hidden bg-white border border-border-default flex items-center justify-center hover:opacity-85 transition-opacity"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </a>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-fg-default">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-fg-muted">
                      at{" "}
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-fg hover:underline font-medium"
                      >
                        {exp.company}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="text-xs font-mono text-fg-muted bg-canvas-default border border-border-default px-2 py-1 rounded">
                  {exp.duration}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5">
                <ul className="space-y-3 pl-4 list-disc text-sm text-fg-default leading-relaxed">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
