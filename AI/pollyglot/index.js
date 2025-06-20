import { OpenAI } from 'openai';
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('translation-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const sourceText = document.getElementById('source-text').value.trim();
        const selectedLanguage = form.elements['language'].value;

        if (!sourceText) {
            alert('Please enter text to translate.');
            return;
        }

        await fetchTranslation(sourceText, selectedLanguage);
    });
});

async function fetchTranslation(text, language) {
    const messages = [
        {
            role: 'system',
            content: `You are a professional translator. Translate all input into ${language}. Only return the translated text.`,
        },
        {
            role: 'user',
            content: `${text}`,
        },
    ];

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages,
        });

        const translated = response.choices[0].message.content;
        document.getElementById('translated-text').value = translated;
        document.getElementById('source-text').value = '';
    } catch (err) {
        console.log('Error: ', err);
    }
}
