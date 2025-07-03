import { createClient } from '@supabase/supabase-js';
import { SupabaseVectorStore } from 'langchain/vectorstores/supabase';
import { embeddings } from './llm.js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_API_KEY);

export const vectorStore = new SupabaseVectorStore(embeddings, {
  client: supabaseClient,
  tableName: 'documents_lang',
  queryName: 'match_documents',
});

export const retriever = vectorStore.asRetriever();