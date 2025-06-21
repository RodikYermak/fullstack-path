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
import { openai, supabase } from './config.js';

const query = 'Hidden jazz';
main(query);

async function main(input) {
    const embeddingResponse = await openai.embeddings.create({
        model: 'text-embedding-ada-002',
        input,
    });

    const embedding = embeddingResponse.data[0].embedding;

    const { data } = await supabase.rpc('match_documents', {
        query_embedding: embedding,
        match_threshold: 0.5,
        match_count: 1,
    });
    console.log(data[0].content, data[0].similarity);
}
