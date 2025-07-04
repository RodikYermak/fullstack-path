import { openai, supabase } from './config.js';

const actionBtn = document.getElementById('letsgo');
const reply = document.querySelector('.reply');
const input = document.querySelector('.txtarea');

actionBtn.addEventListener('click', () => {
    console.log('Clicked');
    main(input.value);
    input.value = '';
});

async function main(input) {
    try {
        reply.innerHTML = 'Thinking...';
        const embedding = await createEmbedding(input);
        const match = await findNearestMatch(embedding);
        await getChatCompletion(match, input);
    } catch (error) {
        console.error('Error in main function.', error.message);
        reply.innerHTML = 'Sorry, something went wrong. Please try again.';
    }
}

async function createEmbedding(input) {
    const embeddingResponse = await openai.embeddings.create({
        model: 'text-embedding-ada-002',
        input,
    });
    return embeddingResponse.data[0].embedding;
}

async function findNearestMatch(embedding) {
    const { data } = await supabase.rpc('match_movies', {
        query_embedding: embedding,
        match_threshold: 0.5,
        match_count: 1,
    });

    const match = data.map((obj) => obj.content).join('\n');
    console.log(match);
    return match;
}

const chatMessages = [
    {
        role: 'system',
        content: `You are an enthusiastic movie expert who loves recommending movies to people. You will be given two pieces of information - some context about movies and a question. Your main job is to formulate a short answer to the question using the provided context. If the answer is not given in the context, find the answer in the conversation history if possible. If you are unsure and cannot find the answer, say, "Sorry, I don't know the answer." Please do not make up the answer. Always speak as if you were chatting to a friend.`,
    },
];

async function getChatCompletion(text, query) {
    chatMessages.push({
        role: 'user',
        content: `Context: ${text} Question: ${query}`,
    });

    const { choices } = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: chatMessages,
        temperature: 0.65,
        frequency_penalty: 0.5,
    });

    chatMessages.push(choices[0].message);
    reply.innerHTML = choices[0].message.content;
}
