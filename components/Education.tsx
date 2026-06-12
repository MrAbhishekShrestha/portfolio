"use client";

export default function Education() {
  const educations = [
    {
      university: "University of Edinburgh",
      degree: "MSc Innovation & Entrepreneurship",
      logo: "/logos/edinburgh.jpeg",
      url: "https://www.ed.ac.uk",
      duration: "Sept 2025 – Present (Exp: Aug 2026)",
      bullets: [
        "Merit Scholarship 🎖️",
        "Complementing my technical expertise with business acumen and product innovation skills"
      ],
    },
    {
      university: "Monash University",
      degree: "Bachelor of Computer Science",
      logo: "/logos/monash.jpeg",
      url: "https://www.monash.edu",
      duration: "July 2019 – Dec 2022",
      bullets: [
        "Best Overall Graduate in Bachelor of Computer Science 🎓🥇",
        "High Achiever Scholarship 🎖️",
        "GPA: 3.83/4.0 | WAM: 86%",
      ],
    },
  ];

  return (
    <section id="education" className="scroll-mt-10 w-full py-8 border-t border-border-default transition-colors duration-200">
      <h2 className="text-xl font-semibold mb-6 text-fg-default font-sans">
        Education
      </h2>

      <div className="relative border-l border-border-default ml-4 pl-8 space-y-12">
        {educations.map((edu, index) => (
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

            {/* Card */}
            <div className="border border-border-default rounded-md bg-canvas-default overflow-hidden shadow-sm hover:border-accent-border transition-colors duration-200">
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-4 py-3 border-b border-border-default bg-canvas-subtle">
                <div className="flex items-center gap-3">
                  {/* University Logo */}
                  <a
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative shrink-0 w-8 h-8 rounded-md overflow-hidden bg-white border border-border-default flex items-center justify-center hover:opacity-85 transition-opacity"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={edu.logo}
                      alt={`${edu.university} logo`}
                      className="w-full h-full object-contain"
                    />
                  </a>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-fg-default">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-fg-muted">
                      at{" "}
                      <a
                        href={edu.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-fg hover:underline font-medium"
                      >
                        {edu.university}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="text-xs font-mono text-fg-muted bg-canvas-default border border-border-default px-2 py-1 rounded">
                  {edu.duration}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5">
                <ul className="space-y-3 pl-4 list-disc text-sm text-fg-default leading-relaxed">
                  {edu.bullets.map((bullet, idx) => (
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
