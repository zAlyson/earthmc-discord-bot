import { Client, ModalSubmitInteraction } from 'discord.js';
import { Container } from 'inversify';
import { ButtonInteractionListener } from '../onButtonInteraction';
import { InteractionCreateListener } from '../onInteractionCreate';
import { ModalSubmitListener } from '../onModalSubmit';

class ListenersManager implements IManager {
  constructor(private client: Client, private container: Container) {}

  init() {
    const buttonInteractionListener = this.container.get(
      ButtonInteractionListener,
    );
    const interactionCreateListener = this.container.get(
      InteractionCreateListener,
    );

    const modalSubmitListener = this.container.get(ModalSubmitListener);

    this.client.on('interactionCreate', interaction =>
      interactionCreateListener.listener(interaction),
    );
    this.client.on('buttonInteraction', interaction =>
      buttonInteractionListener.listener(interaction),
    );
    this.client.on('modalSubmit', interaction =>
      modalSubmitListener.listener(interaction),
    );
  }
}

export { ListenersManager };
