#!/usr/bin/env ts-node
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({
    organization: "your-org-id-here",
    apiKey: "your-openai-api-key-here"
})

const openai = new OpenAIApi(configuration)

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const myName = 'Yang'
const prompt = `${myName}: `;

const chatList:ChatCompletionRequestMessage[] = []
function ask(prompt, context) {
    return new Promise((resolve, reject) => {
        rl.question(prompt, (input) => {
            chatList.push({
                role: 'user',
                content: input,
                name: myName
            })
            openai.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: chatList,
                user: `${myName}-${Date.now()}`,
                n: 1
            }).then((response) => {
	    	// console.log('response:::', response )
                let { data } = response
                const chatId = data?.id
                const model = data?.model
                const message = data?.choices[0]?.message?.content?.trim() || '';
                console.log( `\nBot:\n${message}\n`)
                chatList.push({
                    role: 'assistant',
                    content: message
                })
                resolve(message);
            }).catch((err) => {
                // console.log('Error:', err);
                reject(err);
            });
        });
    });
}

async function chat() {
    let context = '';
    while (true) {
        const input = await ask(prompt, context)
        .catch( error => {
            
        });
        context += input + '\nBot: ';
    }
}

chat();
