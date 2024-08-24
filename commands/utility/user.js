const {SlashCommandBuilder} = require('discord.js');

moduleexports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provides information about the user'),
    async execute(interaction){
        await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
    },
};