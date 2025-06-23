// import { openai, supabase } from './config.js';
// import podcasts from './content.js';

// async function main(input) {
//     const data = await Promise.all(
//         input.map(async (textChunk) => {
//             const embeddingResponse = await openai.embeddings.create({
//                 model: 'text-embedding-ada-002',
//                 input: textChunk,
//             });
//             return {
//                 content: textChunk,
//                 embedding: embeddingResponse.data[0].embedding,
//             };
//         })
//     );

//     // Insert content and embedding into Supabase
//     await supabase.from('documents').insert(data);
//     console.log('Embedding and storing complete!');
// }

// main(podcasts);
// import { openai, supabase } from './config.js';
// import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

// const query = 'Something peaceful and relaxing';
// main(query);

// async function main(input) {
//     const embedding = await createEmbedding(input);
//     const match = await findNearestMatch(embedding);
//     // await getChatCompletion(match, input)
// }

// async function createEmbedding(input) {
//     const embeddingResponse = await openai.embeddings.create({
//         model: 'text-embedding-ada-002',
//         input,
//     });
//     return embeddingResponse.data[0].embedding;
// }

// async function findNearestMatch(embedding) {
//     const { data } = await supabase.rpc('match_documents', {
//         query_embedding: embedding,
//         match_threshold: 0.5,
//         match_count: 1,
//     });
//     return data[0].content;
// }

// const chatMessages = [
//     {
//         role: 'system',
//         content: `You are an enthusiastic podcast expert who loves recommending podcasts to people. You
//   will be given two pieces of information - some context about podcasts episodes add a question.
//   Your main job is to formulate a short answer to the question using the provided context. If you
//   are unsure and cannot find the answer in the context, say, "Sorry, I don't know the answer."
//   Please do not make up the answer.
//   `,
//     },
// ];

// async function getChatCompletion(text, query) {
//     chatMessages.push({
//         role: 'user',
//         content: `Context: ${text} Question: ${query}`,
//     });

//     const response = await openai.chat.completions.create({
//         model: 'gpt-4',
//         messages: chatMessages,
//         temperature: 0.5,
//         frequency_penalty: 0.5,
//     });

//     console.log(response.choices[0].message.content);
// }

// async function splitDocument() {
//     const response = await fetch('podcasts.txt');
//     const text = await response.text();

//     const splitter = new RecursiveCharacterTextSplitter({
//         chunkSize: 150,
//         chunkOverlap: 15,
//     });
//     const output = await splitter.createDocuments([text]);
//     console.log(output);
// }
// splitDocument();
// import { openai, supabase } from './config.js';
// import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

// async function main() {}

// async function splitDocument(document) {
//     try {
//         const response = await fetch(`${document}`);

//         if (!response.ok) {
//             throw new Error('Network response was not ok.');
//         }

//         const text = await response.text();

//         const splitter = new RecursiveCharacterTextSplitter({
//             chunkSize: 250,
//             chunkOverlap: 35,
//         });
//         const output = await splitter.createDocuments([text]);
//         console.log(output);
//         return output;
//     } catch (err) {
//         console.error('There was an issue with splitting text');
//         throw err;
//     }
// }

// async function createAndStoreEmbeddings() {
//     try {
//         const chunkData = await splitDocument('movies.txt');

//         const data = await Promise.all(
//             chunkData.map(async (textChunk) => {
//                 const embeddingResponse = await openai.embeddings.create({
//                     model: 'text-embedding-ada-002',
//                     input: textChunk.pageContent,
//                 });
//                 return {
//                     content: textChunk.pageContent,
//                     embedding: embeddingResponse.data[0].embedding,
//                 };
//             })
//         );

//         const { error } = await supabase.from('movies').insert(data);
//         if (error) {
//             throw new Error('Issue inserting data into the database.');
//         }
//         console.log('Embedding and storing complete!');
//     } catch (e) {
//         console.error('ERROR: ' + e.message);
//     }
// }

// createAndStoreEmbeddings();
import { openai, supabase } from './config.js';

const form = document.querySelector('form');
const input = document.querySelector('input');
const reply = document.querySelector('.reply');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    main(input.value);
    input.value = '';
});

// const query = 'Which movie can I take my child to?';
// main(query);

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
        match_count: 4,
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
