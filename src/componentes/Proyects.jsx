import "../css/Projects.css";

function Projects({ titulo, descripcion, enlace }) {
  return (
    <article className="project-card">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <a href={enlace} target="_blank">
        Ver repositorio
      </a>
    </article>
  );
}

export default Projects;
