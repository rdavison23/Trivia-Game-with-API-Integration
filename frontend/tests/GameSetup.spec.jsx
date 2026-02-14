import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import GameSetup from '../src/GameSetup';

test('renders game', async () => {
  const startGame = (function () {
    return false;
  })();
  expect(true).toBe(true);
  const { getByText, getByRole } = await render(
    <GameSetup onStart={startGame} />
  );

  await expect.element(getByText('Start Trivia Game')).toBeInTheDocument();
  await expect.element(getByText('Start Game')).toBeInTheDocument();
});
