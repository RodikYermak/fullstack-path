document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('rsvp-form');
    const confirmationBox = document.getElementById('confirmation-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const attendance = document.getElementById('attendance').value;
        const email = document.getElementById('email').value;

        let message = '';

        // First remove any existing background classes
        document.body.classList.remove('body-party-mode', 'body-sad-mode');

        if (attendance === 'yes') {
            message = `🎉 Awesome! We can't wait to see you at the GIF Gala!`;
            document.body.classList.add('body-party-mode'); // Add party background
        } else if (attendance === 'no') {
            message = `😢 Sorry you can't make it, but thanks for letting us know!`;
            document.body.classList.add('body-sad-mode'); // Add sad background
        } else {
            message = `Please let us know if you're attending.`;
        }

        confirmationBox.textContent = message;
        confirmationBox.style.display = 'block';
    });
});
