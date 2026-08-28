export default function Features() {
  return (
    <section className="secao-funcionalidades" id="funcionalidades">
      <div className="secao-titulo">
        <span className="label">Solução JoviVisionCore</span>
        <h2>Tecnologia pensada para melhoria acadêmica.</h2>
      </div>

      <div className="funcionalidades-conteudo">
        <div className="lista-funcionalidades">
          <div className="funcionalidade-item slide-ativo">
            <div className="numero">01</div>
            <div>
              <h4>Modo Documento Inteligente</h4>
              <p>Reconhece quadros e folhas automaticamente, ajusta perspectiva e entrega imagem plana e legível sem edição manual.</p>
            </div>
          </div>
          <div className="funcionalidade-item">
            <div className="numero">02</div>
            <div>
              <h4>IA de Foco em Texto</h4>
              <p>Algoritmo que prioriza nitidez em caracteres escritos, garantindo que cada letra fique legível mesmo em fotos rápidas.</p>
            </div>
          </div>
          <div className="funcionalidade-item">
            <div className="numero">03</div>
            <div>
              <h4>Zoom Melhorado</h4>
              <p>Aproximação real aprimorada com IA. Detalhes de quadros distantes permanecem nítidos.</p>
            </div>
          </div>
        </div>

        <aside className="card-specs">
          <h3>Visualizações do protótipo</h3>
          <div className="celular">
            <div className="celular-topo">
              <span>09:41</span>
              <span>100%</span>
            </div>
            <div className="viewfinder">
              <div className="foco"></div>
            </div>
            <div className="celular-base">
              <div className="icone-cam"></div>
              <button className="botao-foto" aria-label="Tirar foto"></button>
              <div className="icone-cam"></div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}