export default function About({ darkMode }) {
  return (
    <section id="about" className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold">About</h2>
      <p className={`${darkMode ? "text-gray-400" : "text-gray-700"}`}>
        Performance-driven MERN Stack Developer with strong problem-solving skills
        and experience building scalable, responsive web applications using
        React.js, Node.js, and MongoDB.
      </p>
    </section>
  );
}


