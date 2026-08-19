import React from "react";
import Image from "next/image";
import Nav from "../components/Nav";

import CamporaCover from "../assets/campora/Campora Cover.png";
import CamporaInfo from "../assets/campora/Campora Info.png";
import ComporaUI from "../assets/campora/Campora UI.png";
import CamporaMobile from "../assets/campora/Campora Mobile.png";
import CamporaWebCTA from "../assets/campora/Campora Web CTA.png";
import CamporaOnboarding from "../assets/campora/Campora Onboarding.png";

import DermCover from "../assets/derm.png";
import ProscratinationCover from "../assets/procrastination.png";
import Footer from "../components/Footer";
import NextProject from "../components/NextProject";

const Campora = () => {
  const dermSecondImages = [{}];

  const nextProjects = [
    {
      image: DermCover,
      heading: "DERM Premium Skincare",
      tags: ["Branding", "Web Design"],
      href: "/derm",
    },
    {
      image: ProscratinationCover,
      heading: "Procrastination United",
      tags: ["Branding", "Illustration"],
      href: "/procrastination",
    },
  ];
  return (
    <>
      <section className="bg-white px-4 pt-30 md:px-8 lg:px-[100px]">
        <Nav />
        <h1 className="text-[#20190F] font-[family-name:var(--font-urbanist)] text-[40px] md:text-[80px] font-bold leading-normal not-italic">
          CAMPORA - SMART <br />
          CAMPUS PLATFORM
        </h1>

        <Image src={CamporaCover} alt="Campora Cover" className="w-full" />
        <div className="flex px-4 py-16 md:px-20 md:py-50 flex-col items-start self-stretch bg-[#D4D9F7]">
          <p className="text-[#454557] font-[family-name:var(--font-urbanist)] text-[18px] md:text-[24px] font-[400] leading-relaxed md:leading-[34px]">
            Campora is a smart campus platform designed to bring every part of a
            Nigerian student's academic life into one place, built specifically
            for how they actually live and study. Our design reflects Kadix's
            commitment to clarity, trust, and simplicity in a space defined by
            scattered, unreliable systems. Every experience has been carefully
            crafted to feel fast, personal, and dependable, replacing guesswork
            with a platform students can rely on. Campora is more than an app,
            it's the campus operating system Nigerian students have never had.
          </p>
        </div>
        <Image src={ComporaUI} alt="Campora UI" className="w-full" />
        <Image src={CamporaInfo} alt="Campora Info" className="w-full" />
        <Image
          src={CamporaOnboarding}
          alt="Campora Onboarding"
          className="w-full"
        />
        <video
          src="/SOLUTION SWIPE VIDEO.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <Image src={CamporaMobile} alt="Campora Mobile" className="w-full" />
        <Image src={CamporaWebCTA} alt="Campora Web CTA" className="w-full" />

        <NextProject projects={nextProjects} />
      </section>
      <Footer />
    </>
  );
};

export default Campora;
