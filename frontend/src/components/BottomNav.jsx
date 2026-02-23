import { Home, User, Briefcase, Folder, GraduationCap } from "lucide-react";

export default function BottomNav({ darkMode }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className={`${darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"} border shadow-lg px-6 py-3 rounded-full flex items-center gap-5`}>
        <a href="#home"><Home size={18} /></a>
        <a href="#about"><User size={18} /></a>
        <a href="#skills"><Briefcase size={18} /></a>
        <a href="#projects"><Folder size={18} /></a>
        <a href="#education"><GraduationCap size={18} /></a>
      </div>
    </div>
  );
}