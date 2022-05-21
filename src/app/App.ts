import 'reflect-metadata';

import { DISCORD_TOKEN } from '../config/Configuration';
import { Client, Intents } from 'discord.js';
import { Container } from 'inversify';
import { SyncChannelService } from '../services/SyncChannelService';
import { ReadyListener } from '../listeners/onReady';
import { SecretCodesService } from '../services/SecretCodesService';
import { UserSyncService } from '../services/UserSyncService';
import { ButtonInteractionListener } from '../listeners/onButtonInteraction';
import { InteractionCreateListener } from '../listeners/onInteractionCreate';
import { ModalSubmitListener } from '../listeners/onModalSubmit';

async function makeDiscordApplicationBot(container: Container) {
  const client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.GUILD_MESSAGES,
    ],
  });

  await client.login(DISCORD_TOKEN);

  client.once('ready', client => new ReadyListener(container).listener(client));

  return client;
}

async function Boostrap() {
  const container = new Container();

  container.bind(SyncChannelService).toSelf().inSingletonScope();
  container.bind(SecretCodesService).toSelf().inSingletonScope();
  container.bind(UserSyncService).toSelf().inSingletonScope();

  // binding listeners
  container.bind(ButtonInteractionListener).toSelf();
  container.bind(InteractionCreateListener).toSelf();
  container.bind(ModalSubmitListener).toSelf();

  await makeDiscordApplicationBot(container);

  console.log('Application has been started!');
}

Boostrap();
