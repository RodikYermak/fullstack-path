import { OpenAI } from 'openai';
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

// const openai = new OpenAI({
//     dangerouslyAllowBrowser: true,
//     apiKey: OPENAI_API_KEY,
// });

// console.log('index js connected');
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('translation-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const sourceText = document.getElementById('source-text').value;
        // const translatedText = document.getElementById('translated-text').value;
        const selectedLanguage = form.elements['language'].value;

        console.log(sourceText);
        console.log(selectedLanguage);

        fetchTranslation(sourceText, selectedLanguage);
    });
});

async function fetchTranslation(data, language) {
    const messages = [
        {
            role: 'system',
            content: `You can translate text into ${language}`,
        },
        {
            role: 'user',
            content: `${data}`,
        },
    ];

    try {
        const openai = new OpenAI({
            apiKey: OPENAI_API_KEY,
            dangerouslyAllowBrowser: true,
        });

        const translation = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: messages,
        });

        document.getElementById('translated-text').value = translation.choices[0].message.content;

        // return translation.choices[0].message.content;
    } catch (err) {
        console.log('Error: ', err);
    }
}
