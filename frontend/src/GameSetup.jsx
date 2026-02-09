import { useState } from 'react';

export default function GameSetup({ onStart }) {
  const [amount, setAmount] = useState(10);
  const [category, setCategory] = useState(25);
  const [difficulty, setDifficulty] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onStart({ amount, category, difficulty });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Start Trivia Game</h2>

      <label>
        Number of Questions:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
    </form>
  );
}
