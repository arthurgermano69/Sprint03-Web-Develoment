export default function Header() {
  const smoothScrollTo = (targetId, duration = 1000) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const headerOffset = 80;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const easeInOutCubic = (t) => 
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleClick = (e, targetId) => {
    e.preventDefault();
    smoothScrollTo(targetId);
  };

  return (
    <header>
      <nav>
        <div className="logo">Jovi<span>Vision</span></div>
        <ul className="nav-links">
          <li>
            <a href="#problema" onClick={(e) => handleClick(e, 'problema')}>
              O Problema
            </a>
          </li>
          <li>
            <a href="#funcionalidades" onClick={(e) => handleClick(e, 'funcionalidades')}>
              Funcionalidades
            </a>
          </li>
          <li>
            <a href="#usos" onClick={(e) => handleClick(e, 'usos')}>
              Aplicações
            </a>
          </li>
        </ul>
        <a href="#avaliacao" className="btn-nav" onClick={(e) => handleClick(e, 'avaliacao')}>
          Avaliar
        </a>
      </nav>
    </header>
  );
}