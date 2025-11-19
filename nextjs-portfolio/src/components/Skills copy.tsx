"use client";

import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTypescript, SiOpenai, SiTensorflow, SiTailwindcss, SiExpress, SiPytorch } from "react-icons/si";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },
    {
      title: "AI / LLM",
      skills: [
        { name: "OpenAI", icon: <SiOpenai /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "Python", icon: <FaPython /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight"
        >
          Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl"
        >
          A quick overview of the technologies, frameworks, and tools I use
          regularly to build full-stack products and AI systems.
        </motion.p>

        {/* Skills Layout */}
        <div className="mt-12 space-y-12">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 
                               rounded-lg border border-gray-200 dark:border-gray-700 
                               text-sm text-gray-800 dark:text-gray-200"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
