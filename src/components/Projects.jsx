// src/components/Projects.jsx
const projects = [
  {
    title: 'Portfolio Personnel',
    tech: 'React · CSS',
    desc: 'Un site portfolio moderne pour présenter mes compétences et projets.',
    link: '#',
  },
   {
    title: 'Landing Page',
    tech: 'HTML · CSS',
    desc: 'Page de présentation responsive pour un faux produit SaaS.',
    link: '#',
  },
  {
    title: 'Todo App',
    tech: 'JavaScript · LocalStorage',
    desc: 'Application de gestion de tâches avec sauvegarde dans le navigateur.',
    link: '#',
  },
  {
    title: 'Landing Page',
    tech: 'HTML · CSS',
    desc: 'Page de présentation responsive pour un faux produit SaaS.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projets</h2>
      <p className="projects-subtitle">
        Quelques exemples de ce que j&apos;ai pu réaliser 💻
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="project-tech">{project.tech}</p>
            <p className="project-desc">{project.desc}</p>
            <a href={project.link} className="project-link">
              Voir le projet
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
