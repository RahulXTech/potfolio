import { useState } from "react";
import Container from "./components/layout/Container";
import ThemeToggle from "./components/layout/ThemeToggle";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import BottomNav from "./components/BottomNav";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"} transition-colors duration-500 min-h-screen font-['Inter']`}>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <Container>
        <Header darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Experience />
        <Education />
      </Container>

      <BottomNav darkMode={darkMode} />
    </div>
  );
}