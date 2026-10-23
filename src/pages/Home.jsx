import Hero from "../componentes/Hero";
import SectionTitle from "../componentes/SectionTitle";
function Home() { return <section className="page home-page"><Hero nombre="Ignacio" profesion="Estudiante de Programación" /><SectionTitle eyebrow="BIENVENIDO" title="Construyo ideas con código." description="Soy Ignacio González Dupuy, estudiante de programación con interés en el desarrollo web y la creación de experiencias digitales claras y útiles." /><div className="intro-grid"><article><b>01</b><h2>Perfil</h2><p>En formación constante, combinando creatividad, lógica y curiosidad.</p></article><article><b>02</b><h2>En este sitio</h2><p>Conocé mis habilidades, proyectos y las formas de contactarme.</p></article></div></section>; }
export default Home;
