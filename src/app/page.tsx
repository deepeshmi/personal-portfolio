export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Hi, I'm <span className="text-blue-600">Deepesh Mishra</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          A passionate web developer who loves building modern and fast websites using Next.js.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">About Me</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto text-center">
            I'm a web developer focused on building clean, fast, and user-friendly websites. 
            I enjoy working with modern technologies like Next.js, React, and Tailwind CSS.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript", "Git"].map((skill) => (
            <div
              key={skill}
              className="bg-white border border-gray-200 rounded-xl py-6 px-4 shadow-sm hover:shadow-md transition"
            >
              <p className="font-medium text-gray-800">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to work together?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}