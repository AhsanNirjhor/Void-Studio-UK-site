"use client";

import type { SVGProps } from "react";
import { useMemo, useState } from "react";
import { workCategories, workProjects } from "@/components/site/data";
import { cn } from "@/lib/utils";

type ActiveProjectCategory = Exclude<(typeof workCategories)[number], "All">;

export function WorkProjectsSection() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<(typeof workCategories)[number]>(
    "All",
  );

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return workProjects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" ||
        project.categories.includes(activeCategory as ActiveProjectCategory);

      if (!normalizedQuery) {
        return matchesCategory;
      }

      const searchableText = [
        project.title,
        project.sector,
        project.description,
        ...project.categories,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(normalizedQuery);
    });
  }, [activeCategory, query]);

  return (
    <section className="section-dark border-b border-[#171b41] py-10 sm:py-14">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <div className="max-w-[520px]">
          <label htmlFor="work-search" className="sr-only">
            Search projects
          </label>
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#6f7397]" />
            <input
              id="work-search"
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects..."
              className="h-14 w-full rounded-xl border border-[#2f345e] bg-[#1b1f3d] pl-12 pr-4 text-[1.05rem] text-[#dfe2f8] outline-none placeholder:text-[#72779b] focus:border-[#6141e9]"
            />
          </div>
        </div>

        <div className="hidden-scrollbar mt-6 flex gap-3 overflow-x-auto pb-2">
          {workCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "whitespace-nowrap rounded-xl border px-6 py-3 text-[1.05rem] font-semibold transition-colors",
                activeCategory === category
                  ? "border-[#6935f2] bg-[#6a30f0] text-white"
                  : "border-[#2e335c] bg-[#1a1e3a] text-[#a9acd0] hover:border-[#4f5590] hover:text-[#d4d7ec]",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="mt-6 text-[1.55rem] text-[#8589ab]">
          Showing <span className="font-semibold text-[#4dd8c9]">{filteredProjects.length}</span>{" "}
          projects
        </p>

        <div className="mt-8 h-px bg-[#23274d]" />

        {filteredProjects.length > 0 ? (
          <div className="mt-8 grid gap-7 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[20px] border border-[#2b3059] bg-[#171a33]"
              >
                <div className="relative flex h-52 items-center justify-center border-b border-[#252b52] bg-[linear-gradient(135deg,#3b4664_0%,#39526b_58%,#234653_100%)] sm:h-56">
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#1b203f]/55" />
                  <ProjectTileIcon className="relative z-10 size-16 text-[#6330ef]" />
                </div>

                <div className="p-7 sm:p-8">
                  <p className="inline-flex items-center gap-3 text-[0.98rem] font-semibold tracking-wide text-[#4dd8c9]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#4dd8c9]" />
                    {project.sector}
                  </p>

                  <h3
                    className={cn(
                      "mt-4 text-[clamp(2rem,3vw,2.95rem)] font-semibold leading-[1.16] text-[#f2f4fd]",
                      project.highlightedTitle && "text-[#6a30f0]",
                    )}
                  >
                    {project.title}
                  </h3>

                  <p className="mt-5 text-[1.2rem] leading-[1.48] text-[#8c90b2]">
                    {project.description}
                  </p>

                  <div className="mt-7 grid gap-4 border-t border-[#262b51] pt-6 sm:grid-cols-3">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="text-[2rem] font-semibold leading-none text-[#4dd8c9]">
                          {metric.value}
                        </p>
                        <p className="mt-2 text-[1rem] text-[#7f84a6]">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-[#2b3058] bg-[#181c37] px-6 py-10 text-center">
            <p className="text-[1.18rem] text-[#d8dbf0]">No projects found for this filter.</p>
            <p className="mt-2 text-[1rem] text-[#8084a8]">
              Try another category or a different search keyword.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.4-3.4" />
    </svg>
  );
}

function ProjectTileIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="7" y="4" width="10" height="16" rx="2.2" />
      <path d="M4 9h3M17 9h3M4 15h3M17 15h3M10.2 8h3.6M10.2 12h3.6M10.2 16h3.6" />
    </svg>
  );
}
