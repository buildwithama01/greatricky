import Image from "next/image";
import Nav from "./Nav";
import headerImg from "../assets/header-img.png";
import { FaCircleArrowDown } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="relative min-h-[760px] overflow-hidden bg-gradient-to-b from-[#AE220A] to-[#F97F19] px-4 pb-10 pt-6 md:px-8">
      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col">
        <Nav />

        <div className="mt-24 lg:mt-50 flex flex-col items-center justify-between gap-10 px-2 pb-6 lg:flex-row lg:items-end md:px-6 lg:gap-16">
          <div className="max-w-[620px] text-white">
            <h1 className="text-[3.2rem] font-black leading-[0.95] md:text-[5rem]">
              <span className="block font-[family-name:var(--font-urbanist)] text-[38px] mb-[24px] lg:text-[47px]">
                Hello!
              </span>
              <span className="block font-[family-name:var(--font-montserrat-alternates)] text-[50px] font-weight-900 lg:text-[63px]">
                I&apos;m <span className="text-[#FFD100]">Ricky</span>
                <br />
                Brand & Product <br /> Designer.{" "}
              </span>
            </h1>

            <p className="mt-8 max-w-[560px] text-[14px] font-[family-name:var(--font-urbanist)] font-[700] leading-[23px] text-white/90 md:text-[1.1rem] lg:text-[18px]">
              Ricky is the Co-Founder of Kadix Technologies and a brand and
              product designer, focused on creating clear, purposeful identities
              and digital experiences that stand the test of time.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:inline-flex items-center justify-center gap-3 sm:gap-5 rounded-[24px] sm:rounded-[82px] bg-white px-[3.3px] py-[6.5px] sm:w-auto w-full">
              <a
                href="#works"
                className="w-full sm:w-auto group flex inline-flex items-center justify-center gap-3 rounded-[82px] border border-white/90 bg-[#F97F19] px-7 py-3 text-[16px] font-[family-name:var(--font-urbanist)] font-[700] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.25)] transition hover:brightness-110"
              >
                <span>Portfolio</span>
                <span className="flex h-5 w-5 items-center justify-center transition-transform duration-300 group-hover:translate-y-1">
                  <FaCircleArrowDown size={20} color="#FFD100" />
                </span>
              </a>
              <a
                href="mailto:greatricky@gmail.com"
                className="w-full sm:w-auto text-center rounded-[82px] border-[2px] border-solid border-[#F97F19] bg-white px-7 py-3 text-base font-[family-name:var(--font-urbanist)] font-[700] leading-normal text-[#F97F19] shadow-[0_0_0_1px_rgba(255,255,255,0.15)] transition hover:brightness-110"
              >
                Hire Me
              </a>
            </div>
          </div>

          <div className="relative h-[500px] w-full max-w-[540px] md:h-[600px] lg:h-[680px]">
              <div className="absolute inset-x-0 bottom-0 top-0 z-10 overflow-hidden rounded-[70px]">
                <Image
                  src={headerImg}
                  alt="Ricky portrait"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 540px"
                  className="object-contain object-bottom"
                />
              </div>
            {/* <div className="absolute inset-x-6 bottom-0 top-[15%] overflow-hidden rounded-[70px] bg-[#f09673]/70"></div> */}

          </div>
        </div>
      </div>
    </header>
  );
}
