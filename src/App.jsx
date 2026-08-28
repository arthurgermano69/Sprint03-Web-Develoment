import {useState} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Features from './components/Features';
import EvaluationSection from './components/EvaluationSection';
import Uses from './components/Uses';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  
  // Inicializa o estado lendo o localStorage apenas 1 vez no carregamento inicial
  
  const [evaluations, setEvaluations] = useState(() => {
    const saved = localStorage.getItem('jovi_evaluations');
    return saved ? JSON.parse(saved) : [];
  });

  // Estado derivado: calcula as estatísticas automaticamente sempre que "evaluations" muda
  
  const stats = {
    average: evaluations.length
      ? Math.round((evaluations.reduce((acc, curr) => acc + curr.score, 0) / evaluations.length) * 10) / 10
      : 0,
    total: evaluations.length,
  };

  const handleAddEvaluation = (score, comment) => {
    const newEval = {
      id: Math.floor(Math.random() * 10000),
      score: Math.min(Math.max(score, 1), 5),
      comment,
      date: new Date().toLocaleDateString('pt-BR'),
    };

    const updated = [newEval, ...evaluations];
    setEvaluations(updated);
    localStorage.setItem('jovi_evaluations', JSON.stringify(updated));
  };

  return (
    <div className="app-container">
      <Header/>
      <main>
        <Hero/>
        <Problems/>
        <Features/>
        <EvaluationSection 
          stats={stats} 
          evaluations={evaluations} 
          onAddEvaluation={handleAddEvaluation} 
        />
        <Uses/>
      </main>
      <Footer/>
    </div>
  );
}