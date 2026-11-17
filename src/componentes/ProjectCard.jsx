import { useState } from "react";
function ProjectCard({ project }) { const [expanded, setExpanded] = useState(false);
    const updatedDate = project.updatedAt && new Intl.DateTimeFormat("es-AR", { dateStyle: "medium" }).format(new Date(project.updatedAt));
    return <article className="project-card">
        <div className="project-number">{String(project.id).padStart(2, "0")}</div>
        <p>{project.type}</p>
        <h2>{project.name}</h2>
        <p className="project-description">{expanded ? project.details : project.description}</p>
        {updatedDate && <small className="project-date">Actualizado: {updatedDate}</small>}
        <div className="card-actions">
            <button onClick={() => setExpanded(!expanded)}>
                {expanded ? "Ver menos" : "Conocer más"}
            </button>
            <a href={project.link} target="_blank" rel="noreferrer">
                Repositorio ↗
            </a>
        </div>
    </article>; }
export default ProjectCard;
