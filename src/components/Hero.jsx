export default function Hero() {
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
    <section className="hero">
      <div className="hero-conteudo">
        <div className="hero-texto">
          <span className="hero-tag">Protótipo Jovi · Câmera Inteligente Académica</span>
          <h1>A câmera que <em>estudantes</em> merecem.</h1>
          <p>
            Qualidade profissional de imagem para anotações, apresentações e conexões sociais direto no seu celular.
          </p>
          <div className="hero-botoes">
            <a 
              href="#funcionalidades" 
              className="btn-principal"
              onClick={(e) => handleClick(e, 'funcionalidades')}
            >
              Ver funcionalidades
            </a>
            <a 
              href="#usos" 
              className="btn-secundario"
              onClick={(e) => handleClick(e, 'usos')}
            >
              Casos de uso
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}