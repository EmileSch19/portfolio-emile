// src/components/Skills.jsx

const skills = [
  { name: 'HTML5', icon: 'fa-brands fa-html5' },
  { name: 'CSS3', icon: 'fa-brands fa-css3-alt' },
  { name: 'JavaScript', icon: 'fa-brands fa-js' },
  { name: 'React', icon: 'fa-brands fa-react' },
  { name: 'Node.js', icon: 'fa-brands fa-node-js' },
  {name: 'Next.js', icon: 'fa-brands fa-next-js'},
  { name: 'MySQL', icon: 'fa-solid fa-database' },
  { name: 'Git', icon: 'fa-brands fa-git-alt' },
  { name: 'GitHub', icon: 'fa-brands fa-github' },
  { name: 'Trello', icon: 'fa-brands fa-trello' },
  { name: 'Scrum', icon: 'fa-solid fa-people-group' },
];

export default function Skills() {
  return (
    <section id="skills">
      <h2>Compétences</h2>
      <p className="skills-subtitle">
        Les technologies et outils que j&apos;utilise au quotidien ⚙️
      </p>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <i className={skill.icon}></i>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
