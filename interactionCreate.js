const {Events, Client, CommandInteraction} = require('discord.js');
require('colors');
// Install colors in your cmd or terminal. Look below for the command for the command to run
// npm i colors

module.exports = {
  name: Events.InteractionCreate,
  /**
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) {
      interaction.reply({
        content: 'This command does not exist.',
        ephemeral: true
      });
    }

    try {
      command.execute(interaction, client);
    } catch (error) {
      console.log(error);
      interaction.reply({
        content: `There was an error executing the command: ${error.message}`,
        ephemeral: true
      });
    }
  }
};
