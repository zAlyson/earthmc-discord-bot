import { CacheType, ModalSubmitInteraction } from 'discord.js';
import { inject, injectable } from 'inversify';
import { UserSyncService } from '../services/UserSyncService';
import { IListener } from '../types/interfaces/IListener';

@injectable()
class ModalSubmitListener implements IListener {
  constructor(
    @inject(UserSyncService) private userSyncService: UserSyncService,
  ) {}

  async listener(interaction: ModalSubmitInteraction<CacheType>) {
    const { customId } = interaction;

    if (customId !== 'verificationModal') return;

    this.userSyncService.sync(interaction);
  }
}

export { ModalSubmitListener };
