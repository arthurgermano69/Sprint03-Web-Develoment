export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">Jovi<span>Vision Core</span></div>
        <ul className="nav-links">
          <li><a href="#problema">O Problema</a></li>
          <li><a href="#funcionalidades">Funcionalidades</a></li>
          <li><a href="#usos">Usos</a></li>
        </ul>
        <a href="#funcionalidades" className="btn-nav">Ver protótipo</a>
      </nav>
    </header>
  );
}