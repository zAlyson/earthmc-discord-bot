import { UserCreationResult } from '../../types/UserCreationResult';
import { UserRequest } from '../../types/UserRequest';

import prismaClient from '../prisma';

export class CreateUserService {
  async execute({
    userId,
    playerName,
  }: UserRequest): Promise<UserCreationResult> {
    const user = await prismaClient.user.findFirst({
      where: {
        user_id: userId,
      },
    });

    if (user) return 'already exists';

    await prismaClient.user.create({
      data: {
        user_id: userId,
        player_name: playerName,
      },
    });

    return 'success';
  }
}
