import SecretCodesService from '../../services/SecretCodesService';
import SyncChannelService from '../../services/SyncChannelService';
import UserSyncService from '../../services/UserSyncService';
import ModalSubmitEvent from '../../listeners/onModalSubmit';

import { Client } from 'discord.js';
import { GUILD_ID } from '../../config/Configuration';
import { Container } from 'inversify';

// export class ApplicationStarterModule implements IModule {
//   constructor(private client: Client) {
//     this.client = client;
//   }

//   async configure(): Promise<void> {
//     Container 

//     container.registerInstance(
//       'SyncChannelService',
//       new SyncChannelService(this.client.guilds.cache.get(GUILD_ID)!),
//     );

//     container.registerSingleton('SecretCodesService', SecretCodesService);
//     container.registerSingleton('UserSyncService', UserSyncService);

//     container.registerSingleton(
//       'ModalSubmitEvent',
//       delay(() => ModalSubmitEvent),
//     );

//     console.log(
//       'SyncChannelService',
//       container.isRegistered(SyncChannelService),
//     );
//     console.log(
//       'SecretCodesService',
//       container.isRegistered(SecretCodesService),
//     );
//     console.log('UserSyncService', container.isRegistered(UserSyncService));
//     console.log('ModalSubmitEvent', container.isRegistered(ModalSubmitEvent));
//   }
// }
