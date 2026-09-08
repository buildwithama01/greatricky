"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { SiBehance } from "react-icons/si";
import { DribbbleLogoIcon } from "@phosphor-icons/react";
import rickyLogo from "../assets/ricky-logo.png";

const navItems = [
  { label: "Portfolio", href: "/#works" },
  { label: "About Me", href: "/#about" },
  { label: "Get In Touch", href: "/#footer" },
];

const socialItems = [
  { icon: SiBehance, href: "https://behance.net/greatricky", label: "Behance" },
  {
    icon: DribbbleLogoIcon,
    href: "https://dribbble.com/greatricky",
    label: "Dribble",
  },
  {
    icon: FiInstagram,
    href: "https://www.instagram.com/greatricky7",
    label: "Instagram",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/emmanuel-ama-3a3428298/",
    label: "LinkedIn",
  },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full py-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <div className="flex flex-1 flex-col gap-5 rounded-xl border border-white/20 bg-black/16 px-6 py-3 shadow-lg backdrop-blur-xl md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="flex w-full items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Link href="/" aria-label="Go to home page">
                <Image
                  src={rickyLogo}
                  alt="Ricky logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                  priority
                />
              </Link>
            </div>

            <div className="hidden items-center gap-10 text-[15px] font-medium text-white/90 md:flex lg:text-[18px]">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-(family-name:--font-urbanist) opacity-80 transition-opacity duration-200 hover:opacity-100"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden md:block" />

            <button
              type="button"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-12 w-12 shrink-0 items-center justify-center md:hidden"
            >
              {isMenuOpen ? (
                <IoClose size={42} color="white" aria-hidden="true" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 14H14M40 14H22"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M40 34H34M8 34H26"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 24H14H40"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>

          <div
            className={`${isMenuOpen ? "flex" : "hidden"} w-full flex-col gap-5 md:hidden`}
          >
            <div className="flex flex-col items-start gap-4 border-t border-white/20 pt-5 text-[14px] font-medium text-white/90">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-(family-name:--font-urbanist) transition-opacity duration-200 hover:opacity-100"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex flex-row items-center gap-3 border-t border-white/20 pt-5">
              {socialItems.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/16 text-xl text-white transition-all duration-200 hover:border-black/20 hover:bg-black/20"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-4 rounded-xl border border-white/20 bg-black/16 px-4 py-3 shadow-lg backdrop-blur-xl md:flex">
          {socialItems.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/16 text-xl text-white transition-all duration-200 hover:border-black/20 hover:bg-black/20"
              target="_blank"
              rel="noreferrer"
            >
              <Icon />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
