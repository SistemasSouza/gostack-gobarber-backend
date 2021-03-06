import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateAvatarUserService from '@modules/users/services/UpdateAvatarUserService';

export default class UsersController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateAvatarUserService = container.resolve(UpdateAvatarUserService);

    const user = await updateAvatarUserService.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  }
}
