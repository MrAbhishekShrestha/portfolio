"use client";

export default function SkillsGithub() {
  const categories = [
    {
      name: "Languages",
      percentage: "25%",
      color: "bg-[#2ea44f]", // Green
      dotColor: "text-[#2ea44f]",
      skills: ["Java", "TypeScript", "Python", "Rust", "SQL"],
    },
    {
      name: "Backend & Cloud",
      percentage: "25%",
      color: "bg-[#388bfd]", // Blue
      dotColor: "text-[#388bfd]",
      skills: ["Spring Boot", "Node.js", "Django", "PostgreSQL", "Kafka", "AWS", "Supabase"],
    },
    {
      name: "Frontend",
      percentage: "25%",
      color: "bg-[#ff7b72]", // Red/Coral
      dotColor: "text-[#ff7b72]",
      skills: ["React", "Angular", "Ionic", "Redux/NgRx", "Tailwind", "Jest", "Cypress"],
    },
    {
      name: "Tools & Skills",
      percentage: "25%",
      color: "bg-[#8250df]", // Purple
      dotColor: "text-[#8250df]",
      skills: ["Docker", "Bitbucket Pipelines", "CI/CD", "JUnit", "TDD", "OOP", "Agile", "Git", "Claude Code"],
    },
  ];

  return (
    <section id="skills-github" className="scroll-mt-10 w-full py-8 border-t border-border-default transition-colors duration-200">
      <h2 className="text-xl font-semibold mb-6 text-fg-default font-sans">
        Technical Skills
      </h2>

      <div className="border border-border-default rounded-md bg-canvas-default p-5 shadow-sm hover:border-accent-border transition-colors duration-200">
        {/* GitHub Languages bar */}
        <div className="w-full h-2 rounded-full overflow-hidden flex mb-6 bg-canvas-subtle">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`${cat.color} h-full`}
              style={{ width: cat.percentage }}
              title={`${cat.name} (${cat.percentage})`}
            />
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              {/* Category Dot Header */}
              <div className="flex items-center gap-2 text-sm font-semibold font-mono">
                <span className={`${cat.dotColor} text-base`}>●</span>
                <span className="text-fg-default">{cat.name}</span>
              </div>

              {/* Category Chips */}
              <div className="flex flex-wrap gap-1.5 pl-4">
                {cat.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="inline-block px-2.5 py-0.5 text-xs font-mono rounded-full bg-canvas-subtle border border-border-default text-fg-muted hover:text-fg-default hover:border-accent-border transition-all duration-150 cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
