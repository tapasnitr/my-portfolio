// components/FreelanceServices.tsx

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
type Service = {
    title: string;
    description: string;
};

const services: Service[] = [
    {
        title: "MERN Bug Fixing",
        description:
            "Debug and resolve frontend and backend issues in existing MERN applications to ensure stability and smooth production behavior.",
    },
    {
        title: "Feature Development",
        description:
            "Design and implement new features safely while preserving existing workflows and system reliability.",
    },
    {
        title: "API & Performance Optimization",
        description:
            "Optimize Node.js APIs and MongoDB queries to reduce response time and improve scalability in real-world systems.",
    },
    {
        title: "Startup App Maintenance",
        description:
            "Ongoing support for early-stage products including fixes, refactors, code reviews, and production readiness.",
    },
];

const FreelanceServices: React.FC = () => {
    return (
        <section id="services" className="relative py-24">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="mb-14">
                    <p className="text-sm font-medium text-blue-500 mb-2">
                        Freelance Services
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        How I Can Help You
                    </h2>
                    <p className="mt-4 max-w-2xl text-slate-600">
                        I help startups and teams fix issues, add features, and stabilize
                        production-ready MERN applications.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-md p-6 shadow-sm transition hover:shadow-md"
                        >
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}


                <div className="mt-12 flex flex-col gap-6">
                    {/* Top row */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                        {/* Primary CTA */}
                        <a
                            href="mailto:tapasmananit@gmail.com"
                            className="inline-flex w-fit items-center justify-center rounded-full
                 bg-gradient-to-r from-indigo-500 to-purple-500
                 px-6 py-3 text-sm font-medium text-white
                 shadow transition hover:opacity-90"
                        >
                            Contact Me
                        </a>

                        {/* Contact Details */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm">
                            {/* Email */}
                            <div className="flex items-center gap-2 text-slate-600">
                                <span className="font-medium text-slate-700">Email:</span>
                                <a
                                    href="mailto:tapasmananit@gmail.com"
                                    className="hover:text-indigo-600 transition"
                                >
                                    tapasmananit@gmail.com
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-2 text-slate-600">
                                <span className="font-medium text-slate-700">Phone:</span>
                                <a
                                    href="tel:+919068414734"
                                    className="hover:text-indigo-600 transition"
                                >
                                    +91 90684 14734
                                </a>
                            </div>

                            {/* WhatsApp */}
                            <div className="flex items-center gap-2">
                                <FaWhatsapp className="text-green-500 text-lg" />
                                <a
                                    href="https://wa.me/919068414734"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-slate-600 hover:text-green-600 transition"
                                >
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Availability */}
                    <p className="text-sm text-slate-500">
                        Open to{" "}
                        <span className="font-medium text-slate-700">Remote</span>,{" "}
                        <span className="font-medium text-slate-700">Contract</span>, and{" "}
                        <span className="font-medium text-slate-700">Freelance</span> work
                    </p>
                </div>


            </div>
        </section>
    );
};

export default FreelanceServices;
