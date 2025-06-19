import { OpenAI } from "openai"

const outputImg = document.getElementById('output-img')

const openai = new OpenAI({
    dangerouslyAllowBrowser: true
})

document.getElementById("submit-btn").addEventListener("click", () => {
    const prompt = document.getElementById("instruction").value
    generateImage(prompt)
})

async function generateImage(prompt) {

    console.log(response)
    outputImg.innerHTML = `<img src="" alt="The Image API Failed">`
}