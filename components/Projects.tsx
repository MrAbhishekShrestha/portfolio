"use client";

export default function Projects() {
  const projects = [
    {
      name: "finny",
      displayName: "Finny: AI Banking Companion 🏆",
      description:
        "Winner of NatWestGroup's fintech hackathon. Built an AI-powered banking assistant inside NatWestBank's mobile app with Gemini API tool calling for agentic task execution to help customers proactively manage finances by predicting their monthly spending.",
      tech: ["Next.js", "TypeScript", "Gemini API", "GCP",],
      githubUrl: "https://github.com/MrAbhishekShrestha/finny",
      liveUrl: "https://finny-bice.vercel.app/",
    },
    {
      name: "clinic-management",
      displayName: "AI Clinic Management System",
      description:
        "Healthcare app managing patients, appointments, and diagnoses. Integrated Mozilla DeepSpeech for voice recognition with 85% accuracy. Delivered a cross-platform app for web and mobile using Angular, Ionic, Capacitor and Django.",
      tech: ["Django", "Python", "Mozilla DeepSpeech", "PostgreSQL", "Angular", "Ionic", "TypeScript"],
      githubUrl: "https://github.com/MrAbhishekShrestha/clinicai",
      liveUrl: "",
    },
    {
      name: "website-builder",
      displayName: "Website Builder CMS",
      description:
        "Proof of Concept for a Wix-like drag-and-drop website builder. Dynamically generates the skeleton of a website using JSON-driven component engines. Evolved into BigLedger's in-house CMS Website Builder.",
      tech: ["Angular", "NgRx", "TypeScript", "Redux"],
      githubUrl: "https://github.com/MrAbhishekShrestha/website-builder",
      liveUrl: "https://mrabhishekshrestha.github.io/website-builder/",
    },
    {
      name: "post-trade-backoffice",
      displayName: "Post Trade Backoffice",
      description:
        "An event-driven trading back-office system modeling order execution, portfolio management, and cash settlement using Kafka for async communication. Designed microservices with isolated PostgreSQL schemas and idempotent consumers.",
      tech: ["Spring Boot", "Kafka", "PostgreSQL", "Java", "Docker"],
      githubUrl: "",
      liveUrl: "",
    },
  ];

  return (
    <section id="projects" className="w-full py-8 border-t border-border-default transition-colors duration-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-fg-default font-sans">
          Pinned projects
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between border border-border-default rounded-md bg-canvas-default p-4 hover:border-accent-border transition-colors duration-200 shadow-sm"
          >
            {/* Upper Portion */}
            <div>
              {/* Header: Title */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  {/* Repo Book Icon */}
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-3.5 h-3.5 text-fg-muted shrink-0"
                  >
                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9Zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8Z" />
                  </svg>
                  {project.githubUrl || project.liveUrl ? (
                    <a
                      href={project.githubUrl || project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-accent-fg hover:underline truncate"
                    >
                      {project.displayName}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-fg-default truncate">
                      {project.displayName}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-fg-muted leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            {/* Lower Portion */}
            <div>
              {/* Tech Chips */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((techItem, idx) => (
                  <span
                    key={idx}
                    className="text-[13px] font-mono px-2 py-0.5 rounded border border-border-default bg-canvas-subtle text-fg-muted"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center justify-between text-xs font-mono border-t border-border-default/40 pt-3 text-fg-muted">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-accent-fg transition-colors"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-3.5 h-3.5"
                    >
                      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.35 3.12.88.01.64.01 1.11.01 1.25 0 .21-.16.47-.55.38A8.014 8.014 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
                    </svg>
                    Source code
                  </a>
                ) : null}

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-accent-fg font-semibold hover:underline"
                  >
                    Live Demo ↗
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
