import {useState} from 'react';

export default function EvaluationSection({stats, evaluations, onAddEvaluation}) {
  const [score, setScore] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    onAddEvaluation(Number(score), comment);
    setComment('');
  };

  return (
    <section className="secao-button" id="avaliacao">
      <div className="avaliacao-wrapper">
        <h2>Avaliações do Protótipo</h2>
        
        {/* Painel de Estatísticas usando Math */}

        <div className="stats-linha">
          <div className="stat-item">
            <div className="stat-numero">{stats.average} <span>/ 5</span></div>
            <div className="stat-descricao">Média Acadêmica</div>
          </div>
          <div className="stat-item">
            <div className="stat-numero">{stats.total}</div>
            <div className="stat-descricao">Avaliações Registradas</div>
          </div>
        </div>

        {/* Formulário de submissão com LocalStorage */}

        <form onSubmit={handleSubmit} className="form-avaliacao">
          <h3>Deixe sua nota para o protótipo:</h3>
          <div className="inputs-group">
            <select value={score} onChange={(e) => setScore(e.target.value)}>
              <option value="5">5 estrelas - Excelente</option>
              <option value="4">4 estrelas - Muito Bom</option>
              <option value="3">3 estrelas - Regular</option>
              <option value="2">2 estrelas - Precisa melhorar</option>
              <option value="1">1 estrela - Insuficiente</option>
            </select>
            <input 
              type="text" 
              placeholder="O que achou do projeto?" 
              value={comment} 
              onChange={(e) => setComment(e.target.value)} 
            />
            <button type="submit" className="botao-avaliacao">Enviar Avaliação</button>
          </div>
        </form>

        {/* Lista de histórico mantida via localStorage */}

        <div className="lista-avaliacoes">
          {evaluations.map((item) => (
            <div key={item.id} className="card-avaliacao">
              <strong>Nota: {item.score}/5</strong>
              <p>{item.comment}</p>
              <small>{item.date}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}