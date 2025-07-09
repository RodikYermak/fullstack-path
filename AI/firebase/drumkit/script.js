// javascript
// Get the button element
const kickButton = document.getElementById('kickBtn');

// Get the audio element
const kickSound = document.getElementById('kickSound');

// Add a click event listener to the button
kickButton.addEventListener('click', function () {
    // Rewind and play the sound (in case it's already playing)
    kickSound.currentTime = 0;
    kickSound.play();
});
