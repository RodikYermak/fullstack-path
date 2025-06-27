/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import OpenAI from 'openai';

export default {
	async fetch(request, env, ctx) {
		const openai = new OpenAI({
			apiKey: env.OPEN_API_KEY,
		});
		try {
			const chatCompletion = await openai.chat.completions.create({
				model: 'gpt-3.5-turbo',
				messages: [{ role: 'user', content: 'Should I trust stock predictions from Dodgy Dave?' }],
			});
			const response = chatCompletion.choices[0].message;

			return new Response(JSON.stringify(response));
		} catch (e) {
			return new Response(e);
		}
	},
};

// Cloudflare Worker project
// 01 Install OpenAI API library in worker
// 02 Instantiate OpenAI API client
// 03 Save API key to your environment
// 04 Make an OpenAI request
