type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;   // live demo
  repo?: string;   // GitHub
  image?: string;  // optional image url
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "My personal site built with React + TypeScript. Responsive, with dark/light mode and a contact form.",
    tech: ["React", "TypeScript", "CSS"],
    repo: "https://github.com/aimanpashtun/my-portfolio",
    link: "#",
    image: "\Portfolio web.png" // Use this path
  },

  {
    title: "IVConnect",
    description: "An interactive website for IVC where students can connect as a communtiy built for the IVC Hackathon.",
    tech: ["JavaScript", "HTML" , "CSS"],
    repo: "https://github.com/aimanpashtun/IVConnect",
    image: "\IVConnect web .png"
  },
  {
    title: "MindMaze (WIP)",
    description: "Gamified mental health mini-app with journaling, breathing, and reading time.",
    tech: ["React", "TypeScript"],
    image: "https://placehold.co/600x400/png"
  }
];

const Projects = () => {
  return (
    <section id="projects" style={{ padding: "2rem 1rem" }}>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.title} className="card">
            {p.image && (
              <img
                src={p.image}
                alt={`${p.title} screenshot`}
                className="card-img"
              />
            )}
            <div className="card-body">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              {p.tech?.length > 0 && (
                <ul className="tech-list">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
              <div className="card-links">
                {p.link && <a href={p.link} target="_blank">Live</a>}
                {p.repo && <a href={p.repo} target="_blank">Code</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
