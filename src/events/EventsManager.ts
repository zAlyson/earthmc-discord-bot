import { Client } from 'discord.js';
import { container } from 'tsyringe';
import { onMessageCreate } from './ChannelMessageSent';

export class EventsManager {
  public registerEvents() {
    const client: Client = container.resolve('client');
    client.once('messageCreate', onMessageCreate);
  }
}
