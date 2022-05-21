import {
  CommandInteraction,
  CacheType,
  TextChannel,
  MessageEmbed,
} from 'discord.js';

import { SyncChannelService } from '../services/SyncChannelService';

export default class SetSyncChannelCommand {
  async handle(interaction: CommandInteraction<CacheType>) {
    const { channel } = interaction;

    if (!channel?.isText() || channel.isThread()) {
      const message = interaction.reply({
        embeds: [
          new MessageEmbed()
            .setTitle('1')
            .setDescription(`1`)
            .setColor('ORANGE'),
        ],
      });

      setTimeout(() => interaction.deleteReply(), 4000);

      return await message;
    }

    const { id: textChannelId } = channel as TextChannel;

    const syncChannelService =
      container.resolve<SyncChannelService>('SyncChannelService');

    if (syncChannelService.channelId === textChannelId) {
      const reply = interaction.reply({
        embeds: [
          new MessageEmbed()
            .setTitle('Aldo de errado aconteceu...')
            .setDescription(
              `Este canal já está configurado como um canal de sincronização!`,
            )
            .setColor('ORANGE'),
        ],
      });

      setTimeout(() => interaction.deleteReply(), 4000);

      return await reply;
    }

    syncChannelService.setChannelId(textChannelId);
    syncChannelService.setUp();

    const reply = interaction.reply({
      embeds: [
        new MessageEmbed()
          .setTitle('Canal configurado com sucesso!')
          .setDescription('Agora jogadores podem verificar suas contas.')
          .setColor('GREEN'),
      ],
    });

    setTimeout(() => interaction.deleteReply(), 4000);

    return await reply;
  }
}
