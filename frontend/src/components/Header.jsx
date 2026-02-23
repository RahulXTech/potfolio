import { Mail } from "lucide-react";
import profile from "../assets/Profile.png";

export default function Header({ darkMode }) {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Hi, I'm Rahul
        </h1>

        <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} mt-3 text-base`}>
          Building scalable full-stack applications with modern UI and performant backend systems.
        </p>

        <div className="flex items-center gap-3 mt-6 text-sm">
          <Mail size={18} />
          <span>rahul.code2024@gmail.com</span>
        </div>
      </div>

      <img
        src={profile}
        alt="Rahul Kumar"
        className="w-40 h-40 rounded-full object-cover"
      />
    </section>
  );
}