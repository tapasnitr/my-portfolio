// components/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Branding */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Tapas Manna
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Full Stack Developer • MERN • AI
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6 text-sm text-slate-600">
            <a href="#projects" className="hover:text-slate-900 transition">
              Projects
            </a>
            <a href="#services" className="hover:text-slate-900 transition">
              Services
            </a>
            <a href="#contact" className="hover:text-slate-900 transition">
              Contact
            </a>
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition"
            >
              LinkedIn
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-slate-200" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Tapas Manna. All rights reserved.
          </p>
          <p>
            Open to{" "}
            <span className="font-medium text-slate-700">Remote</span>,{" "}
            <span className="font-medium text-slate-700">Full-time</span>, and{" "}
            <span className="font-medium text-slate-700">Contract</span> roles
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
