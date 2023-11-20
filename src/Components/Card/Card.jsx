export default function Card({ name, children, email }) {
  return (
    <article className="card">
      <h2>{name}</h2>
      {children}
    </article>
  );
}
