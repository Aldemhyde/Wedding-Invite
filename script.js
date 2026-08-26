const intro = document.getElementById("intro");
const scene = document.getElementById("scene");
const openBook = document.getElementById("openBook");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const replay = document.getElementById("replay");
const label = document.getElementById("pageLabel");
const pages = [...document.querySelectorAll(".page")];

const labels = ["Cover", "Chapter One", "Chapter Two", "A Special Note", "The End"];
let current = 0;

function render() {
  pages.forEach((page, i) => {
    const index = Number(page.dataset.page);
    if (index < current) {
      page.style.transform = "rotateY(-180deg)";
      page.style.zIndex = index + 1;
    } else {
      page.style.transform = "rotateY(0deg)";
      page.style.zIndex = 10 - index;
    }
  });
  label.textContent = labels[current];
  prev.disabled = current === 0;
  next.textContent = current === pages.length - 1 ? "↻" : "→";
  prev.style.opacity = current === 0 ? ".35" : "1";
}

function turnNext() {
  if (current < pages.length - 1) current++;
  else current = 0;
  render();
}

function turnPrev() {
  if (current > 0) current--;
  render();
}

openBook.addEventListener("click", () => {
  intro.classList.add("hide");
  scene.classList.add("opened");
  current = 0;
  render();
});

next.addEventListener("click", turnNext);
prev.addEventListener("click", turnPrev);

replay.addEventListener("click", () => {
  current = 0;
  render();
});

pages.forEach(page => {
  page.addEventListener("click", (event) => {
    if (event.target.closest("button")) return;
    const index = Number(page.dataset.page);
    if (index === current) turnNext();
  });
});

let startX = null;
scene.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
}, {passive: true});

scene.addEventListener("touchend", e => {
  if (startX === null) return;
  const delta = e.changedTouches[0].clientX - startX;
  if (Math.abs(delta) > 45) delta < 0 ? turnNext() : turnPrev();
  startX = null;
});

document.addEventListener("keydown", e => {
  if (!scene.classList.contains("opened")) return;
  if (e.key === "ArrowRight" || e.key === " ") turnNext();
  if (e.key === "ArrowLeft") turnPrev();
});

render();


// Magical dust / firefly particles
const sparkleBox = document.getElementById("sparkles");
const sparkleChars = ["✦", "·", "✧", "•"];
for (let i = 0; i < 34; i++) {
  const s = document.createElement("span");
  s.className = "sparkle";
  s.textContent = sparkleChars[Math.floor(Math.random() * sparkleChars.length)];
  s.style.left = `${Math.random() * 100}%`;
  s.style.top = `${35 + Math.random() * 65}%`;
  s.style.setProperty("--dur", `${4 + Math.random() * 5}s`);
  s.style.setProperty("--delay", `${Math.random() * 6}s`);
  s.style.fontSize = `${5 + Math.random() * 8}px`;
  sparkleBox.appendChild(s);
}
