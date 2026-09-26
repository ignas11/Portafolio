import "../css/Hero.css";

function Hero({ nombre, profesion, descripcion }) {
  return (
    <section className="hero">
      <h1>Hola, soy {nombre}</h1>
      <h2>{profesion}</h2>
      <p>{descripcion}</p>
    </section>
  );
}

export default Hero;
