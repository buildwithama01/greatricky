import React from "react";
import Image from "next/image";
import Nav from "../components/Nav";

import VortaPrimaryLogo from "../assets/vorta/Vorta Primary Logo.png";
import VortaLogoText from "../assets/vorta/Vorta Logo and Text.png";
import VortaColors from "../assets/vorta/Vorta Colors.png";
import VortaIcon from "../assets/vorta/Vorta Icon.png";
import VortaProfileBackground from "../assets/vorta/Vorta Profile Background.png";
import VortaSportsWear from "../assets/vorta/Vorta Sports Wear.png";
import VortaBillboard from "../assets/vorta/Vorta Billboard.png";
import VortaWaterBottle from "../assets/vorta/Vorta Water Bottle.png";
import VortaSweatWear from "../assets/vorta/Vorta Sweat Wear.png";
import VortaMarketing from "../assets/vorta/Vorta Marketing.png";
import VortaToteBag from "../assets/vorta/Vorta Tote Bag.png";
import VortaTrackWear from "../assets/vorta/Vorta Track Wear.png";
import VortaCityBilllboard from "../assets/vorta/Vorta City Billboard.png";
import DermCover from "../assets/derm.png";
import NextProject from "../components/NextProject";
import VortaCover from "../assets/vorta.png";
import CamporaCover from "../assets/campora.png";
import Footer from "../components/Footer";

const Vorta = () => {
  const vortaFirstImages = [
    { img: VortaPrimaryLogo, alt: "Vorta Primary Logo" },
    { img: VortaLogoText, alt: "Vorta Logo and Text" },
    { img: VortaColors, alt: "Vorta Colors" },
    { img: VortaIcon, alt: "Vorta Icon" },
    { img: VortaProfileBackground, alt: "Vorta Profile Background" },
    { img: VortaSportsWear, alt: "Vorta Sports Wear" },
    { img: VortaBillboard, alt: "Vorta Billboard" },
    { img: VortaWaterBottle, alt: "Vorta Water Bottle" },
    { img: VortaSweatWear, alt: "Vorta Sweat Wear" },
  ];

  const vortaSecondImages = [
    { img: VortaMarketing, alt: "Vorta Marketing" },
    { img: VortaToteBag, alt: "Vorta Tote Bag" },
    { img: VortaTrackWear, alt: "Vorta Track Wear" },
    { img: VortaCityBilllboard, alt: "Vorta City Billboard" },
  ];

  const nextProjects = [
    {
      image: CamporaCover,
      heading: "Campora",
      tags: ["Web Design", "Mobile App Design"],
      href: "/campora",
    },
    {
      image: DermCover,
      heading: "DERM Premium Skincare",
      tags: ["Branding", "Web Design"],
      href: "/derm",
    },
  ];
  return (
    <>
      <section className="bg-white px-4 pt-30 md:px-8 lg:px-[100px]">
        <Nav />
        <h1 className="text-[#20190F] font-[family-name:var(--font-urbanist)] text-[40px] md:text-[80px] font-bold leading-normal not-italic">
          VORTA - MOVE BEYOND
        </h1>

        <Image src={VortaCover} alt="Vorta Cover" className="w-full" />
        <div className="flex px-4 py-12 md:px-[96px] md:py-[72px] flex-col items-start gap-2.5 self-stretch bg-[#F4F6F5]">
          <p className="text-[#20190F] font-[family-name:var(--font-lato)] text-[18px] md:text-[24px] font-[400] leading-relaxed md:leading-[32px] mt-7">
            Vorta is a contemporary sportswear brand built for daily momentum,
            engineered for those who move seamlessly between training, work, and
            the urban landscape. It bridges high-performance technical wear with
            effortless everyday style, a reflection of motion under pressure.
          </p>
          <h1 className="text-[#20190F] font-[family-name:var(--font-rajdhani)] text-[24px] md:text-[32px] font-[700] mt-7">
            THE STRATEGIC CHALLENGE
          </h1>
          <p className="text-[#20190F] font-[family-name:var(--font-lato)] text-[18px] md:text-[24px] font-[400] leading-relaxed md:leading-[32px] mt-7">
            Modern movement goes beyond the gym. It demands seamless
            transitions, versatility, and quiet confidence.
            <br />
            The challenge was to design an identity that balances technical
            performance with everyday luxury, carrying the weight of athletic
            functionality while maintaining a clean, grounded, modern lifestyle
            edge
          </p>
        </div>
        <video src="/VORTA BRAND VIDEO.mp4" autoPlay muted loop playsInline />
        <div className="flex px-4 py-12 md:px-[96px] md:py-[72px] flex-col items-start gap-2.5 self-stretch bg-[#F4F6F5]">
          <h1 className="text-[#20190F] font-[family-name:var(--font-rajdhani)] text-[24px] md:text-[32px] font-[700]">
            The Concept: Structural Flow & Utility
          </h1>
          <p className="text-[#20190F] font-[family-name:var(--font-lato)] text-[18px] md:text-[24px] font-[400] leading-relaxed md:leading-[32px] mt-10">
            The Vorta mark takes its name literally. Two curved forms spiral
            inward, converging into a single sharp point, a visual vortex that
            channels energy forward rather than scattering it. Where
            hyper-aggressive gym branding often leans on sharp edges and static
            force, Vorta's mark stays in motion: fluid, directional, alive.
            <br />
            <br />
            This technical edge is balanced by a sophisticated, tactile color
            system. A deep, grounding base meets clean, minimal architecture,
            while strategic bursts of warm and vibrant accents inject active
            life into the palette.
            <br />
            <br />
            The result is a visual language that feels architectural yet human.
            It transitions effortlessly from high-output physical movement to
            the demands of the urban landscape, embodying a brand that is
            precise, versatile, and engineered to{" "}
            <span className="font-bold">Move Beyond.</span>
          </p>
        </div>
        {vortaFirstImages.map((vortaFirstImage) => (
          <div key={vortaFirstImage.alt} className="w-full">
            <Image
              src={vortaFirstImage.img}
              alt={vortaFirstImage.alt}
              className="w-full"
            />
          </div>
        ))}
        <video
          src="/VORTA SCROLLING WEB UI.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {vortaSecondImages.map((vortaSecondImage) => (
          <div key={vortaSecondImage.alt} className="w-full">
            <Image
              src={vortaSecondImage.img}
              alt={vortaSecondImage.alt}
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

export default Vorta;
