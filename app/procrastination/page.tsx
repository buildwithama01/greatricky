import Image, { StaticImageData } from "next/image";
import type { Metadata } from "next";
import Nav from "../components/Nav";

import procOutdoorBanner from "../assets/proc/procOutdoorBanner.png";
import procFirefly from "../assets/proc/procFirefly.png";
import Lumi from "../assets/proc/Lumi.png";
import Nova from "../assets/proc/Nova.png";
import Sola from "../assets/proc/Sola.png";
import Zest from "../assets/proc/Zest.png";
import Echo from "../assets/proc/Echo.png";
import Pip from "../assets/proc/Pip.png";
import Root from "../assets/proc/Root.png";
import Aris from "../assets/proc/Aris.png";

import PUBusinessCard from "../assets/proc/PU Business Card.png";
import PUFashion from "../assets/proc/PU Fashion.png";
import PUOutdoorBanner2 from "../assets/proc/PU OUTDOOR BANNER 2.png";
import PUSocialMedia from "../assets/proc/PU Social Media.png";
import PUPuzzle from "../assets/proc/PU Puzzle.png";
import PUToteBag from "../assets/proc/PU Tote Bag.png";

import NextProject from "../components/NextProject";
import VortaCover from "../assets/vorta.png";
import CamporaCover from "../assets/campora.png";
import Footer from "../components/Footer";
import Experience, { CardData } from "../components/Experience";

export const metadata: Metadata = {
  title: "Procrastination United — Ricky",
  description:
    "Brand identity, illustration, and visual system for Procrastination United — a child-development movement disguised as fun, helping kids build confidence, curiosity, and real-world skills.",
  openGraph: {
    title: "Procrastination United — Ricky",
    description:
      "Brand identity and illustration for Procrastination United — where play shapes greatness.",
    url: "https://greatricky.vercel.app/procrastination",
    siteName: "Ricky Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Procrastination United — Ricky",
    description:
      "Brand identity and illustration for Procrastination United — where play shapes greatness.",
  },
};


const Procrastination = () => {
  const lumiCardData: CardData = {
    imageSrc: Lumi,
    title: "Lumi",
    description:
      "The Spark of Insight. Lumi represents the soft glow of a new idea. As a guide for the Discover stage, Lumi encourages children to pause, wonder, and listen to their own curiosity in a safe, pressure-free environment",
    containerBgClass: "bg-[#A82D98]",
    imageBgClass: "bg-[#A82D9833]",
  };

  const novaCardData: CardData = {
    imageSrc: Nova,
    title: "Nova",
    description:
      'The North Star of Discovery. Nova is the bright signal that a new passion has been found. Energetic and bold, Nova helps children identify the "eureka" moments that turn simple curiosity into an active pursuit.',
    containerBgClass: "bg-[#8D65C5]",
    imageBgClass: "bg-[#8D65C533]",
  };

  const solaCardData: CardData = {
    imageSrc: Sola,
    title: "Sola",
    description:
      "The Radiant Participant. Sola represents the warmth of being fully present. As a guide for the Engage stage, Sola encourages children to step into the light of new activities with confidence, turning hesitation into a bright, steady energy.",
    containerBgClass: "bg-[#FFAD24]",
    imageBgClass: "bg-#FFAD2433]",
  };

  const zestCardData: CardData = {
    imageSrc: Zest,
    title: "Zest",
    description:
      "The Spirit of Movement. Zest represents the vibrant energy of active play. As a motivator for the Engage stage, Zest inspires children to move, build, and interact, transforming the fear of making a mistake into the excitement of trying something new.",
    containerBgClass: "bg-[#FFCA03]",
    imageBgClass: "bg-[#FFCA0333]",
  };

  const echoCardData: CardData = {
    imageSrc: Echo,
    title: "Echo",
    description:
      "The Voice of Resonance. Echo represents the power of being heard. As a guide for the Express stage, Echo helps children find the right words or medium to share their inner thoughts, ensuring their unique perspective ripples out into the world.",
    containerBgClass: "bg-[#3A7BFF]",
    imageBgClass: "bg-[#3A7BFF33]",
  };

  const pipCardData: CardData = {
    imageSrc: Pip,
    title: "Pip",
    description:
      'The Burst of Personality. Pip represents the joyful "pop" of sharing a new creation. Energetic and encouraging, Pip celebrates the moment a child stands tall to show what they’ve made, making the act of sharing feel like a celebration.',
    containerBgClass: "bg-[#FF47A4]",
    imageBgClass: "bg-[#FF47A433]",
  };
  const rootCardData: CardData = {
    imageSrc: Root,
    title: "Root",
    description:
      "The Foundation of Confidence. Root represents the strength found in steady progress. As a guide for the Grow stage, Root encourages children to take pride in their journey, reminding them that every small step builds a solid base for future adventures.",
    containerBgClass: "bg-[#91D00D]",
    imageBgClass: "bg-[#91D00D33]",
  };
  const arisCardData: CardData = {
    imageSrc: Aris,
    title: "Aris",
    description:
      "The Spirit of Ascent. Aris represents the excitement of reaching new heights. As a motivator for the Grow stage, Aris celebrates the courage it takes to transform, inspiring children to look upward and forward with a sense of pride and wonder.",
    containerBgClass: "bg-[#FF5746]",
    imageBgClass: "bg-[#FF574633]",
  };

  const PUFirstImages = [
    { img: PUBusinessCard, alt: "PU Business Card" },
    { img: PUFashion, alt: "PU Fashion" },
    { img: PUSocialMedia, alt: "PU Social Media" },
    { img: PUOutdoorBanner2, alt: "PU Outdoor Banner 2" },
    { img: PUToteBag, alt: "PU Tote Bag" },
    { img: PUPuzzle, alt: "PU Puzzle" },
  ];

  const nextProjects = [
    {
      image: VortaCover,
      heading: "Vorta - Move Beyond",
      tags: ["Branding", "Web Design"],
      href: "/vorta",
    },
    {
      image: CamporaCover,
      heading: "Campora",
      tags: ["Web Design", "Mobile App Design"],
      href: "/campora",
    },
  ];
  return (
    <>
      <section className="bg-white px-4 pt-30 md:px-8 lg:px-[100px]">
        <Nav />
        <h1 className="text-[#20190F] font-[family-name:var(--font-urbanist)] text-[40px] md:text-[80px] font-bold leading-normal not-italic">
          PROCRASTINATION UNITED
        </h1>

        <div
          className="flex flex-col items-center justify-center self-stretch w-full min-h-screen"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/procBg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-white font-[family-name:var(--font-tan)] text-[32px] text-center font-[700] mt-7 lg:text-[64px]">
            Where Play Shapes <br /> Greatness
          </h1>
          <p className="text-white font-(family-name:--font-nunito) text-[16px] font-[600] leading-[32px] mt-7">
            A campaign by Procrastination United
          </p>
        </div>
        <Image src={procOutdoorBanner} alt="Vorta Cover" className="w-full" />

        <div className="flex px-4 py-16 md:px-20 md:py-30 flex-col items-start gap-2.5 self-stretch bg-[#3A7BFF]">
          <h1 className="text-white font-[family-name:var(--font-tan)] text-[24px] md:text-[32px] font-[700] mt-7">
            A Place Where Kids Become More Themselves
          </h1>
          <p className="text-white font-(family-name:--font-nunito) text-[18px] md:text-[24px] font-[300] mt-7">
            Procrastination United is a child-development movement disguised as
            fun. Through play, creativity, expression, and guided experiences,
            we help kids build confidence, curiosity, and real-world skills —
            without pressure, labels, or fear of getting it wrong.
          </p>
          <p className="text-[#3A7BFF] bg-white p-2 md:py-[16px] md:px-[24px] rounded-[4px] font-(family-name:--font-nunito) text-[18px] md:text-[24px] font-[600] mt-5">
            Because childhood isn’t preparation for life — it’s where life
            begins.
          </p>
        </div>
        <Image src={procFirefly} alt="Vorta Cover" className="w-full" />
        <div className="flex px-4 py-16 md:px-20 md:py-30 flex-col items-start gap-2.5 self-stretch bg-white">
          <h1 className="text-black font-[family-name:var(--font-tan)] text-[24px] md:text-[32px] font-[700] mt-7">
            Inside The Experience
          </h1>
          <p className="text-black font-(family-name:--font-nunito) text-[18px] md:text-[24px] font-[300] mt-7">
            Every child grows differently — that’s why our approach follows a
            gentle, proven path from exploration to confidence.
            <br />
            Each step is designed to nurture creativity, movement, expression,
            and personal growth.
          </p>
          <p className="text-white bg-[#A82D98] p-2 md:py-[16px] md:px-[24px] rounded-[4px] font-(family-name:--font-nunito) text-[18px] md:text-[24px] font-[600] mt-5">
            Brace Yourself — Greatness Starts Here.
          </p>
        </div>

        <Experience
          numbering="1."
          heading="DISCOVER"
          description={`Where curiosity leads the way and every question becomes an adventure. \nKids explore new worlds, try new things, and uncover what truly excites them — freely, safely, and joyfully.`}
          buttonText="Let's explore!"
          buttonTextColorClass="text-[#A82D98]"
          topBgClass="bg-gradient-to-r from-[#A82D98] to-[#8D65C5]"
          leftCard={lumiCardData}
          rightCard={novaCardData}
        />
        <Experience
          numbering="2."
          heading="ENGAGE"
          description={`Where curiosity turns into action and energy finds direction. \nKids jump in, move, collaborate, and take part in experiences that challenge their bodies, minds, and confidence — actively, joyfully, and together.`}
          buttonText="Game on!"
          buttonTextColorClass="text-[#FFAD24]"
          topBgClass="bg-gradient-to-r from-[#FFAD24] to-[#FFCA03]"
          leftCard={solaCardData}
          rightCard={zestCardData}
        />
        <Experience
          numbering="3."
          heading="EXPRESS"
          description={`Where voices come alive and ideas take shape. \nKids share what they feel, imagine what they dream, and show the world who they truly are — through words, art, movement, and play. Here, every voice matters, every idea is welcome, and creativity has no limits.`}
          buttonText="This is me!"
          buttonTextColorClass="text-[#3A7BFF]"
          topBgClass="bg-gradient-to-r from-[#3A7BFF] to-[#FF47A4]"
          leftCard={echoCardData}
          rightCard={pipCardData}
        />
        <Experience
          numbering="4."
          heading="GROW"
          description={`Where small steps turn into big confidence. \nThrough every discovery, every effort, and every expression, children begin to see their own progress. Skills strengthen, courage deepens, and belief in themselves grows naturally — one experience at a time.`}
          buttonText="Look at me now!"
          buttonTextColorClass="text-[#91D00D]"
          topBgClass="bg-gradient-to-r from-[#91D00D] to-[#FF5746]"
          leftCard={rootCardData}
          rightCard={arisCardData}
        />
        <div className="flex px-4 py-16 md:px-20 md:py-30 flex-col items-start gap-2.5 self-stretch bg-white">
          <h1 className="text-black font-[family-name:var(--font-tan)] text-[24px] md:text-[32px] font-[700] mt-7">
            Brand Applications & Visual System
          </h1>
          <p className="text-black font-(family-name:--font-nunito) text-[18px] md:text-[24px] font-[300] mt-7">
            Procrastination United’s identity is designed to be instantly
            recognizable across every touchpoint. From apparel and merchandise
            to digital content and campaign assets, the visual system balances
            bold expression with consistency, allowing the brand’s playful
            personality to remain unmistakable wherever it appears.
            <br />
            What follows is the identity brought to life through a series of
            applications that demonstrate its flexibility, cohesion, and
            character.
          </p>
        </div>

        {PUFirstImages.map((PUFirstImage) => (
          <div key={PUFirstImage.alt} className="w-full">
            <Image
              src={PUFirstImage.img}
              alt={PUFirstImage.alt}
              className="w-full"
            />
          </div>
        ))}

        <NextProject projects={nextProjects} />
      </section>
      <Footer />
    </>
  );
};

export default Procrastination;
