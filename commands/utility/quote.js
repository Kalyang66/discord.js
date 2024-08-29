const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quote')
        .setDescription('Fetches a random quote.'),
    async execute(interaction) {
        try {
            const fetch = (await import('node-fetch')).default;
            const response = await fetch('https://api.quotable.io/random');
            const quote = await response.json();
            await interaction.reply(`${quote.content} — ${quote.author}`);
        } catch (error) {
            console.error('Error fetching quote:', error);
            await interaction.reply('Sorry, I couldn\'t fetch a quote right now.');
        }
    },
};