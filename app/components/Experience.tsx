import React from "react";
import Image, { StaticImageData } from "next/image";

export interface CardData {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  containerBgClass: string;
  imageBgClass: string;
}

export interface GrowthSectionProps {
  numbering: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonTextColorClass: string;
  topBgClass: string;
  leftCard: CardData;
  rightCard: CardData;
}

const Experience: React.FC<GrowthSectionProps> = ({
  numbering,
  heading,
  description,
  buttonText,
  buttonTextColorClass,
  topBgClass,
  leftCard,
  rightCard,
}) => {
  return (
    <div className="w-full flex flex-col font-sans text-white">
      {/* --- Top Header Section --- */}
      <div className={`${topBgClass} px-6 py-8 md:px-16 md:py-20`}>
        <div className="px-6">
          <h2 className="text-3xl lg:text-[32px] font-extrabold mb-6 flex items-center gap-3 font-[family-name:var(--font-tan)] tracking-wide drop-shadow-sm">
            <span>{numbering}</span>
            <span>{heading}</span>
          </h2>

          <p className="text-lg md:text-xl font-(family-name:--font-nunito) mb-6 whitespace-pre-line font-medium">
            {description}
          </p>

          <p
            className={`flex w-fit bg-white px-4 py-2  font-(family-name:--font-nunito)  ${buttonTextColorClass}`}
          >
            {buttonText}
          </p>
        </div>
      </div>

      {/* --- Bottom Grid Section --- */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Column */}
        <div
          className={`${leftCard.containerBgClass} px-5 py-2  flex flex-col gap-8`}
        >
          <div
            className={`${leftCard.imageBgClass} rounded-3xl aspect-square flex items-center justify-center max-h-[500px] w-full mx-auto`}
          >
            <Image src={leftCard.imageSrc} alt={leftCard.title} />
          </div>
          <div className="max-w-xl mx-auto w-full p-[31px]">
            <h3 className="text-[32px] font-bold mb-4 font-[family-name:var(--font-tan)]">
              {leftCard.title}
            </h3>
            <p className="text-2 lg:text-[24px] leading-relaxed font-[family-name:var(--font-nunito)]">
              {leftCard.description}
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div
          className={`${rightCard.containerBgClass} px-5 py-2 flex flex-col gap-8`}
        >
          <div
            className={`${rightCard.imageBgClass} rounded-3xl aspect-square flex items-center justify-center max-h-[500px] w-full mx-auto`}
          >
            <Image src={rightCard.imageSrc} alt={rightCard.title} />
          </div>
          <div className="max-w-xl mx-auto w-full p-[31px]">
            <h3 className="text-[32px] font-bold mb-4 font-[family-name:var(--font-tan)]">
              {rightCard.title}
            </h3>
            <p className="text-2 lg:text-[24px] leading-relaxed font-[family-name:var(--font-nunito)]">
              {rightCard.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
