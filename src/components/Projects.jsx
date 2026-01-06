// src/components/Projects.jsx
const projects = [
  {
    title: 'Discover',
    tech: 'HTML · CSS',
    desc: "Site présentant une interface de destination pour les vacances.",
    link: 'https://discover-jet.vercel.app/',
    image:'/images/Discover.png',
  },
  {
  title: 'Gestion des employés',
  tech: 'Django · Python · SQLite',
  desc: 'Application de gestion des employés (CRUD : ajout, modification, édition, suppression) avec interface moderne.',
  link: 'https://gestion-employes.vercel.app/',
  image:'/images/Gestion.png',
  },
   {
    title: 'Travel Ventures',
    tech: 'React · CSS',
    desc: "Site React mettant en avant des paysages du monde.",
    link: 'https://emilesch19.github.io/Travel_Ventures/',
    image:'/images/Travel.png',
  },
   {
    title: 'Hope Connect',
    tech: 'HTML · CSS',
    desc: 'Page de présentation responsive pour un faux produit SaaS.',
    link: 'https://emilesch19.github.io/sans_habris/',
    image:'/images/HopeConnect.png',
  },
  {
    title: 'Todo App',
    tech: 'JavaScript · LocalStorage',
    desc: 'Application de gestion de tâches avec sauvegarde dans le navigateur.',
    link: 'https://emilesch19.github.io/ToDoLisit/',
    image:'/images/ToDoList.png',
  },


/*{
  title:
  tech:
  desc:
  link:
  image:
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
            <div className="project-image">
    <img src={project.image} alt={project.title} />
      </div>
            <h3>{project.title}</h3>
            <p className="project-tech">{project.tech}</p>
            <p className="project-desc">{project.desc}</p>
            <a href={project.link} className="project-link" target="_blank"
  rel="noopener noreferrer" >
              Voir le projet
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
