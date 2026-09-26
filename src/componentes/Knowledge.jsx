
import "../css/Knowledge.css";

function Knowledge({ conocimientos }) {
  return (
    <section className="knowledge">
      <h2>Conocimientos</h2>
      <ul>
        {conocimientos.map((conocimiento) => (
          <li key={conocimiento}>{conocimiento}</li>
        ))}
      </ul>
    </section>
  )
}

export default Knowledge
