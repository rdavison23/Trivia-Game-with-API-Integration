import server from './server.js';
import supertest from 'supertest';

const requestWithSupertest = supertest(server);

describe('Game Endpoints', () => {
  it('GET /trivia/questions should show questions', async () => {
    expect(true).toBeFalsy();
  });
});
