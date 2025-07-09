function showWelcomeMessage() {
    // Find the paragraph by its ID
    var messageElement = document.getElementById('welcome-text');

    // Create a variable and assign it a name
    var firstName = 'ChatGPT';

    // Set the text inside the paragraph
    messageElement.textContent = `Welcome, ${firstName}!`;
}
