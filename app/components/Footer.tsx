"use client";

import Image from "next/image";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { DribbbleLogoIcon } from "@phosphor-icons/react";
import rickyLogo from "../assets/ricky-logo.png";

const socials = [
  { icon: FiMail, href: "mailto:greatricky@gmail.com", label: "Email" },
  {
    icon: FiInstagram,
    href: "https://www.instagram.com/_ricky_designs/",
    label: "Instagram",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/emmanuel-ama-3a3428298/",
    label: "LinkedIn",
  },
  { icon: DribbbleLogoIcon, href: "https://dribbble.com/greatricky", label: "Dribble" },
];

export default function Footer() {
  const formspreeEndpoint = "https://formspree.io/f/xwleanpk";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setFormData({ name: "", email: "", projectType: "", message: "" });
      setIsSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      id="footer"
      className="bg-gradient-to-b from-[#F97F19] to-[#AE220A] px-4 py-20 text-white md:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="flex flex-col items-start">
          <div className="mb-6 flex h-16 w-16 items-center justify-center">
            <Image
              src={rickyLogo}
              alt="Ricky logo"
              width={64}
              height={64}
              className="h-full w-full rounded-full object-contain"
              priority
            />
          </div>

          <h2 className="text-[32px] font-normal tracking-[-0.04em] font-[family-name:var(--font-urbanist)] font-600 text-white">
            Let&apos;s Build Something
          </h2>

          <div className="mt-2 flex items-center gap-3 text-2xl text-white/90">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <p className="mt-8 max-w-105 font-[family-name:var(--font-urbanist)] font-[400] text-[18px] leading-relaxed text-white/90">
            Ricky works with founders, businesses, and creatives who need things
            designed with intention, not just delivered fast. If you have
            something worth building, send a message and let&apos;s talk about
            it.
          </p>
        </div>

        <div className="mx-auto w-full max-w-170">
          <h3 className="mb-8  text-4xl font-[family-name:var(--font-urbanist)] font-[700] tracking-[-0.04em] text-white md:text-[3rem]">
            Get in Touch
          </h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-xl text-white/90 font-[family-name:var(--font-urbanist)] font-normal">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border border-white/40 bg-transparent px-4 py-4 text-[16px] text-white placeholder:text-[rgba(255,255,255,0.60)] font-[family-name:var(--font-urbanist)] font-normal outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-xl text-white/90 font-[family-name:var(--font-urbanist)] font-normal">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="me@domain.com"
                className="w-full border border-white/40 bg-transparent px-4 py-4 text-[16px] text-white placeholder:text-[rgba(255,255,255,0.60)] font-[family-name:var(--font-urbanist)] font-normal outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-xl text-white/90 font-[family-name:var(--font-urbanist)] font-normal">
                Project Type
              </label>
              <input
                type="text"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                placeholder="Brand Identity"
                className="w-full border border-white/40 bg-transparent px-4 py-4 text-[16px] text-white placeholder:text-[rgba(255,255,255,0.60)] font-[family-name:var(--font-urbanist)] font-normal outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-xl text-white/90 font-[family-name:var(--font-urbanist)] font-normal">
                Message
              </label>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full border border-white/40 bg-transparent px-4 py-4 text-[16px] text-white placeholder:text-[rgba(255,255,255,0.60)] font-[family-name:var(--font-urbanist)] font-normal outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-0 border border-white/50 bg-white px-8 py-3 text-[16px] text-[#AE220A] transition font-[family-name:var(--font-urbanist)] font-[400] hover:brightness-95 "
              >
                <span className="inline-flex items-center gap-2">
                  <FaPaperPlane aria-hidden="true" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
              </button>
            </div>

            {isSubmitted && (
              <p
                role="status"
                className="flex items-center gap-2 text-white font-[family-name:var(--font-urbanist)]"
              >
                Thanks for reaching out. I&apos;ll be in touch soon.
              </p>
            )}

            {submitError && (
              <p
                role="alert"
                className="flex items-center gap-2 text-white font-[family-name:var(--font-urbanist)]"
              >
                {submitError}
              </p>
            )}
          </form>
        </div>
      </div>
    </footer>
  );
}
