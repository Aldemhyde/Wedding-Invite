const cover = document.getElementById('cover');
const details = document.getElementById('details');
const music = document.getElementById('bg-music');
const toggleBtn = document.getElementById('music-toggle');

cover.addEventListener('click', () => {
  cover.style.transform = 'rotateY(-180deg)';
  details.classList.add('open');
  launchConfetti();
  playMusic();
});

function launchConfetti() {
  const colors = ['#f9c5d1', '#c8e6c9', '#d1c4e9', '#fff9c4', '#bbdefb'];
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
  }
}

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

// Fade-out when page is closed
window.addEventListener('beforeunload', () => {
  let vol = music.volume;
  const fadeOut = setInterval(() => {
    if (vol > 0) {
      vol -= 0.02;
      music.volume = Math.max(vol, 0);
    } else {
      clearInterval(fadeOut);
      music.pause();
    }
  }, 200);
});
