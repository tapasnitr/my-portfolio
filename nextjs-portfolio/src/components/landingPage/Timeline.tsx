const Timeline = () => {
  const journey = [
    { year: "2019", text: "Started learning JavaScript" },
    { year: "2021", text: "Began MERN stack projects" },
    { year: "2023", text: "Full-time freelance developer" },
    { year: "2023", text: "Full-time freelance lead developer" },
    { year: "2024", text: "Current role: Lead developer" },
  ];

  return (
    <section id="journey" className="px-8 py-16">
      <h2 className="text-3xl font-bold mb-8">My Tech Journey</h2>
      <div className="flex gap-8 overflow-x-auto pb-4">
        {journey.map((item) => (
          <div key={item.year} className="flex flex-col items-center">
            <div className="w-3 h-3 bg-blue-600 rounded-full mb-2"></div>
            <span className="font-bold">{item.year}</span>
            <p className="text-gray-600 text-sm text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
