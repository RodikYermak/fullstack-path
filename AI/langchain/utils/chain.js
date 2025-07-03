import { PromptTemplate } from 'langchain/prompts';
import { RunnableSequence, RunnablePassthrough } from 'langchain/schema/runnable';
import { StringOutputParser } from 'langchain/schema/output_parser';
import { llm } from './llm.js';
import { retriever } from './retriever.js';
import { standaloneQuestionTemplate, answerTemplate } from './prompts.js';

function combineDocuments(docs) {
    return docs.map((doc) => doc.pageContent).join('\n\n');
}

export function createMainChain() {
    const standalonePrompt = PromptTemplate.fromTemplate(standaloneQuestionTemplate);
    const answerPrompt = PromptTemplate.fromTemplate(answerTemplate);

    const standaloneChain = standalonePrompt.pipe(llm).pipe(new StringOutputParser());

    const retrievalChain = RunnableSequence.from([
        (prev) => prev.standalone_question,
        retriever,
        combineDocuments,
    ]);

    const answerChain = answerPrompt.pipe(llm).pipe(new StringOutputParser());

    return RunnableSequence.from([
        {
            standalone_question: standaloneChain,
            original_input: new RunnablePassthrough(),
        },
        {
            context: retrievalChain,
            question: ({ original_input }) => original_input.question,
            conv_history: ({ original_input }) => original_input.conv_history,
        },
        answerChain,
    ]);
}
