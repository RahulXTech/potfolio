export default function Skills({ darkMode }) {
  const skills = [
    "JavaScript", "React.js", "Node.js", "Express.js",
    "MongoDB", "Tailwind CSS", "Redux Toolkit",
    "REST APIs", "JWT", "Git", "SQL", "C++"
  ];

  return (
    <section id="skills" className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold">Skills</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`${darkMode ? "bg-gray-800 text-white" : "bg-black text-white"} px-3 py-1.5 rounded-full text-xs`}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}