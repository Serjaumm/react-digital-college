export default function Header({ logo, melhorFruta }) {
  return (
    <nav>
      <h1>{logo}</h1>
      <ul>
        <li>
          <a href="">início</a>
        </li>
        <li>
          <a href="">Quem Somos</a>
        </li>
        <li>
          <a href="">Investimentos</a>
        </li>
        <li>
          <a href="">Contato</a>
        </li>
        <li>
          <a href="">{melhorFruta}</a>
        </li>
      </ul>
    </nav>
  );
}
