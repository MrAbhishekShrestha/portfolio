"use client"

export default function Footer() {
    const navItems = [
        { label: "Overview", href: "#overview" },
        { label: "Skills", href: "#skills-github" },
        { label: "Experience", href: "#experience" },
        { label: "Education", href: "#education" },
        { label: "Projects", href: "#projects" },
    ]
    return (
        <footer className="w-full border-t border-border-default bg-canvas-default py-8 text-xs text-fg-muted font-mono transition-colors duration-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Abhishek Shrestha</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-accent-fg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    )
}