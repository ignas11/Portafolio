import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import Footer from "./componentes/Footer";
import Projects from "./componentes/Proyects";
import Me from "./componentes/Me";
import Knowledge from "./componentes/Knowledge";
import "./css/App.css";

function App() {
  const persona = {
    nombre: "Ignacio",
    apellido: "Gonzalez Dupuy",
    edad: 23,
    profesion: "Estudiante",
    carrera: "Programacion",
    ciudad: "Carlos Paz",
    email: "nachogonzadup@gmail.com",
    intereses: ["Programacion", "Deportes", "Musica", "Viajes", "Videojuegos"],
    conocimientos: ["HTML", "CSS", "JavaScript", "React", "C#", "Node.js", "Git", "SQL"],
    descripcion:
      "Soy un estudiante de programacion apasionado por la tecnologia y el desarrollo de software.",
  };

  const proyectos = [
    {
      id: 1,
      nombre: "Mi Portafolio",
      descripcion: "Portfolio personal creado con React.",
      link: "https://github.com/ignas11/Mi-Portafolio",
    },
    {
      id: 2,
      nombre: "Coder House Messi",
      descripcion: "Proyecto realizado con HTML y CSS.",
      link: "https://github.com/ignas11/CoderHouse-Messi",
    },
    {
      id: 3,
      nombre: "JavaScripts Ignacio Gonzalez Dupuy",
      descripcion: "Proyecto para practicar JavaScript.",
      link: "https://github.com/ignas11/JavaScripts-Inacio-Gonzalez-Dupuy",
    },
  ];

  const cursos = [
    {
      id: 1,
      nombre: "HTML y CSS",
      plataforma: "Coder House",
    },
    {
      id: 2,
      nombre: "JavaScript",
      plataforma: "Coder House",
    },
    {
      id: 3,
      nombre: "JavaScript React",
      plataforma: "Rolling Code",
    },
  ];

  return (
    <div className="app">
      <Header
        nombre={persona.nombre}
        apellido={persona.apellido}
      />

      <Hero
        nombre={persona.nombre}
        profesion={persona.profesion}
        descripcion={persona.descripcion}
      />

      <Me
        nombre={persona.nombre}
        apellido={persona.apellido}
        edad={persona.edad}
        carrera={persona.carrera}
        ciudad={persona.ciudad}
        intereses={persona.intereses}
        infoExtra={persona.descripcion}
      />

      <Knowledge conocimientos={persona.conocimientos} />

      <section className="projects-section">
        <h2>Mis proyectos</h2>

        {proyectos.map((proyecto) => (
          <Projects
            key={proyecto.id}
            titulo={proyecto.nombre}
            descripcion={proyecto.descripcion}
            enlace={proyecto.link}
          />
        ))}
      </section>

      <section className="courses-section">
        <h2>Mis cursos</h2>

        {cursos.map((curso) => (
          <article className="course-card" key={curso.id}>
            <h3>{curso.nombre}</h3>
            <p>{curso.plataforma}</p>
          </article>
        ))}
      </section>

      <Footer email={persona.email} />
    </div>
  );
}

export default App;
