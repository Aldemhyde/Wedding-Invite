const cover = document.getElementById('cover');
const details = document.getElementById('details');

cover.addEventListener('click', () => {
  cover.style.transform = 'rotateY(-180deg)';
  details.classList.add('open');
  launchConfetti();
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
