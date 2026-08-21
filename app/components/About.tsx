import Image from "next/image";
import aboutImg from "../assets/about-img.png";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-4 py-16 border-b border-black/20 md:px-8 lg:py-[80px]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-1 md:gap-16 lg:grid-cols-[420px_1fr] lg:gap-16">
          <div className="order-1 max-w-195 text-[#111111] lg:order-2">
            <div className="mb-5 flex items-center gap-4">
              <h2 className="text-[32px] font-[family-name:var(--font-urbanist)] font-[600] tracking-[1px] md:text-6xl">
                About.
              </h2>
              <span className="h-[2px] w-20 bg-[#111111] md:w-24" />
            </div>

            <h3 className="mb-8 text-[36px] font-[family-name:var(--font-montserrat-alternates)] font-[900] font-black text-[#F97F19] md:text-[3rem] lg:text-[4rem] md:leading-[0.98]">
              Ama Emmanuel (Ricky)
            </h3>

            <p className="max-w-190 font-[family-name:var(--font-urbanist)] text-[18px] text-justify leading-[27px] text-[#111111] md:text-[1.5rem] md:leading-[1.6]">
              Ama Emmanuel, known as Ricky, is a Brand and Product Designer and
              Co-Founder of Kadix Technologies, specialising in brand identity,
              UI/UX design, and creative direction. With over six years of
              experience building visual systems across digital products,
              startups, and growing businesses, Ricky brings a rare combination
              of design craft and founder-level thinking to every project he
              touches. His work spans from early-stage brand identity to full
              product design systems, and occasionally he steps into the room as
              a judge for design competitions, shaping the next generation of
              creatives. To Ricky,{" "}
              <span style={{ fontWeight: "bold" }}>
                design is not decoration. It is strategy made visible.
              </span>
            </p>
          </div>

          <div className="order-2 mx-auto w-full max-w-105 border border-[#1f1f1f]/30 bg-[#f5f5f3] pt-5 lg:order-1">
            <div className="relative aspect-[0.92] w-full overflow-hidden bg-[#f7f7f4]">
              <Image
                src={aboutImg}
                alt="Ama Emmanuel portrait"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
