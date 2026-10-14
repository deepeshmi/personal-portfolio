export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A modern portfolio website built with Next.js and Tailwind CSS.",
      tech: "Next.js, Tailwind CSS",
    },
    {
      title: "Blog Website",
      description: "A clean blog platform with markdown support.",
      tech: "Next.js, MDX",
    },
    {
      title: "E-commerce Store",
      description: "A simple online store with product listings and cart.",
      tech: "Next.js, Stripe",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-10">Projects</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <p className="text-sm text-blue-600 font-medium">{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}