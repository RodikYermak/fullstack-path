// FaceBomp – game logic
// --------------------------------------------
// DOM references
const startBtn = document.getElementById('start-button');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const finalMsgBox = document.getElementById('final-message');
const finalScoreEl = document.getElementById('final-score');
const faces = Array.from(document.querySelectorAll('.face'));
const bompSound = document.getElementById('bomp-sound');

// ----- Game-state variables -----
let score = 0; // current score
let timeLeft = 30; // countdown, seconds
let popTimeoutId = null; // handle for next face pop
let countdownId = null; // handle for 1-second timer

// pop-timing ranges (tweak for difficulty)
const MIN_POP_VISIBLE = 600; // how long a face stays up (ms)
const MAX_POP_VISIBLE = 1000;
const MIN_DELAY_BETWEEN = 400; // delay before next face (ms)
const MAX_DELAY_BETWEEN = 800;

function createRipple(x, y, parent) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = parent.getBoundingClientRect();
    const size = rect.width * 0.6; // size relative to hole
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x - rect.left - size / 2}px`;
    ripple.style.top = `${y - rect.top - size / 2}px`;
    parent.appendChild(ripple);
    setTimeout(() => ripple.remove(), 400); // clean up
}

// --------------------------------------------
// Utility – pick a random integer inclusive of min-max
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Utility – choose a random face element
function randomFace() {
    return faces[rand(0, faces.length - 1)];
}

// --------------------------------------------
// Core – show one face, then schedule the next
function popFace() {
    const face = randomFace();

    // Skip if that face is already visible (rare but possible)
    if (!face.classList.contains('hidden')) {
        return popFace();
    }

    // NOTE: element is display:none while hidden. We remove .hidden first…
    face.classList.remove('hidden');
    // …then, on the next frame, scale it up so CSS transition runs.
    requestAnimationFrame(() => (face.style.transform = 'scale(1)'));

    // After a random visible duration, shrink & hide it again
    const visibleFor = rand(MIN_POP_VISIBLE, MAX_POP_VISIBLE);
    setTimeout(() => {
        face.style.transform = 'scale(0)';
        setTimeout(() => face.classList.add('hidden'), 150); // 150ms = CSS transition
    }, visibleFor);

    // Schedule the next face pop after a small random gap
    const delay = rand(MIN_DELAY_BETWEEN, MAX_DELAY_BETWEEN);
    popTimeoutId = setTimeout(popFace, visibleFor + delay);
}

// --------------------------------------------
// Start / End-game flow
function startGame() {
    // Reset state
    startBtn.textContent = 'Playing...';
    clearTimeout(popTimeoutId);
    clearInterval(countdownId);
    faces.forEach((f) => {
        f.classList.add('hidden');
        f.style.transform = 'scale(0)';
    });

    score = 0;
    timeLeft = 30;
    scoreEl.textContent = score;
    timerEl.textContent = timeLeft;
    finalMsgBox.classList.add('hidden');

    // Kick off
    popFace();
    countdownId = setInterval(tick, 1000);
}

function tick() {
    timeLeft -= 1;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
        endGame();
    }
}

function endGame() {
    startBtn.textContent = 'Start Game';
    clearTimeout(popTimeoutId);
    clearInterval(countdownId);

    // Hide any visible faces
    faces.forEach((f) => {
        f.style.transform = 'scale(0)';
        setTimeout(() => f.classList.add('hidden'), 150);
    });

    // Show final score + witty message
    finalScoreEl.textContent = score;
    finalMsgBox.innerHTML = `Game Over! Final Score: <span id="final-score">${score}</span><br>${getMessage(
        score
    )}`;
    finalMsgBox.classList.remove('hidden');
}

// --------------------------------------------
// Click handler – increase score when a visible face is clicked
faces.forEach((face) => {
    // Prevent drag ghost-image
    face.addEventListener('dragstart', (e) => e.preventDefault());

    face.addEventListener('click', () => {
        if (face.classList.contains('hidden')) return;

        score += 1;
        scoreEl.textContent = score;

        bompSound.currentTime = 0;
        bompSound.play();

        // Add red border
        face.classList.add('clicked');

        // Hide face after short delay
        face.style.transform = 'scale(0)';
        setTimeout(() => {
            face.classList.remove('clicked'); // remove red border
            face.classList.add('hidden'); // hide face
        }, 150);
    });
});

// Start button wiring
startBtn.addEventListener('click', startGame);

// --------------------------------------------
// Fun messages based on performance
function getMessage(score) {
    if (score === 0) return 'Did you blink the whole time?';
    if (score < 5) return 'A slow start – keep practicing!';
    if (score < 10) return 'Not bad! Your reflexes are warming up.';
    if (score < 20) return 'Nice! You’re getting the hang of FaceBomp.';
    if (score < 30) return 'Whoa, lightning fingers!';
    return 'FaceBomp legend! Were you born with superpowers?';
}

// --------------------------------------------
// That's it – happy bomping! 🎉
