// components/ContactSection.tsx

import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-24 border-t border-slate-200 bg-white/60 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-medium text-blue-500 mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Let’s Work Together
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            If you’re looking for help with a MERN application, need feature
            development, or want to discuss a remote role, feel free to reach
            out.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-sm font-medium text-slate-500">Email</h3>
            <a
              href="mailto:tapasmananit@gmail.com"
              className="mt-2 inline-block text-lg font-semibold text-slate-900 hover:text-indigo-600 transition"
            >
              tapasmananit@gmail.com
            </a>
          </div>

          {/* Phone / WhatsApp */}
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-sm font-medium text-slate-500">
              Phone / WhatsApp
            </h3>
            <a
              href="tel:+919068414734"
              className="mt-2 inline-block text-lg font-semibold text-slate-900 hover:text-indigo-600 transition"
            >
              +91 90684 14734
            </a>
          </div>

          {/* LinkedIn */}
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-sm font-medium text-slate-500">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/krishnastapas/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-lg font-semibold text-slate-900 hover:text-indigo-600 transition"
            >
              linkedin.com/in/krishnastapas
            </a>
          </div>

          {/* GitHub */}
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-sm font-medium text-slate-500">GitHub</h3>
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-lg font-semibold text-slate-900 hover:text-indigo-600 transition"
            >
              github.com/your-github
            </a>
          </div>
        </div>

        {/* Availability */}
        <div className="mt-12 text-sm text-slate-500">
          Open to{" "}
          <span className="font-medium text-slate-700">Remote</span>,{" "}
          <span className="font-medium text-slate-700">Full-time</span>, and{" "}
          <span className="font-medium text-slate-700">Contract</span>{" "}
          opportunities.
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
