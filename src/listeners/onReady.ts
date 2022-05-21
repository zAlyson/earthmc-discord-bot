import { Container } from 'inversify';
import { Client } from 'discord.js';
import { CommandsManager } from '../commands/manager/CommandsManager';
import { IListener } from '../types/interfaces/IListener';
import { ListenersManager } from './manager/ListenersManager';
import { SecretCodesService } from '../services/SecretCodesService';

class ReadyListener implements IListener {
  constructor(private container: Container) {}

  async listener(client: Client) {
    new ListenersManager(client, this.container).init();
    new CommandsManager(client).init();

    this.setUserStatus(client);
  }

  private setUserStatus(client: Client) {
    client.user!.setActivity('earthmc.com.br', { type: 'PLAYING' });
  }
}

export { ReadyListener };
