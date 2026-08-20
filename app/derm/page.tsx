import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../components/Nav";
import DERMBoxPackaging from "../assets/derm/DERM Box Packaging.png";
import DermLogoNode from "../assets/derm/DERM Logo Node.png";
import DermColors from "../assets/derm/DERM Colors.png";
import DermCover from "../assets/derm.png";
import DermToteBag from "../assets/derm/DERM Tote Bag.png";
import Derm3Box1 from "../assets/derm/DERM 3 Box 1.png";
import Derm3SquareBox from "../assets/derm/DERM 3 Square Box.png";
import DermAntiAging from "../assets/derm/DERM Anti-aging.png";
import DermBillboard2 from "../assets/derm/DERM Billboard 2.png";
import DermBillboard from "../assets/derm/DERM Billboard.png";
import DermBusinessCard from "../assets/derm/DERM Business Card.png";
import DermDeepHydrationSprayBottle from "../assets/derm/DERM Deep Hydration Spray Bottle.png";
import DermFinalCover from "../assets/derm/DERM FInal Cover.png";
import DermFullBoxPackage from "../assets/derm/DERM Full Box Package.png";
import DermIGStory from "../assets/derm/DERM IG Story.png";
import DermImageXBox from "../assets/derm/DERM Image X Box.png";
import DermImageXProduct from "../assets/derm/DERM Image X Product.png";
import DermLandingPage from "../assets/derm/DERM Landing Page.png";
import DermProductPage from "../assets/derm/DERM Product Page.png";
import DermSquareBillboard from "../assets/derm/DERM Square Billboard.png";
import DermStationery from "../assets/derm/DERM Stationery.png";
import DermSubwayLEDBillboard from "../assets/derm/DERM Subway LED Billboard.png";
import DermX2Logo from "../assets/derm/DERM X2 Logo.png";
import NextProject from "../components/NextProject";
import VortaCover from "../assets/vorta.png";
import ProscratinationCover from "../assets/procrastination.png";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "DERM Premium Skincare — Ricky",
  description:
    "Brand identity, art direction, and web UI/UX for DERM Skincare — a bio-cellular skincare brand at the intersection of dermatological precision and environmental harmony.",
  openGraph: {
    title: "DERM Premium Skincare — Ricky",
    description:
      "Brand identity, art direction, and web UI/UX for DERM Skincare — a bio-cellular skincare brand at the intersection of dermatological precision and environmental harmony.",
    url: "https://greatricky.vercel.app/derm",
    siteName: "Ricky Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DERM Premium Skincare — Ricky",
    description:
      "Brand identity, art direction, and web UI/UX for DERM Skincare.",
  },
};


const Derm = () => {

  const dermInfo = [
    { name: "BRAND IDENTITY" },
    { name: "ART DIRECTION" },
    { name: "WEB UI/UX" },
    { name: "VISUAL STRATEGY" },

  ]

  const dermFirstImages = [
    {
      img: DermLogoNode,
      alt: "DERM Logo Node"
    },
    {
      img: DermColors,
      alt: "DERM Colors"
    },
  ]

  const dermSecondImages = [
    { img: DermToteBag, alt: "DERM Tote Bag" },
    { img: DermBusinessCard, alt: "DERM Business Card" },
    { img: DermFullBoxPackage, alt: "DERM Full Box Package" },
    { img: DermImageXProduct, alt: "DERM Image X Product" },
    { img: DermDeepHydrationSprayBottle, alt: "DERM Deep Hydration Spray Bottle" },
    { img: DermBillboard, alt: "DERM Billboard" },
    { img: DermX2Logo, alt: "DERM X2 Logo" },
    { img: DermLandingPage, alt: "DERM Landing Page" },
    { img: DermIGStory, alt: "DERM IG Story" },
    { img: DermProductPage, alt: "DERM Product Page" },
    { img: DermSquareBillboard, alt: "DERM Square Billboard" },
    { img: DermStationery, alt: "DERM Stationery" },
    { img: DermAntiAging, alt: "DERM Anti-aging" },
    { img: DermSubwayLEDBillboard, alt: "DERM Subway LED Billboard" },
    { img: DermImageXBox, alt: "DERM Image X Box" },
    { img: DermBillboard2, alt: "DERM Billboard 2" },
    { img: Derm3SquareBox, alt: "DERM 3 Square Box" },
    { img: Derm3Box1, alt: "DERM 3 Box 1" },
    { img: DermFinalCover, alt: "DERM FInal Cover" },
  ];

  const nextProjects = [
    {
      image: VortaCover,
      heading: "Vorta – Brand Identity & Packaging",
      tags: ["Branding", "Web Design"],
      href: "/vorta"
    },
    {
      image: ProscratinationCover,
      heading: "Procrastination United",
      tags: ["Branding", "Illustration"],
      href: "/procrastination"
    }
  ]
  return (
    <>

      <section className="bg-white px-4 pt-30 md:px-8 lg:px-[100px]">
        <Nav />
        <h1 className="text-[#20190F] font-[family-name:var(--font-urbanist)] text-[40px] md:text-[80px] font-bold leading-normal not-italic">DERM PREMIMUM <br /> SKINCARE</h1>

        <Image src={DERMBoxPackaging} alt="DERM Box Packaging" className="w-full" />
        <div className="flex px-4 py-12 md:px-24 md:py-[72px] flex-col items-start gap-2.5 self-stretch bg-[#E3DEC8]">
          {dermInfo.map((info) => (
            <div key={info.name} className="flex flex-col items-start gap-2.5 self-stretch">
              <h3 className="text-[#20190F] font-[family-name:var(--font-urbanist)] text-[24px] md:text-[32px] font-[500] leading-snug md:leading-[40px]">{info.name}</h3>
            </div>
          ))}
          <p className="text-[#20190F] font-[family-name:var(--font-urbanist)] text-[18px] md:text-[24px] font-[400] leading-relaxed md:leading-[32px] mt-10 md:mt-20">
            DERM Skincare is an independent, bio-cellular skincare brand engineered at the intersection of dermatological precision and environmental harmony. Built around bio-fermented actives and cellular recovery, the brand requires an identity that balances medical authority with modern, high-fashion minimalism.
          </p>
        </div>
        <Image src={DermCover} alt="DERM Cover" className="w-full" />
        <div className="flex px-4 py-12 md:px-24 md:py-[72px] flex-col items-start gap-2.5 self-stretch bg-[#E3DEC8]">
          <h1 className="text-[#20190F] font-[family-name:var(--font-urbanist)] text-[20px] md:text-[24px] font-bold">THE VISUAL SYSTEM & LOGOMARK</h1>
          <p className="text-[#20190F] font-[family-name:var(--font-urbanist)] text-[18px] md:text-[24px] font-[400] leading-relaxed md:leading-[32px] mt-8">
            The visual identity for DERM is built on a deliberate contrast: immovable structural weight paired with micro-level organic fluidity.
            <br />
            <br />
            Instead of traditional, delicate beauty typography, the wordmark uses commanding, high-density letterforms that establish immediate authority on the shelf. Cut directly into the heavy geometry of the D, R, and M are custom fluid cutouts referencing cellular division, droplet tension, and biological precision at a microscopic level.
            <br />
            <br />
            The integrated exclamation point (DERM!) anchors the brand's bold, unapologetic stance on skin health, while the arched emblem and crisp secondary typography ground the identity in modern German clinical engineering.
            <br />
            <br />
            To complement this structure, the brand utilizes a curated color ecosystem. Deep forest green and muted sage ground the identity in clinical botanical potency, while warm alabaster and deep skin-bronze reflect raw human texture and radiant barrier health.

            Altogether, the identity establishes a new archetype for functional luxury, where scientific rigor meets commanding visual presence to prove that skin health does not need to be delicate to be deeply effective.
          </p>
        </div>
        {dermFirstImages.map((dermFirstImage) => (
          <div key={dermFirstImage.alt} className="w-full">
            <Image src={dermFirstImage.img} alt={dermFirstImage.alt} className="w-full" />
          </div>
        ))}
        <video
          src="/DERM-BRAND-VIDEO.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {dermSecondImages.map((dermSecondImage) => (
          <div key={dermSecondImage.alt} className="w-full">
            <Image src={dermSecondImage.img} alt={dermSecondImage.alt} className="w-full" />
          </div>
        ))}
        <NextProject projects={nextProjects} />


      </section>
      <Footer />
    </>
  );
};


export default Derm;
