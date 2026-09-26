import "../css/Footer.css";

function Footer({ email }) {
  return (
    <footer className="footer">
      <a href={`mailto:${email}`}>{email}</a>
      <p>Portfolio de Ignacio Gonzalez Dupuy</p>
    </footer>
  );
}

export default Footer;
