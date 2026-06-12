"use client";

import { useState, useMemo } from "react";

type DayContribution = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export default function ContributionGraph() {
  const [hoveredCell, setHoveredCell] = useState<{
    count: number;
    date: string;
    x: number;
    y: number;
  } | null>(null);

  // Generate 53 weeks of mock contribution data ending today
  const contributions = useMemo(() => {
    const data: DayContribution[] = [];
    const today = new Date();
    // Start from 371 days ago (53 weeks * 7 days = 371 days)
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 370);

    // Seeded random number generator to keep the pattern stable across renders
    let seed = 42;
    const random = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    for (let i = 0; i < 371; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);

      // Higher chance of 0 commits, lower chance of many commits
      const r = random();
      let count = 0;
      let level: 0 | 1 | 2 | 3 | 4 = 0;

      if (r > 0.9) {
        count = Math.floor(random() * 3) + 1;
        level = 1;
      } else if (r > 0.80) {
        count = Math.floor(random() * 4) + 3;
        level = 2;
      } else if (r > 0.78) {
        count = Math.floor(random() * 5) + 6;
        level = 3;
      } else if (r > 0.77) {
        count = Math.floor(random() * 8) + 10;
        level = 4;
      }

      // Format date: "Jun 12, 2026"
      const dateStr = `${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

      data.push({
        date: dateStr,
        count,
        level,
      });
    }

    return data;
  }, []);

  const totalContributions = useMemo(() => {
    return contributions.reduce((sum, item) => sum + item.count, 0);
  }, [contributions]);

  // Compute month headers positions (first day of each month)
  const monthHeaders = useMemo(() => {
    const headers: { label: string; colIndex: number }[] = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 370);

    let lastMonth = -1;

    for (let i = 0; i < 371; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);

      const month = currentDate.getMonth();
      const weekIndex = Math.floor(i / 7);

      if (month !== lastMonth && weekIndex < 52) {
        const monthNames = [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        headers.push({
          label: monthNames[month],
          colIndex: weekIndex,
        });
        lastMonth = month;
      }
    }

    // Filter headers that are too close to each other
    return headers.filter((header, idx, self) => {
      if (idx === 0) return true;
      return header.colIndex - self[idx - 1].colIndex > 2;
    });
  }, []);

  const grid = useMemo(() => {
    const columns: DayContribution[][] = [];
    for (let w = 0; w < 53; w++) {
      columns.push(contributions.slice(w * 7, (w + 1) * 7));
    }
    return columns;
  }, [contributions]);

  return (
    <section className="w-full py-8 border-t border-border-default transition-colors duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <h2 className="text-base font-normal text-fg-default">
          {totalContributions.toLocaleString()} contributions in the last year
        </h2>
      </div>

      {/* Main Graph Panel */}
      <div className="border border-border-default rounded-md bg-canvas-default p-4 relative shadow-sm">
        <div className="overflow-x-auto pb-2 scrollbar-none">
          <div className="min-w-[670px] select-none">
            {/* Months Row */}
            <div className="relative h-5 text-xs text-fg-muted font-mono mb-1">
              {monthHeaders.map((header, idx) => (
                <span
                  key={idx}
                  className="absolute"
                  style={{ left: `${header.colIndex * 12 + 32}px` }}
                >
                  {header.label}
                </span>
              ))}
            </div>

            {/* Grid Area with Day Labels */}
            <div className="flex gap-2">
              {/* Day Labels Column */}
              <div className="flex flex-col justify-between text-[10px] text-fg-muted font-mono h-[82px] w-6 pt-1">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>

              {/* Weeks (Columns) */}
              <div className="flex gap-[2px]">
                {grid.map((column, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-[2px]">
                    {column.map((day, rowIdx) => {
                      const levelClasses = {
                        0: "bg-contrib-0 hover:ring-1 hover:ring-border-default",
                        1: "bg-contrib-1",
                        2: "bg-contrib-2",
                        3: "bg-contrib-3",
                        4: "bg-contrib-4",
                      };

                      return (
                        <div
                          key={rowIdx}
                          className={`w-[10px] h-[10px] rounded-[1.5px] transition-all duration-150 cursor-pointer ${
                            levelClasses[day.level]
                          }`}
                          onMouseEnter={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const containerRect = e.currentTarget.parentElement?.parentElement?.parentElement?.parentElement?.getBoundingClientRect();
                            if (containerRect) {
                              setHoveredCell({
                                count: day.count,
                                date: day.date,
                                x: rect.left - containerRect.left + 5,
                                y: rect.top - containerRect.top - 38,
                              });
                            }
                          }}
                          onMouseLeave={() => setHoveredCell(null)}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between mt-3 pt-2 border-t border-border-default/40 text-xs text-fg-muted font-mono">
          <a
            href="https://github.com/MrAbhishekShrestha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-fg transition-colors"
          >
            Learn how we count contributions
          </a>
          <div className="flex items-center gap-1.5">
            <span>Less</span>
            <div className="w-[10px] h-[10px] rounded-[1.5px] bg-contrib-0" />
            <div className="w-[10px] h-[10px] rounded-[1.5px] bg-contrib-1" />
            <div className="w-[10px] h-[10px] rounded-[1.5px] bg-contrib-2" />
            <div className="w-[10px] h-[10px] rounded-[1.5px] bg-contrib-3" />
            <div className="w-[10px] h-[10px] rounded-[1.5px] bg-contrib-4" />
            <span>More</span>
          </div>
        </div>

        {/* Tooltip */}
        {hoveredCell && (
          <div
            className="absolute z-10 px-2 py-1 text-[11px] font-mono font-medium rounded bg-[#24292f] text-[#f6f8fa] border border-[#30363d] pointer-events-none transform -translate-x-1/2 flex items-center justify-center whitespace-nowrap shadow-md"
            style={{
              left: `${hoveredCell.x}px`,
              top: `${hoveredCell.y}px`,
            }}
          >
            {hoveredCell.count === 0 ? "No" : hoveredCell.count}{" "}
            {hoveredCell.count === 1 ? "contribution" : "contributions"} on{" "}
            {hoveredCell.date}
          </div>
        )}
      </div>
    </section>
  );
}
