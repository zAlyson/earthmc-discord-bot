import 'reflect-metadata';

import { DISCORD_TOKEN as applicationToken } from '../config/Configuration';

import { Client, Intents } from 'discord.js';

import { container } from 'tsyringe';
import { ApplicationStarterModule } from '../modules/implementations/ApplicationStarterModule';

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
  ],
});

client.once('ready', client => {
  container.registerInstance('client', client);

  new ApplicationStarterModule().configure();
});

client.login(applicationToken);
