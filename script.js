const envelopeButton = document.getElementById("envelopeButton");
const tapLabel = document.getElementById("tapLabel");
const openInvitation = document.getElementById("openInvitation");
const details = document.getElementById("details");

let isOpen = false;

function updateEnvelope() {
  envelopeButton.classList.toggle("open", isOpen);
  envelopeButton.setAttribute("aria-expanded", String(isOpen));
  tapLabel.textContent = isOpen ? "Tap again to close" : "Tap to open";
}

envelopeButton.addEventListener("click", () => {
  isOpen = !isOpen;
  updateEnvelope();
});

openInvitation.addEventListener("click", () => {
  details.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

updateEnvelope();
