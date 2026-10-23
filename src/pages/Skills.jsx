import SectionTitle from "../componentes/SectionTitle";
import SkillCard from "../componentes/SkillCard";
const skills = [{ name: "HTML", category: "Frontend" }, { name: "CSS", category: "Frontend" }, { name: "JavaScript", category: "Lenguaje" }, { name: "React", category: "Librería" }, { name: "Node.js", category: "Backend" }, { name: "C#", category: "Lenguaje" }, { name: "Git", category: "Herramienta" }, { name: "SQL", category: "Datos" }];
function Skills() { return <section className="page"><SectionTitle eyebrow="HABILIDADES" title="Tecnologías que utilizo." description="Herramientas y lenguajes que forman parte de mi aprendizaje y proyectos." /><div className="skills-grid">{skills.map((skill) => <SkillCard key={skill.name} {...skill} />)}</div></section>; }
export default Skills;
