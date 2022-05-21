import prismaClient from '../prisma';

import { UserRequest } from '../../types/UserRequest';

export class DeleteUserService {
  async deleteUser({ userId }: UserRequest): Promise<void> {
    await prismaClient.user.delete({
      where: {
        user_id: userId,
      },
    });
  }
}
