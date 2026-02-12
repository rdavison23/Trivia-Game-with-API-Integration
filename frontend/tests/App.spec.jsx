import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import App from '../src/App';

test('renders game', async () => {
  expect(true).toBe(true);
  const { getByText, getByRole } = await render(<App name="Vitest" />);

  await expect.element(getByText('Start Trivia Game')).toBeInTheDocument();
  await expect.element(getByText('Start Game')).toBeInTheDocument();

  //await getByRole('button', { name: 'Increment '}).click()
});
