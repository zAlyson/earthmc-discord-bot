import { CreateUserService } from '../database/services/CreateUserService';
import { UserCreationResult } from '../types/UserCreationResult';

export class CreateUserController {
  service: CreateUserService = new CreateUserService();

  async handle(
    secretCode: string,
    nickname: string,
  ): Promise<UserCreationResult> {
    const creationResult = await this.service.execute({
      userId: secretCode,
      playerName: nickname,
    });

    if (creationResult !== 'success') return creationResult;

    // send to redis

    return 'success';
  }
}
