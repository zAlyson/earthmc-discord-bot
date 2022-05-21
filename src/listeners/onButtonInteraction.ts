import {
  ButtonInteraction,
  CacheType,
  Modal,
  TextInputComponent,
  MessageActionRow,
  ModalActionRowComponent,
} from 'discord.js';
import { injectable } from 'inversify';

import { IListener } from '../types/interfaces/IListener';

@injectable()
class ButtonInteractionListener implements IListener {
  async listener(buttonInteraction: ButtonInteraction<CacheType>) {
    const { customId } = buttonInteraction;

    if (customId !== 'verify') return;

    const modal = new Modal()
      .setCustomId('verificationModal')
      .setTitle('Quase lá!');

    const nicknameInput = new TextInputComponent()
      .setMinLength(3)
      .setMaxLength(16)
      .setCustomId('nicknameInput')
      .setLabel('Qual é o seu nickname no minecraft?')
      .setStyle('SHORT')
      .setPlaceholder('Digite seu nickname aqui...')
      .setRequired(true);

    const codeInput = new TextInputComponent()
      .setMaxLength(8)
      .setCustomId('codeInput')
      .setLabel('Insira o seu código secreto')
      .setStyle('SHORT')
      .setPlaceholder('Digite seu código secreto aqui...')
      .setRequired(true);

    const firstActionRow =
      new MessageActionRow<ModalActionRowComponent>().addComponents(
        nicknameInput,
      );

    const secondActionRow =
      new MessageActionRow<ModalActionRowComponent>().addComponents(codeInput);

    modal.addComponents(firstActionRow, secondActionRow);
    buttonInteraction.showModal(modal);
  }
}

export { ButtonInteractionListener };
