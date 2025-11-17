const Skills = () => {
  const skills = [
    { name: "MongoDB", level: "w-4/5" },
    { name: "Express.js", level: "w-3/5" },
    { name: "React.js", level: "w-4/5" },
    { name: "Node.js", level: "w-4/5" },
  ];

  return (
    <section id="skills" className="px-8 py-16 bg-blue-600 text-white">
      <h2 className="text-3xl font-bold mb-6">MERN Stack</h2>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between">
              <span>{skill.name}</span>
            </div>
            <div className="w-full bg-blue-300 h-2 rounded-lg">
              <div
                className={`h-2 rounded-lg bg-white ${skill.level}`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
