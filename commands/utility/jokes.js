const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('joke')
        .setDescription('Fetches a random joke.'),
    async execute(interaction) {
        try {
            const fetch = (await import('node-fetch')).default;
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const joke = await response.json();
            await interaction.reply(`${joke.setup} — ${joke.punchline}`);
        } catch (error) {
            console.error('Error fetching joke:', error);
            await interaction.reply('Sorry, I couldn\'t fetch a joke right now.');
        }
    },
};