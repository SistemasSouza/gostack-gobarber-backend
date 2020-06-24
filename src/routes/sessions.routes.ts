import { Router } from 'express';

import AutheticateUserService from '../services/AutheticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {

    const { email, password } = request.body;

    const autheticateUser = new AutheticateUserService();

    const { user, token } = await autheticateUser.execute({
      email,
      password
    });

    delete user.password;

    return response.json({ user, token });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
