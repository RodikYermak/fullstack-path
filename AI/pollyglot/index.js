import { OpenAI } from 'openai';
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('translation-form');
    const copyButton = document.getElementById('copy-button');
    const translatedTextArea = document.getElementById('translated-text');

    copyButton.addEventListener('click', () => {
        const text = translatedTextArea.value;

        if (!text.trim()) {
            alert("There's no text to copy.");
            return;
        }

        navigator.clipboard
            .writeText(text)
            .then(() => {
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                }, 1500);
            })
            .catch((err) => {
                console.error('Copy failed:', err);
            });
    });

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

async function fetchTranslation(text, option) {
    let systemPrompt = '';

    if (option === 'fix') {
        systemPrompt = `
            You are an English grammar expert.
            If the input is in English, correct any grammar or spelling mistakes without changing the meaning.
        `;
    } else {
        systemPrompt = `
            You are a professional translator.
            Translate the following input into ${option}.
            Only return the translated text without explanations.
        `;
    }
    const messages = [
        {
            role: 'system',
            content: systemPrompt.trim(),
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
