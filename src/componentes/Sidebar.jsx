import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span>IG</span>
        <div>
          <strong>Ignacio González</strong>
          <small>Desarrollador en formación</small>
        </div>
      </div>

      <nav aria-label="Navegación principal">
        <NavLink to="/" end className="nav-link">
          <span aria-hidden="true">⌂</span>
          Inicio
        </NavLink>

        <NavLink to="/about" className="nav-link">
          <span aria-hidden="true">●</span>
          Sobre mí
        </NavLink>

        <NavLink to="/skills" className="nav-link">
          <span aria-hidden="true">✦</span>
          Habilidades
        </NavLink>

        <NavLink to="/projects" className="nav-link">
          <span aria-hidden="true">▣</span>
          Proyectos
        </NavLink>

        <NavLink to="/contact" className="nav-link">
          <span aria-hidden="true">✉</span>
          Contacto
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
