export default function Uses() {
  return (
    <section className="secao-usos" id="usos">
      <div className="secao-titulo">
        <span className="label">Casos de uso</span>
        <h2>Para estudar. Para conectar. Para criar.</h2>
        <p>CamFocus foi projetada para dois universos que se complementam: o acadêmico e o social.</p>
      </div>

      <div className="usos-conteudo">
        <article className="uso-bloco">
          <div className="uso-icone"></div>
          <h3>Estudo e Pesquisa</h3>
          <p>Do quadro da sala ao experimento de laboratório — nenhuma informação se perde por culpa da câmera.</p>
          <ul className="uso-lista">
            <li>Fotografe quadros com nitidez total, mesmo de longe</li>
            <li>Digitalize livros e provas com correção automática de perspectiva</li>
            <li>Registre experimentos com zoom óptico real</li>
            <li>Faça anotações visuais em ambientes com pouca luz</li>
          </ul>
        </article>

        <article className="uso-bloco">
          <div className="uso-icone"></div>
          <h3>Vida Social</h3>
          <p>A vida de estudante é feita de conexões e memórias. CamFocus eleva cada registro a um novo patamar.</p>
          <ul className="uso-lista">
            <li>Câmera frontal HD para videochamadas e conteúdo de qualidade</li>
            <li>Retratos naturais com desfoque de fundo por IA</li>
            <li>Capturas noturnas sem granulação excessiva</li>
            <li>Vídeo estabilizado para reels e apresentações criativas</li>
          </ul>
        </article>
      </div>
    </section>
  );
}