import { ChatOpenAI } from 'langchain/chat_models/openai';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const llm = new ChatOpenAI({
  openAIApiKey: OPENAI_API_KEY,
  temperature: 0,
  modelName: 'gpt-3.5-turbo',
});

export const embeddings = new OpenAIEmbeddings({ openAIApiKey: OPENAI_API_KEY });