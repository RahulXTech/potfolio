import ProjectCard from "./ProjectCard";

export default function Projects({ darkMode }) {
  return (
    <section id="projects">
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-1 text-sm rounded-full bg-black text-white mb-4">
          My Projects
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Check out my latest work
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard
          darkMode={darkMode}
          title="FarmRoot"
          description="Organic food delivery platform with optimized performance."
          tech={["React", "Tailwind", "Vite"]}
        />
        <ProjectCard
          darkMode={darkMode}
          title="Gemini AI Chat"
          description="AI chatbot interface with high Lighthouse score."
          tech={["React", "Gemini API", "Tailwind"]}
        />
      </div>
    </section>
  );
}