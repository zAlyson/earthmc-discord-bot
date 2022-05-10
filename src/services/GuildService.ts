import { Client, Guild } from 'discord.js';
import { inject, injectable, singleton } from 'tsyringe';

@injectable()
@singleton()
export class GuildService {
  private guild: Guild;

  constructor(@inject('client') client: Client) {
    this.guild = client.guilds.cache.get('967905661402898432')!;
  }

  get getGuild(): Guild {
    return this.guild;
  }
}
