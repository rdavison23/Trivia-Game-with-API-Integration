import { useState } from 'react';
import GameSetup from './GameSetup';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const startGame = async ({ amount, category, difficulty }) => {
    const params = new URLSearchParams();
    params.append('amount', amount);
    params.append('category', category);
    if (difficulty) params.append('difficulty', difficulty);

    const response = await fetch(
      `http://localhost:3000/trivia/questions?${params.toString()}`
    );
    const data = await response.json();

    setQuestions(data);
    setIndex(0);
    setScore(0);
  };

  const handleAnswer = (answer) => {
    const correct = questions[index].correct_answer;
    const isCorrect = answer === correct;

    const newScore = isCorrect ? score + 1 : score;
    setScore(newScore);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      alert(`Game Over! Score: ${newScore}`);
      setQuestions([]);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="app-container">
        <h1 className="title">Trivia Game</h1>
        <div className="card">
          <GameSetup onStart={startGame} />
        </div>
      </div>
    );
  }

  const q = questions[index];
  const answers = [q.correct_answer, ...q.incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div className="app-container">
      <h1 className="title">Trivia Game</h1>

      <div className="card question-card">
        <h2 dangerouslySetInnerHTML={{ __html: q.question }} />

        <div className="answers">
          {answers.map((a, i) => (
            <button
              key={i}
              className="answer-btn"
              onClick={() => handleAnswer(a)}
              dangerouslySetInnerHTML={{ __html: a }}
            />
          ))}
        </div>

        <p className="progress">
          Question {index + 1} / {questions.length}
        </p>
      </div>
    </div>
  );
}

export default App;
