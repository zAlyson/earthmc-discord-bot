import { CacheType, Client, CommandInteraction } from 'discord.js';

import SetSyncChannelCommand from '../SetSyncChannelCommand';

class CommandsManager implements IManager {
  constructor(private client: Client) {}

  init() {
    this.client.application?.commands.create({
      name: 'set-sync-channel',
      description: 'Configura um canal de sincronização',
    });

    const setSyncChannelCommand = new SetSyncChannelCommand();

    this.client.on(
      'commandPerform',
      (interaction: CommandInteraction<CacheType>) => {
        const { commandName } = interaction;

        if (commandName === 'set-sync-channel')
          setSyncChannelCommand.handle(interaction);
      },
    );
  }
}

export { CommandsManager };
