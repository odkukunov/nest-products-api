import { authMiddleware } from './auth.middleware';

describe('AuthMiddleware', () => {
  it('should be defined', () => {
    expect(authMiddleware).toBeDefined();
  });
});
