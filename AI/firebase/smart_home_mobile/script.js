// ===== Smart Home Controller Logic =====

// ----- Temperature Control -----
let currentTemp = 78; // initial temperature
const display = document.getElementById('temp-display');

const songs = [
    '💃 Disco Inferno, But Make It Cat Meows',
    '🚀 Funky Astronaut Shuffle',
    '🥦 Broccoli Beats Vol. 3',
    '👽 Alien Yodel Trap Remix',
    '🐔 Chicken Dance on Fire',
];

let currentSongIndex = -1;
const songDisplay = document.getElementById('song-display');

const playSong = () => {
    currentSongIndex = Math.floor(Math.random() * songs.length);
    songDisplay.textContent = songs[currentSongIndex];
};

document.getElementById('music-play').addEventListener('click', playSong);

document.getElementById('music-next').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    songDisplay.textContent = songs[currentSongIndex];
});

document.getElementById('music-pause').addEventListener('click', () => {
    songDisplay.textContent = '⏸️ Music paused';
});

document.getElementById('music-stop').addEventListener('click', () => {
    songDisplay.textContent = '⏹️ Music stopped';
});

const updateDisplay = () => {
    display.textContent = `${currentTemp}°F`;
};

// Increase temperature
document.getElementById('temp-up').addEventListener('click', () => {
    currentTemp++;
    updateDisplay();
});

// Decrease temperature
document.getElementById('temp-down').addEventListener('click', () => {
    currentTemp--;
    updateDisplay();
});

// Auto Mode → snap back to 78°F
document.getElementById('temp-auto').addEventListener('click', () => {
    currentTemp = 78;
    updateDisplay();
});

// Initial render
updateDisplay();

// ----- Lighting Toggle (example) -----
const lightToggle = document.getElementById('light-toggle');
lightToggle.addEventListener('change', (e) => {
    const isOn = e.target.checked;
    // integrate with backend or device API here
    console.log(`Lights ${isOn ? 'ON' : 'OFF'}`);
});

// Add further smart-home integrations as needed
