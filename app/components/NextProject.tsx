import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Define what a single Project object looks like
export type ProjectItem = {
  image: StaticImageData;
  heading: string;
  tags: string[];
  href?: string;
};

// The component props now accept an array of projects
export type NextProjectProps = {
  projects: ProjectItem[];
  seeAllHref?: string;
};

export default function NextProject({
  projects,
  seeAllHref = "/#works",
}: NextProjectProps) {
  return (
    <div className="py-10">
      {/* Global Header Section - Rendered exactly once */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-[32px] font-[family-name:var(--font-urbanist)] font-[600] tracking-[-0.04em] text-[#171717] md:text-[52px]">
          Next Project
          <span className="ml-2 sm:ml-3 inline-block h-[2px] w-12 sm:w-20 align-middle bg-[#171717] md:w-24" />
        </h2>
        <Link
          href={seeAllHref}
          className="text-[16px] font-[family-name:var(--font-urbanist)] font-[500] text-[#171717] transition-opacity hover:opacity-80 md:text-[20px]"
        >
          See all <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* Grid wrapper automatically places items side-by-side on desktop */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.href || "#"}
            className="group block overflow-hidden rounded-[24px] border border-[#d7d0c8] bg-[#f2efe9] shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="relative h-[280px] sm:h-[420px] w-full overflow-hidden md:h-[560px]">
              <Image
                src={project.image}
                alt={project.heading}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                priority={index < 2} // Optimizes LCP for the first two project items
              />
            </div>

            <div className="bg-[#f3f1ee] px-5 pb-5 pt-6 text-[#171717] md:px-7">
              <h3 className="text-[28px] sm:text-[32px] font-[family-name:var(--font-urbanist)] font-[500] leading-snug tracking-[-0.04em] md:text-[42px]">
                {project.heading}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2 text-[18px] text-[#171717]/75 md:text-[18px]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-[family-name:var(--font-urbanist)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
