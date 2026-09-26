import "../css/Header.css";

function Header({ nombre, apellido }) {
  return (
    <header className="header">
      <p>{nombre} {apellido}</p>
    </header>
  );
}

export default Header;
