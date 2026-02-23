import { Github, Globe } from "lucide-react";

export default function ProjectCard({ darkMode, title, description, tech }) {
  return (
    <div className={`${darkMode ? "bg-gray-900 border-gray-800" : "bg-white"} border rounded-2xl p-5 shadow-sm`}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <p className="text-sm opacity-80 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span key={index} className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <button className="flex items-center gap-1 text-sm bg-black text-white px-3 py-1 rounded">
          <Globe size={14}/> Website
        </button>
        <button className="flex items-center gap-1 text-sm border px-3 py-1 rounded">
          <Github size={14}/> Source
        </button>
      </div>
    </div>
  );
}