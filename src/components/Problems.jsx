const problemList = [
  { title: "Fotos de quadro ilegíveis", desc: "A resolução insuficiente e o foco lento tornam impossível capturar anotações do quadro com clareza de leitura." },
  { title: "Baixo desempenho com pouca luz", desc: "Salas com iluminação irregular resultam em fotos granuladas que não servem para revisão posterior." },
  { title: "Digitalização de documentos precária", desc: "Fotografar livros e provas gera imagens distorcidas e com reflexo, comprometendo o estudo digital." },
  { title: "Câmera frontal inadequada", desc: "Videochamadas de estudo e apresentações remotas sofrem com qualidade de imagem abaixo do esperado." },
  { title: "Zoom que destrói o detalhe", desc: "Ampliar fórmulas ou experimentos em aula resulta em imagens pixeladas sem uso prático para revisão." },
  { title: "Cor e contraste inconsistentes", desc: "Gráficos e mapas conceituais perdem informação crítica quando fotografados com câmeras de baixo padrão." }
];

export default function Problems() {
  return (
    <section className="secao-problema" id="problema">
      <div className="secao-titulo">
        <span className="label">A dor identificada</span>
        <h2>Câmeras comuns falham onde estudantes mais precisam.</h2>
        <p>A Jovi identificou que os smartphones atuais não atendem às necessidades reais do dia a dia acadêmico.</p>
      </div>

      <div className="grade-cards">
        {problemList.map((item, index) => (
          <article className="card" key={index}>
            <div className="card-icone"></div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}