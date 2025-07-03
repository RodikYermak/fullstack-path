import { createClient } from '@supabase/supabase-js';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import 'dotenv/config';

export const OPENAI_API_KEY = process.env.VITE_OPENAI_API_KEY;
export const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
export const SUPABASE_API_KEY = process.env.VITE_SUPABASE_API_KEY;

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_API_KEY);
export const embeddings = new OpenAIEmbeddings({ openAIApiKey: OPENAI_API_KEY });
