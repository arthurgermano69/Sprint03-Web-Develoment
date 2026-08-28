export default function Footer() {
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
    <footer>
      <div className="footer-conteudo">
        <div className="footer-marca">
          <div className="logo">Jovi<span>Vision</span></div>
          <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '13px', marginTop: '12px', maxWidth: '280px' }}>
            Soluções inteligentes de imagem acadêmica desenvolvidas para transformar o estudo de estudantes.
          </p>
        </div>

        <div className="footer-coluna">
          <h5>Produto</h5>
          <ul>
            <li>
              <a href="#funcionalidades" onClick={(e) => handleClick(e, 'funcionalidades')}>
                Funcionalidades
              </a>
            </li>
            <li>
              <a href="#usos" onClick={(e) => handleClick(e, 'usos')}>
                Casos de Uso
              </a>
            </li>
            <li>
              <a href="#problema" onClick={(e) => handleClick(e, 'problema')}>
                O Problema
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-coluna">
          <h5>Câmera</h5>
          <ul>
            <li>
              <a href="#funcionalidades" onClick={(e) => handleClick(e, 'funcionalidades')}>
                Sensor Principal
              </a>
            </li>
            <li>
              <a href="#funcionalidades" onClick={(e) => handleClick(e, 'funcionalidades')}>
                IA e Processamento
              </a>
            </li>
            <li>
              <a href="#funcionalidades" onClick={(e) => handleClick(e, 'funcionalidades')}>
                Câmera Frontal
              </a>
            </li>
            <li>
              <a href="#funcionalidades" onClick={(e) => handleClick(e, 'funcionalidades')}>
                Modos Especiais
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-coluna">
          <h5>Projeto</h5>
          <ul>
            <li>
              <a href="#problema" onClick={(e) => handleClick(e, 'problema')}>
                Pesquisa
              </a>
            </li>
            <li>
              <a href="#avaliacao" onClick={(e) => handleClick(e, 'avaliacao')}>
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-rodape">
        <p style={{fontSize: '12px', color: 'rgba(255, 255, 255, 0.4)'}}>
          © {new Date().getFullYear()} Jovi Vision. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}