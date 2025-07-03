import { createClient } from '@supabase/supabase-js';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';

export const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
export const SUPABASE_API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_API_KEY);

export const embeddings = new OpenAIEmbeddings({ openAIApiKey: OPENAI_API_KEY });
