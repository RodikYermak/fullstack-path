export function addSpeechBubble(type, text, container) {
    const bubble = document.createElement('div');
    bubble.classList.add('speech', `speech-${type}`);
    bubble.textContent = text;
    container.appendChild(bubble);
    container.scrollTop = container.scrollHeight;
}

export function formatConvHistory(messages) {
    return messages.map((msg, i) => (i % 2 === 0 ? `Human: ${msg}` : `AI: ${msg}`)).join('\n');
}
