// commands/fun/quote.js
const { SlashCommandBuilder } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quote')
        .setDescription('Sends a random inspirational quote.'),
    async execute(interaction) {
        const response = await fetch('https://api.quotable.io/random');
        const quote = await response.json();
        await interaction.reply(`"${quote.content}" — ${quote.author}`);
    },
};