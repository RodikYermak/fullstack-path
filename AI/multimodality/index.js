import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const form = document.querySelector('#posterForm');
const movieTitle = document.querySelector('#movie-title');
const artStyles = document.querySelector('#art-styles');
const posterOutput = document.querySelector('#poster-output');
const img = document.createElement('img');

/*
  Image generation project requirements:
    - Create a prompt from the movie title and art style submitted by the user
    - Use the image generations endpoint to provide `dall-e-3`
      or `dall-e-2` the prompt created by the form submission
    - Display the final poster image within the `posterOutput` div

  Stretch goals:
    - On submit, display text describing the image being generated
    - Provide user feedback when any errors occur
*/

form.addEventListener('submit', function (event) {
    event.preventDefault();
    generatePoster(movieTitle.value, artStyles.value);
    form.reset();
});

async function generatePoster(title, styles) {
    console.log('Submitting', title, styles);
    posterOutput.innerHTML = `Generating poster for "${title}" in style: ${styles}...`;

    try {
        const image = await openai.images.generate({
            model: 'dall-e-2',
            prompt: `Design a visually striking movie poster for a film titled "${title}". Use the following art styles: ${styles}. Include thematic elements that reflect the genre and tone of the movie.`,
        });

        img.src = image.data[0].url;
        img.alt = title;

        console.log(image.data[0].url);

        posterOutput.innerHTML = '';
        posterOutput.appendChild(img);
    } catch (e) {
        console.error('Image generation failed:', e);
        posterOutput.textContent = 'Sorry, something went wrong while generating the poster.';
    }
}
