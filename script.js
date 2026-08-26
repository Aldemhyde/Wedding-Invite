const music = document.getElementById('bg-music');
const toggleBtn = document.getElementById('music-toggle');

// Fade-in music
function playMusic() {
  music.volume = 0;
  music.play();
  let vol = 0;
  const fadeIn = setInterval(() => {
    if (vol < 0.3) {
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fadeIn);
    }
  }, 200);
}

playMusic();

// Toggle mute/unmute
toggleBtn.addEventListener('click', () => {
  if (music.muted) {
    music.muted = false;
    toggleBtn.textContent = "🔈 Mute";
  } else {
    music.muted = true;
    toggleBtn.textContent = "🔊 Unmute";
  }
});

// Floating petals
for (let i = 0; i < 15; i++) {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * window.innerWidth + 'px';
  petal.style.animationDelay = Math.random() * 5 + 's';
  document.body.appendChild(petal);
}
