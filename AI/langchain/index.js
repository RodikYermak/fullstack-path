import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { createClient } from '@supabase/supabase-js';
import { SupabaseVectorStore } from 'langchain/vectorstores/supabase';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

async function ingestTextToSupabase() {
    try {
        const response = await fetch('scrimba-info.txt');
        if (!response.ok) throw new Error(`Failed to fetch file: ${response.statusText}`);
        const text = await response.text();

        const splitter = new RecursiveCharacterTextSplitter({
            chunkSize: 500,
            chunkOverlap: 50,
            separators: ['\n\n', '\n', ' ', ''], // default setting
        });

        const documents = await splitter.createDocuments([text]);

        if (!SUPABASE_URL || !SUPABASE_API_KEY || !OPENAI_API_KEY) {
            throw new Error('Missing one or more required environment variables.');
        }

        const supabaseClient = createClient(SUPABASE_URL, SUPABASE_API_KEY);
        const embeddings = new OpenAIEmbeddings({ openAIApiKey: OPENAI_API_KEY });

        await SupabaseVectorStore.fromDocuments(documents, embeddings, {
            client: supabaseClient,
            tableName: 'documents_lang',
        });

        console.log('Document successfully embedded and stored.');
    } catch (err) {
        console.log('Error during ingestion:', err);
    }
}

// ingestTextToSupabase();
