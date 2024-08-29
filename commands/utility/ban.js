// commands/moderation/ban.js
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans a user from the server.')
        .addUserOption(option => 
            option.setName('target')
                  .setDescription('The user to ban')
                  .setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
        const member = await interaction.guild.members.fetch(user.id);
        if (member) {
            await member.ban();
            await interaction.reply(`${user.tag} has been banned.`);
        } else {
            await interaction.reply('User not found.');
        }
    },
};
