"use client";

import Image from "next/image";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import campora from "../assets/design.png";
import derm from "../assets/derm/DERM 3 Box 1.png";
import dermBillboard from "../assets/derm/DERM Billboard 2.png";
import development from "../assets/development.png";
import developmentSecond from "../assets/development2.png";
import design from "../assets/design2.png";
import { GoDotFill } from "react-icons/go";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "A brand is remembered long before it's understood. We build identities rooted in clarity and intention, from logo systems to visual language, designed to hold up across every touchpoint a business shows up in. The goal isn't decoration, it's giving a brand a presence people trust and recognise at a glance.",
    items: [
      "Logotype",
      "Brand Identity",
      "Packaging Design",
      "Social Media Design",
    ],
    images: [
      { source: dermBillboard, alt: "DERM billboard project" },
      { source: derm, alt: "DERM brand identity project" },
    ],
  },
  {
    number: "02",
    title: "Web / UI/UX Design",
    description:
      "Good design earns trust the moment someone opens a screen. We design digital products and websites focused on clarity, usability, and purpose, translating complex ideas into interfaces that feel simple, intuitive, and built around how people actually use them. Every decision is made with the user's experience first, not just how it looks.",
    items: [
      "Website & Platform Design",
      "E-commerce Design",
      "Mobile App Design",
      "User Experience",
    ],
    images: [
      { source: campora, alt: "Campora app design" },
      { source: design, alt: "Figma Design project" },
    ],
  },
  {
    number: "03",
    title: "Development",
    description:
      "Design means little if it doesn't work in the real world. We build fast, reliable, and detail-driven products that bring the design vision to life exactly as intended, performing seamlessly across every device and interaction. Great products are the result of design and engineering working as one.",
    items: [
      "Webflow Development",
      "Shopify Development",
      "Responsive Implementation",
      "Launch & Support",
    ],
    images: [
      { source: developmentSecond, alt: "HTML code displayed" },
      { source: development, alt: "Development project" },
    ],
  },
];

export default function Services() {
  const [openService, setOpenService] = useState(0);

  return (
    <section className="bg-white px-4 py-20 text-[#171717] md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-4 md:mb-12">
          <h2 className="font-(family-name:--font-urbanist) text-[24px] font-semibold md:text-[32px]">
            Services
          </h2>
          <span className="h-px w-12 bg-[#171717] md:w-16" />
        </div>

        <div className="border-t border-black/10">
          {services.map((service, index) => {
            const isOpen = openService === index;

            return (
              <div key={service.number} className="border-b border-black/10">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenService(isOpen ? -1 : index)}
                  className="grid w-full grid-cols-[48px_1fr_32px] items-center gap-4 py-5 text-left md:grid-cols-[80px_1fr_40px] md:gap-8 md:py-6"
                >
                  <span className="font-(family-name:--font-urbanist) text-[20px] font-normal md:text-[24px]">
                    {service.number}
                  </span>
                  <span className="font-(family-name:--font-urbanist) text-[20px] font-normal md:text-[24px]">
                    {service.title}
                  </span>
                  <span className="flex justify-end">
                    {isOpen ? <IoClose size={28} /> : <FiPlus size={28} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="grid gap-8 pb-12 pt-2 md:grid-cols-[1.5fr_0.75fr] md:gap-12 md:pb-24 md:pt-4">
                    <div>
                      {service.images.length > 0 && (
                        <div className="mb-10 grid grid-cols-1 gap-5 md:mb-12 md:max-w-155 md:grid-cols-2 md:gap-6">
                          {service.images.map((image) => (
                            <div
                              key={image.alt}
                              className="relative aspect-4/3 overflow-hidden"
                            >
                              <Image
                                src={image.source}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 768px) 50vw, 310px"
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="max-w-155">
                        <p className="mb-2 border-b border-black/10 pb-2 font-(family-name:--font-urbanist) text-[13px]">
                          What we do
                        </p>
                        <p className="font-(family-name:--font-urbanist) text-[14px] leading-[1.15] md:text-[15px]">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="md:pt-44">
                      <p className="mb-2 border-b border-black/10 pb-2 font-(family-name:--font-urbanist) text-[13px]">
                        What we do
                      </p>
                      <ul className="font-(family-name:--font-urbanist) text-[13px]">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center justify-between border-b border-black/10 py-1.5"
                          >
                            <span>{item}</span>
                            <span aria-hidden="true">
                              <GoDotFill />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
