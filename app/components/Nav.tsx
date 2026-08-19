"use client";

import Image from "next/image";
import Link from "next/link";
import { FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { SiBuymeacoffee } from "react-icons/si";
import { SiBehance } from "react-icons/si";
import rickyLogo from "../assets/ricky-logo.png";

const navItems = [
  { label: "Portfolio", href: "/#works" },
  { label: "About Me", href: "/#about" },
  { label: "Get In Touch", href: "/#footer" },
];

const socialItems = [
  { icon: SiBehance, href: "https://behance.net/greatricky", label: "Behance" },
  { icon: FiInstagram, href: "https://www.instagram.com/_ricky_designs/", label: "Instagram" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/emmanuel-ama-3a3428298/", label: "LinkedIn" },
  { icon: SiBuymeacoffee, href: "#", label: "Coffee" },
];

const Nav = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full py-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        {/* Left Section */}
        <div className="flex flex-1 items-center justify-between gap-6 rounded-xl border border-white/20 bg-black/16 backdrop-blur-xl px-6 py-3 shadow-lg ">
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

            <div className="hidden items-center gap-10 text-[15px] font-medium text-white/90 md:flex lg:text-[18px] ">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="opacity-80 transition-opacity duration-200 font-[family-name:var(--font-urbanist)] hover:opacity-100"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Spacer to balance the logo if needed, or just let space-between handle it */}
            <div className="hidden md:block" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 rounded-xl border border-white/20 bg-black/16 backdrop-blur-xl px-4 py-3 shadow-lg ">
          {socialItems.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/16 backdrop-blur-[18.243px] text-xl text-white transition-all duration-200 hover:border-black/20 hover:bg-black/20"
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
