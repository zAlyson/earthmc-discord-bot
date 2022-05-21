import {
  Guild,
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  TextChannel,
} from 'discord.js';
import { injectable } from 'inversify';

@injectable()
class SyncChannelService {
  private guild: Guild;

  private _channelId: string | undefined;

  constructor(guild: Guild) {
    this.guild = guild;
    this._channelId = undefined;
  }

  public get channelId(): string {
    return this._channelId ?? '';
  }

  setChannelId(channelId: string) {
    this._channelId = channelId;
  }

  async setUp() {
    const textChannel = this.guild.channels.cache.get(
      this._channelId!,
    )! as TextChannel;

    const messageEmbed = new MessageEmbed()
      .setTitle('Sincronizar')
      .setDescription(
        'Clique no botão abaixo para iniciar o processo de verificação de conta.',
      )
      .setColor('#0x90ff12')
      .setThumbnail(
        'https://cdn-icons.flaticon.com/png/512/4301/premium/4301805.png?token=exp=1652984576~hmac=1c723f049ffd9350f449f505af5bd0f4',
      );

    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId('verify')
        .setLabel('Verificar')
        .setStyle('SUCCESS')
        .setEmoji('🚀'),
    );

    await textChannel.send({
      embeds: [messageEmbed],
      components: [row],
    });
  }
}

export { SyncChannelService };
