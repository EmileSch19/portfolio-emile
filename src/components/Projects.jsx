// src/components/Projects.jsx
const projects = [
  {
    title: 'Portfolio Personnel',
    tech: 'React · CSS',
    desc: 'Un site portfolio moderne pour présenter mes compétences et projets.',
    link: 'https://emilesch19.github.io/portfolio-emile/',
  },
   {
    title: 'Travel Ventures',
    tech: 'React · CSS',
    desc: "Site React mettant en avant des paysages du monde.",
    link: 'https://emilesch19.github.io/Travel_Ventures/',
  },
   {
    title: 'Hope Connect',
    tech: 'HTML · CSS',
    desc: 'Page de présentation responsive pour un faux produit SaaS.',
    link: 'https://emilesch19.github.io/sans_habris/',
  },
  {
    title: 'Todo App',
    tech: 'JavaScript · LocalStorage',
    desc: 'Application de gestion de tâches avec sauvegarde dans le navigateur.',
    link: 'https://emilesch19.github.io/ToDoLisit/',
  },
 {
  title: 'Gestion des employés',
  tech: 'Django · Python · SQLite',
  desc: 'Application de gestion des employés (CRUD : ajout, modification, édition, suppression) avec interface moderne.',
  link: 'https://github.com/EmileSch19/django-gestion-employes',
},
{
    title: 'Discover',
    tech: 'HTML · CSS',
    desc: "Site présentant une interface de destination pour les vacances.",
    link: 'https://discover-jet.vercel.app/',
  }
/*{
  title:
  tech:
  desc:
  link:
}*/
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
