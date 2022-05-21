import { Collection } from 'discord.js';
import { injectable } from 'inversify';

@injectable()
class SecretCodesService {
  codes: Collection<string, string> = new Collection();

  getNickname(secretCode: string): string | undefined {
    return this.codes.get(secretCode);
  }

  set(secretCode: string, nickname: string): void {
    this.codes.set(secretCode, nickname);
  }

  delete(secretCode: string): void {
    this.codes.delete(secretCode);
  }

  has(secretCode: string): boolean {
    return this.codes.has(secretCode);
  }
}

export { SecretCodesService };
