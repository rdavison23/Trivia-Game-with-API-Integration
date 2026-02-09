import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/trivia/questions', async (req, res) => {
  try {
    const { amount = 10, category, difficulty, type } = req.query;

    const params = new URLSearchParams();
    params.append('amount', amount);
    if (category) params.append('category', category);
    if (difficulty) params.append('difficulty', difficulty);
    if (type) params.append('type', type);

    const apiUrl = `https://opentdb.com/api.php?${params.toString()}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.response_code !== 0) {
      return res.status(500).json({
        error: 'Trivia API returned an error',
        response_code: data.response_code,
      });
    }

    return res.json(data.results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error fetching trivia questions' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend is listening on port ${PORT}`);
});
