const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kicks a user from the server.')
        .addUserOption(option => 
            option.setName('target')
                  .setDescription('The user to kick')
                  .setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
        const member = await interaction.guild.members.fetch(user.id);
        if (member) {
            await member.kick();
            await interaction.reply(`${user.tag} has been kicked.`);
        } else {
            await interaction.reply('User not found.');
        }
    },
};