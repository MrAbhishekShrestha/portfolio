"use client";

export default function SkillsGrouped() {
  const skillCategories = [
    {
      name: "Languages",
      skills: ["Java", "TypeScript", "Python", "Rust", "SQL"],
    },
    {
      name: "Backend & Cloud",
      skills: [
        "Spring Boot",
        "Node.js",
        "Django",
        "PostgreSQL",
        "Kafka",
        "AWS (Cloudfront, EB, RDS, S3, ECS)",
      ],
    },
    {
      name: "Frontend",
      skills: ["React", "Angular", "Redux/NgRx", "Tailwind", "Jest", "Cypress"],
    },
    {
      name: "Tools & Skills",
      skills: [
        "Docker",
        "Bitbucket Pipelines",
        "CI/CD",
        "JUnit",
        "TDD",
        "OOP",
        "Agile",
        "Git",
      ],
    },
  ];

  return (
    <section id="skills-grouped" className="w-full py-8 border-t border-border-default transition-colors duration-200">
      <h2 className="text-xl font-semibold mb-6 text-fg-default font-sans">
        Technical Skills
      </h2>

      <div className="border border-border-default rounded-md bg-canvas-default overflow-hidden shadow-sm hover:border-accent-border transition-colors duration-200">
        <div className="divide-y divide-border-default/40">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-start p-4 gap-3 sm:gap-6 bg-canvas-default hover:bg-canvas-subtle/20 transition-colors"
            >
              {/* Category name */}
              <div className="sm:w-36 shrink-0 text-xs sm:text-sm font-semibold text-fg-muted font-mono sm:pt-1.5">
                {category.name}
              </div>

              {/* Chips container */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-3 py-1 text-xs font-mono rounded-full bg-canvas-subtle border border-border-default text-fg-default hover:border-accent-border hover:bg-canvas-default transition-all duration-150 cursor-default select-none"
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
