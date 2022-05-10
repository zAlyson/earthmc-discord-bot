import { container } from 'tsyringe';
import { EventsManager } from '../../events/EventsManager';
import { GuildService } from '../../services/GuildService';
import { RedisModule } from './RedisModule';

export class ApplicationStarterModule implements IModule {
  async configure(): Promise<void> {
    container.registerSingleton('guildService', GuildService);

    new RedisModule().configure();

    new EventsManager().registerEvents();
  }
}
