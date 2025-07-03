import { createMainChain } from './utils/chain.js';
import { addSpeechBubble, formatConvHistory } from './utils/ui.js';

const chain = createMainChain();
const convHistory = [];

document.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userInput = document.getElementById('user-input');
    const container = document.getElementById('chatbot-conversation-container');

    const question = userInput.value.trim();
    userInput.value = '';
    if (!question) return;

    addSpeechBubble('human', question, container);

    try {
        const response = await chain.invoke({
            question,
            conv_history: formatConvHistory(convHistory.slice(-6)),
        });

        convHistory.push(question, response);
        addSpeechBubble('ai', response, container);
    } catch (err) {
        console.error(err);
        addSpeechBubble('ai', 'Oops! Something went wrong. Please try again.', container);
    }
});
