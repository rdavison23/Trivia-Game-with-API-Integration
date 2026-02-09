import { useState } from 'react';

export default function GameSetup({ onStart }) {
  const [amount, setAmount] = useState(10);
  const [category, setCategory] = useState(25);
  const [difficulty, setDifficulty] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onStart({ amount, category, difficulty });
  };
}
