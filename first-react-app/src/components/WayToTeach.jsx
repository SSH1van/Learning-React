export default function WayToTeach({ title, description }) {
  return (
    <ul>
      <li>
        <p>
          <strong>{title}</strong> {description}
        </p>
      </li>
    </ul>
  );
}
