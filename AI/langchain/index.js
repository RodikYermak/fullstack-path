import { ChatOpenAI } from 'langchain/chat_models/openai';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { PromptTemplate } from 'langchain/prompts';
import { SupabaseVectorStore } from 'langchain/vectorstores/supabase';
// import { OPENAI_API_KEY, supabaseClient, embeddings } from './config.js';
import { RunnableSequence, RunnablePassthrough } from 'langchain/schema/runnable';
import { StringOutputParser } from 'langchain/schema/output_parser';
import { createClient } from '@supabase/supabase-js';

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_API_KEY);

document.addEventListener('submit', (e) => {
    e.preventDefault();
    progressConversation();
});

const llm = new ChatOpenAI({ openAIApiKey: OPENAI_API_KEY });
const embeddings = new OpenAIEmbeddings({ openAIApiKey: OPENAI_API_KEY });

const standaloneQuestionTemplate = `Given a question, convert it to a standalone question.
question: {question} standalone question:`;

const standaloneQuestionPrompt = PromptTemplate.fromTemplate(standaloneQuestionTemplate);

const answerTemplate = `You are a helpful and enthusiastic support bot who can answer a given
question about Scrimba based on the context provided. Try to find the answer in the context. If you
really don't know the answer, say "I'm sorry, I don't know the answer to that." And direct the
questioner to email help@scrimba.com. Don't try to make up an answer. Always speak as if you were
chatting to a friend.
context: {context}
question: {question}
answer: `;

const answerPrompt = PromptTemplate.fromTemplate(answerTemplate);

const vectorStore = new SupabaseVectorStore(embeddings, {
    client: supabaseClient,
    tableName: 'documents_lang',
    queryName: 'match_documents',
});

const retriever = vectorStore.asRetriever();

const standaloneQuestionChain = standaloneQuestionPrompt.pipe(llm).pipe(new StringOutputParser());
const retrieverChain = RunnableSequence.from([
    (prevResult) => prevResult.standalone_question,
    retriever,
    combineDocuments,
]);
const answerChain = answerPrompt.pipe(llm).pipe(new StringOutputParser());

const chain = RunnableSequence.from([
    {
        standalone_question: standaloneQuestionChain,
        original_input: new RunnablePassthrough(),
    },
    {
        context: retrieverChain,
        question: ({ original_input }) => original_input.question,
    },
    answerChain,
]);

async function progressConversation() {
    const userInput = document.getElementById('user-input');
    const chatbotConversation = document.getElementById('chatbot-conversation-container');
    const question = userInput.value;
    userInput.value = '';

    // add human message
    const newHumanSpeechBubble = document.createElement('div');
    newHumanSpeechBubble.classList.add('speech', 'speech-human');
    chatbotConversation.appendChild(newHumanSpeechBubble);
    newHumanSpeechBubble.textContent = question;
    chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
    const response = await chain.invoke({
        question: question,
    });

    // add AI message
    const newAiSpeechBubble = document.createElement('div');
    newAiSpeechBubble.classList.add('speech', 'speech-ai');
    chatbotConversation.appendChild(newAiSpeechBubble);
    newAiSpeechBubble.textContent = response;
    chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
}

function combineDocuments(docs) {
    return docs.map((doc) => doc.pageContent).join('\n\n');
}
