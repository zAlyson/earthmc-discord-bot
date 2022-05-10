import { createClient } from 'redis';
import { container } from 'tsyringe';
import { RedisService } from '../../services/RedisService';

export class RedisModule implements IModule {
  async configure(): Promise<void> {
    const client = createClient();

    client.on('error', err => {
      console.log('Redis client Error ', err);
    });

    await client.connect();

    const subscriber = client.duplicate();
    await subscriber.connect();

    await subscriber.subscribe('channel', message => {
      console.log('message', message);
    });

    container.registerSingleton('redisService', RedisService);
  }
}
