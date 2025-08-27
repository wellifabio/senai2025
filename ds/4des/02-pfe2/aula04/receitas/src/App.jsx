import { useEffect, useState } from 'react';
import './App.css';


function Modal({ receita, onClose }) {
  if (!receita) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>{receita.titulo}</h2>
        <h3>Ingredientes:</h3>
        <ul>
          {receita.ingredientes.map((ingrediente, idx) => (
            <li key={idx}>{ingrediente}</li>
          ))}
        </ul>
        <h3>Modo de Preparo:</h3>
        <p>{receita.modoPreparo}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

function App() {
  const [receitas, setReceitas] = useState([]);
  const [modalReceita, setModalReceita] = useState(null);

  useEffect(() => {
    // Obtendo os dados de uma API simulada
    const fetchData = async () => {
      const response = await fetch('/mockups/receitas.json');
      const data = await response.json();
      setReceitas(data.receitas);
    };
    fetchData();
  }, []);

  return (
    <>
      <header><h1>Receitas</h1></header>
      <main className="card-container">
        {receitas.map((receita) => (
          <div className="card" key={receita.id}>
            <h2>{receita.titulo}</h2>
            <h3>Ilustração:</h3>
            <img src={receita.imagem} alt={receita.titulo} />
            <button onClick={() => setModalReceita(receita)}>Ver Receita</button>
          </div>
        ))}
      </main>
      <footer>
        <p>Receitas do Fessor &copy; 2025</p>
      </footer>
      <Modal receita={modalReceita} onClose={() => setModalReceita(null)} />
    </>
  );
}

export default App;