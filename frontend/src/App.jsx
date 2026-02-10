import { useState } from 'react';
import GameSetup from './GameSetup';

function App() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

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
    setIndex(0);
    setScore(0);
  };

  const handleAnswer = (answer) => {
    const correct = questions[index].correctAnswer;

    if (answer === correct) {
      setScore(score + 1);
    }
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      alert(` ${score + (answer === correct ? 1 : 0)}`);
      setQuestions([]);
    }
  };
  if (questions.length === 0) {
    return (
      <div className="app-container">
        {' '}
        <h1 className="title">Trivia Game</h1>{' '}
        <div className="card">
          {' '}
          <GameSetup onStart={startGame} />{' '}
        </div>{' '}
      </div>
    );
  }

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
