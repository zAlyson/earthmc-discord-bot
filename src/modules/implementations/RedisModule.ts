import { createClient } from 'redis';
import { container } from 'tsyringe';

export class RedisModule implements IModule {
  async configure(): Promise<void> {
    const client = createClient();

    client.on('error', err => {
      console.log('Redis client Error ', err);
    });

    await client.connect();

    container.registerInstance('RegisClient', client);
  }
}
