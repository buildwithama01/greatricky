"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRef } from "react";
import campora from "../assets/campora.png";
import derm from "../assets/derm.png";
import procrastination from "../assets/procrastination.png";
import vorta from "../assets/vorta.png";

const projects = [
  { name: "Derm", image: derm, href: "/derm" },
  { name: "Vorta", image: vorta, href: "/vorta" },
  { name: "Procrastination", image: procrastination, href: "/procrastination" },
  { name: "Campora", image: campora, href: "/campora" },
];

// ─── Desktop scroll-animation constants ────────────────────────────────────
// Total scroll distance (in viewport heights) given to EACH image.
const VH_PER_IMAGE = 70;

// How much of each image's chunk is spent actively sliding vs. holding.
const SLIDE_FRACTION = 0.85;

// Gap reserved at the top for the navbar, as a viewport-height unit —
// used for both the sticky offset and (inside the clamp below) the
// preferred stage height.
const NAV_GAP_VH = 10;

// Hard floor and ceiling for the stage height, in px. vh is still used
// as the "preferred" value in between these — this just stops it
// shrinking too much on short/landscape screens or growing too tall
// on very large monitors. Tune to taste against your actual designs.
const STAGE_MIN_PX = 420;
const STAGE_MAX_PX = 760;

// ─── Desktop WorkCard ──────────────────────────────────────────────────────
function WorkCard({
  project,
  index,
  scrollYProgress,
}: {
  project: { name: string; image: StaticImageData; href: string };
  index: number;
  scrollYProgress: ReturnType<typeof useSpring>;
}) {
  const total = projects.length;
  const chunk = 1 / total;

  const chunkStart = index * chunk;
  const chunkEnd = chunkStart + chunk * SLIDE_FRACTION;

  const y = useTransform(
    scrollYProgress,
    [chunkStart, chunkEnd],
    ["100%", "0%"],
  );

  return (
    <motion.div
      style={{ y: index === 0 ? 0 : y, zIndex: index }}
      className="absolute inset-0"
    >
      <Link href={project.href} className="relative block h-full w-full">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 1280px) 100vw, 1180px"
          priority={index === 0}
          className="object-cover"
        />
      </Link>
    </motion.div>
  );
}

// ─── Mobile sticky-stack card ──────────────────────────────────────────────
// Each card is sticky with a slightly higher top offset than the previous so
// as the user scrolls, new cards slide over and "pin" the cards beneath.
// CARD_PEEK_PX is how many px of the stacked card peeks above the next one.
const CARD_PEEK_PX = 56;

function MobileWorkCard({
  project,
  index,
}: {
  project: { name: string; image: StaticImageData; href: string };
  index: number;
}) {
  // Each successive card sticks a little lower so cards visually stack.
  // index 0 → top: 64px, index 1 → top: 120px, index 2 → top: 176px …
  const stickyTop = 64 + index * CARD_PEEK_PX;

  return (
    <div
      className="sticky w-full overflow-hidden rounded-2xl shadow-xl"
      style={{
        top: stickyTop,
        zIndex: index + 1,
      }}
    >
      <Link href={project.href} className="block w-full">
        <div className="relative w-full aspect-video">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="100vw"
            priority={index === 0}
            className="object-cover"
          />
        </div>
      </Link>
    </div>
  );
}

// ─── Works section ─────────────────────────────────────────────────────────
export default function Works() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    mass: 0.15,
  });

  return (
    <section id="works" className="bg-white px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex items-center gap-4">
          <h2 className="text-[32px] text-black font-[family-name:var(--font-urbanist)] font-[600] tracking-[1px] md:text-6xl">
            Selected Works.
          </h2>
          <span className="h-[2px] w-20 bg-[#111111] md:w-24" />
        </div>

        <p className="mt-4 mb-4 text-[18px] text-black/80 font-[family-name:var(--font-urbanist)] font-[400] leading-relaxed">
          A curated selection of brand identities and product experiences
          <br />— each one built with intent, not decoration
        </p>

        {/* ── Mobile sticky-stack layout (hidden on md+) ── */}
        <div className="flex flex-col gap-0 md:hidden">
          {projects.map((project, index) => (
            <MobileWorkCard key={project.name} project={project} index={index} />
          ))}
        </div>

        {/* ── Desktop scroll-driven animation (hidden below md) ── */}
        <div
          ref={ref}
          className="hidden md:block"
          style={{ height: `${projects.length * VH_PER_IMAGE}vh` }}
        >
          <div
            className="sticky mx-auto w-full max-w-[1180px] overflow-hidden rounded-[18px] shadow-2xl"
            style={{
              top: `${NAV_GAP_VH}vh`,
              height: `clamp(${STAGE_MIN_PX}px, ${100 - NAV_GAP_VH}vh, ${STAGE_MAX_PX}px)`,
            }}
          >
            {projects.map((project, index) => (
              <WorkCard
                key={project.name}
                project={project}
                index={index}
                scrollYProgress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
