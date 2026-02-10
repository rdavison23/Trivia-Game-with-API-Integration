import { useState } from 'react';
import GameSetup from './GameSetup';

function App() {
  const [questions, setQuestions] = useState([]);

  const startGame = async ({ amount, category, difficulty }) => {
    const params = new URLSearchParams();
    params.append('amount', amount);
    params.append('category', category);
    if (difficulty) params.append('difficulty', difficulty);
    console.log(params.toString());

    const response = await fetch(
      `http://localhost:3000/trivia/questions?${params.toString()}`
    );
    const data = await response.json();

    setQuestions(data);
  };

  return (
    <div>
      <h1>Trivia Game</h1>

      {questions.length === 0 ? (
        <GameSetup onStart={startGame} />
      ) : (
        <pre>{JSON.stringify(questions, null, 2)}</pre>
      )}
    </div>
  );
}

export default App;
