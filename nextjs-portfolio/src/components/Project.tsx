"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "ExaamPoint – Mock Test Platform",
    description:
      "A scalable exam platform where students take JEE/NEET/GATE mock tests. Built using MERN stack with micro-service style architecture.",
    tech: ["React", "Node.js", "Express", "MongoDB", "AWS"],
    link: "#",
    badge: "Full Stack",
  },
  {
    title: "LLM Q&A Chatbot",
    description:
      "PDF-based Q&A system where admin uploads 5000+ PDFs per course. Students get precise answers retrieved using embedding search + fallback LLM.",
    tech: ["Next.js", "Pinecone", "OpenAI", "Vector DB"],
    link: "#",
    badge: "AI / LLM",
  },
  {
    title: "Task & Seva Management System",
    description:
      "Role-based task allocation and management system used by 50+ members, enabling automated assignment, progress tracking, and reduced coordination through smart dashboards and notifications.",
    tech: ["MERN Stack", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    link: "#",
    badge: "Full Stack",
  }
  ,
  {
    title: "E-commerce Book Store Platform",
    description:
      "Full-fledged e-commerce platform for a bookstore, enabling customers to browse, search, and purchase books online. Built with scalable APIs, secure user authentication, cart and order management, and an optimized checkout flow designed for real-world business operations.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    link: "#",
    badge: "Full Stack",
  }
  ,
  {
    title: "Fuzzy Time Series Forecasting Engine",
    description:
      "Hybrid forecasting engine using LSTM + fuzzy decomposition. Published research model with improved accuracy over classical FTSF methods.",
    tech: ["Python", "TensorFlow", "FTSF", "LSTM"],
    link: "#",
    badge: "Research",
  },
  {
    title: "Sarva Solar Website",
    description:
      "Modern business website built for solar energy company. Fully responsive with optimized SEO and clean UI.",
    tech: ["Next.js", "Tailwind", "Vercel"],
    link: "#",
    badge: "Frontend",
  },
];

export default function Projects() {
  return (
    <section className="w-full py-5 bg-white dark:bg-[#05050a]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
            Portfolio
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Featured Projects
          </h2>

          <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-xl">
            Here are some of the products, platforms and research systems I've built recently.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl shadow-sm bg-white/80 dark:bg-white/5 dark:backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className="text-sm inline-block px-3 py-1 mb-3 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-600/20 dark:text-blue-300">
                {project.badge}
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {project.title}
              </h3>

              <p className="mt-2 text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="mt-5 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium"
              >
                View Project <FiArrowUpRight />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
