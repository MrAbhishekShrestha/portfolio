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
        "Complementing my technical expertise with business acumen and product innovation skills."
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
    <section id="education" className="w-full py-8 border-t border-border-default transition-colors duration-200">
      <h2 className="text-xl font-semibold mb-6 text-fg-default font-sans">
        Education
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {educations.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-4 p-4 border border-border-default rounded-md bg-canvas-default hover:border-accent-border transition-colors duration-200 shadow-sm"
          >
            {/* University Logo */}
            <a
              href={edu.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-12 h-12 rounded-md overflow-hidden bg-white border border-border-default flex items-center justify-center hover:opacity-85 transition-opacity"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={edu.logo}
                alt={`${edu.university} logo`}
                className="w-full h-full object-contain"
              />
            </a>

            {/* University details */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-semibold text-base text-fg-default">
                    {edu.university}
                  </h3>
                  <p className="text-sm text-fg-muted font-medium">
                    {edu.degree}
                  </p>
                </div>
                <div className="text-xs font-mono text-fg-muted bg-canvas-subtle border border-border-default px-2 py-0.5 rounded self-start sm:self-center">
                  {edu.duration}
                </div>
              </div>

              <ul className="list-disc pl-4 space-y-1.5 text-sm text-fg-default">
                {edu.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
