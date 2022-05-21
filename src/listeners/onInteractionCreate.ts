import { Interaction } from 'discord.js';
import { injectable } from 'inversify';
import { IListener } from '../types/interfaces/IListener';

@injectable()
class InteractionCreateListener implements IListener {
  async listener(interaction: Interaction) {
    const { client } = interaction;

    if (interaction.isModalSubmit()) client.emit('modalSubmit', interaction);

    if (interaction.isCommand()) client.emit('commandPerform', interaction);

    if (interaction.isButton()) client.emit('buttonInteraction', interaction);
  }
}

export { InteractionCreateListener };
