import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="fixed top-5 right-6 z-50">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`${darkMode ? "bg-gray-800 text-yellow-400" : "bg-white text-gray-700"} shadow-md border px-3 py-2 rounded-full`}
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  );
}