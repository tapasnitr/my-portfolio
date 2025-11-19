"use client";

import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiOpenai,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";

export default function SkillsSection() {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-[#61DBFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#3C873A]" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-gray-200" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" /> },
    { name: "PyTorch", icon: <SiPytorch className="text-[#EE4C2C]" /> },
    { name: "OpenAI", icon: <SiOpenai className="text-black dark:text-white" /> },
  ];

  // Duplicate list twice for seamless loop
  const loopSkills = [...skills];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold tracking-tight">Skills</h2>

        <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-2xl">
          Technologies I specialize in across full-stack development and AI.
        </p>

        {/* Seamless Infinite Auto Scroll */}
        <div className="relative overflow-hidden mt-12">
          
          <div className="flex gap-6 animate-scroll">
            {loopSkills.map((skill, i) => (
              <div
                key={i}
                className="
                  min-w-[120px] h-[130px]
                  flex flex-col items-center justify-center
                  rounded-2xl border
                  bg-gray-100 dark:bg-gray-800
                  border-gray-300 dark:border-gray-700
                  shadow-sm
                "
              >
                <div className="text-4xl">{skill.icon}</div>
                <div className="mt-2 text-sm font-medium text-gray-800 dark:text-gray-100">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
