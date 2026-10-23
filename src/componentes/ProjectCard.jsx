import { useState } from "react";
function ProjectCard({ project }) { const [expanded, setExpanded] = useState(false); 
    return <article className="project-card">
        <div className="project-number">0{project.id}</div>
        <p>{project.type}</p>
        <h2>{project.name}</h2>
        <p className="project-description">{expanded ? project.details : project.description}</p>
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
