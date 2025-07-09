// === Participant data ===
const participants = [];

// === DOM elements ===
const nameInput = document.getElementById('nameInput');
const submitBtn = document.getElementById('submitBtn');
const participantList = document.getElementById('participantList');
const drawBtn = document.getElementById('drawBtn');
const winnerDisplay = document.getElementById('winnerDisplay');
const resetBtn = document.getElementById('resetBtn');

// === Add a new participant ===
function addParticipant(name) {
    const trimmedName = name.trim();

    if (trimmedName === '') return;

    // Prevent duplicate names
    if (participants.includes(trimmedName)) {
        alert('This name has already been entered!');
        return;
    }

    participants.push(trimmedName);

    const listItem = document.createElement('li');
    listItem.textContent = trimmedName;
    participantList.appendChild(listItem);

    nameInput.value = '';
    nameInput.focus();
}

// === Draw a random winner ===
function drawWinner() {
    if (participants.length === 0) {
        winnerDisplay.textContent = 'No participants yet!';
        return;
    }

    const randomIndex = Math.floor(Math.random() * participants.length);
    const winner = participants[randomIndex];

    winnerDisplay.textContent = `🎉 Congratulations, ${winner}! You win a cake! 🎂`;
}

// === Reset the raffle ===
function resetRaffle() {
    participants.length = 0;
    participantList.innerHTML = '';
    winnerDisplay.textContent = '';
    nameInput.value = '';
    nameInput.focus();
}

// === Event listeners ===
submitBtn.addEventListener('click', () => {
    addParticipant(nameInput.value);
});

drawBtn.addEventListener('click', drawWinner);

resetBtn.addEventListener('click', resetRaffle);

nameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        addParticipant(nameInput.value);
    }
});
