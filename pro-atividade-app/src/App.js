import './App.css';

function App() {

  const atividade = [
    {
      "id": 1,
      "descricao": "Primeira atividade"
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>{atividade[0].id} - {atividade[0].descricao}</li>
          <li onClick={() => console.log('JSX')}>Teste 2</li>
          <li>Teste 3</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
