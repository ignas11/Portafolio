import "../css/Footer.css";

function Footer({ email }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <strong>Ignacio González Dupuy</strong>
        </div>
        <div className="footer-links">
          <a href={`mailto:${email}`}>Correo</a>
          <a href="https://github.com/ignas11" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      <div className="footer-legal">
        <span>© {year} Ignacio González Dupuy. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

export default Footer;
