import { CacheType, ModalSubmitInteraction } from 'discord.js';
import { inject, injectable } from 'inversify';
import { SecretCodesService } from './SecretCodesService';

@injectable()
class UserSyncService {
  constructor(
    @inject(SecretCodesService)
    private secretCodesService: SecretCodesService,
  ) {}

  public async sync(interaction: ModalSubmitInteraction<CacheType>) {
    const { components: interactionComponents } = interaction;

    const [secondRow] = interactionComponents;

    const { value: secretCodeInput } = secondRow.components[0];

    if (!this.secretCodesService!.has(secretCodeInput)) {
      const reply = interaction.reply('O código não é valido!');

      setTimeout(() => {
        interaction.deleteReply();
      }, 5000);

      return await reply;
    }

    return interaction.reply('Tudo certo!');
  }
}

export { UserSyncService };
