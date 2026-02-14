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
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="25">Art</option>
          <option value="18">Computers</option>
          <option value="21">Sports</option>
        </select>
      </label>
      <label>
        Difficulty:
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}>
          <option value="">Any</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>

      <button type="submit">Start Game</button>
    </form>
  );
}
