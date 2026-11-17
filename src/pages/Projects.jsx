import { useEffect, useState } from "react";
import SectionTitle from "../componentes/SectionTitle";
import ProjectCard from "../componentes/ProjectCard";

const GITHUB_USER = "ignas11";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();

    async function loadProjects() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
          { signal: controller.signal },
        );
        if (!response.ok) throw new Error("No se pudieron cargar los repositorios.");

        const repositories = await response.json();
        setProjects(repositories.filter((repository) => !repository.fork).map((repository, index) => ({
          id: index + 1,
          type: repository.language || "Proyecto web",
          name: repository.name.replaceAll("-", " "),
          description: repository.description || "Proyecto disponible en GitHub.",
          details: repository.description || "Proyecto disponible en GitHub.",
          link: repository.html_url,
          updatedAt: repository.pushed_at,
        })));
        setStatus("success");
      } catch (error) {
        if (error.name !== "AbortError") setStatus("error");
      }
    }

    loadProjects();
    return () => controller.abort();
  }, []);

  return <section className="page">
    <SectionTitle eyebrow="PROYECTOS" title="Mis repositorios." description="Los proyectos publicados en GitHub aparecen aquí automáticamente, ordenados por su última actualización." />
    {status === "loading" && <p className="projects-message">Cargando repositorios...</p>}
    {status === "error" && <p className="projects-message">No se pudieron cargar los repositorios ahora. Intenta nuevamente más tarde.</p>}
    {status === "success" && projects.length === 0 && <p className="projects-message">Todavía no hay repositorios públicos para mostrar.</p>}
    {projects.length > 0 && <div className="projects-grid">{projects.map((project) => <ProjectCard key={project.link} project={project} />)}</div>}
  </section>;
}

export default Projects;
