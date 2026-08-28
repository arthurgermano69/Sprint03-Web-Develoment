export default function Footer() {
  return (
    <footer>
      <div className="footer-conteudo">
        <div className="footer-marca">
          <div className="logo">Jovi<span>Vision Core</span></div>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Protótipo desenvolvido para melhora cotidiana das câmeras para fins de uso acadêmico e social.
          </p>
        </div>

        <div className="footer-coluna">
          <h5>Produto</h5>
          <ul>
            <li><a href="#funcionalidades">Funcionalidades</a></li>
            <li><a href="#usos">Casos de Uso</a></li>
            <li><a href="#problema">O Problema</a></li>
          </ul>
        </div>

        <div className="footer-coluna">
          <h5>Câmera</h5>
          <ul>
            <li><a href="#">Sensor Principal</a></li>
            <li><a href="#">IA e Processamento</a></li>
            <li><a href="#">Câmera Frontal</a></li>
            <li><a href="#">Modos Especiais</a></li>
          </ul>
        </div>

        <div className="footer-coluna">
          <h5>Projeto</h5>
          <ul>
            <li><a href="#">Pesquisa</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-rodape">
        <p>© 2026 CamFocus · Protótipo de inovação</p>
        <p style={{ fontSize: '14px' }}>By: Inova X</p>
      </div>
    </footer>
  );
}