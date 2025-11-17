"use client";

import React from "react";
import Image from "next/image";
import SelfBG from "./selgBg.png";

interface Props {
  name?: string;
}

const HeroSection: React.FC<Props> = ({ name = "Tapas" }) => {
  const navLinks = [
    { label: "Home", href: "#", active: false },
    { label: "About", href: "#", active: true },
    { label: "Projects", href: "#", active: false },
    { label: "Skills", href: "#", active: true },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden relative flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-8 py-6">
        <div className="text-xl md:text-2xl font-bold text-black">
          Tapas Manna
        </div>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map(({ label, href, active }) => (
            <a
              key={label}
              href={href}
              className={`${
                active
                  ? "text-black font-semibold"
                  : "text-gray-500 hover:text-black"
              } transition-colors`}
            >
              {label}
            </a>
          ))}
        </nav>

        <button className="bg-green-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:bg-green-700 text-sm md:text-base transition-colors">
          Contact
        </button>
      </header>

      {/* Main Section */}
      <main className="flex flex-col md:flex-row flex-1 items-center md:items-stretch">
        {/* Left: Text */}
        <section className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 py-12 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Innovative Digital <br /> Solutions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            Hi, I&apos;m {name}, a developer specializing <br className="hidden sm:block" />
            in creating efficient and elegant web <br className="hidden sm:block" />
            experiences
          </p>
        </section>

        {/* Right: Image */}
        <section className="relative w-full md:w-1/2 h-72 md:h-auto">
          <Image
            src={SelfBG}
            alt="Background"
            fill
            className="object-contain md:object-cover animate-zoom"
            priority
          />
        </section>
      </main>

      {/* 🔄 Background Image Animation (optional) */}
      <style jsx>{`
        @keyframes zoomInOut {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-zoom {
          animation: zoomInOut 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
