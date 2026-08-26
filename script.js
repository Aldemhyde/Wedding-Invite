const envelopeButton = document.getElementById("envelopeButton");
const envelopeInstruction = document.getElementById("envelopeInstruction");
const continueButton = document.getElementById("continueButton");
const openInvitation = document.getElementById("openInvitation");
const invitation = document.getElementById("invitation");

function toggleEnvelope() {
  const isOpen = envelopeButton.classList.toggle("open");
  envelopeButton.setAttribute("aria-expanded", String(isOpen));
  envelopeInstruction.textContent = isOpen ? "Tap to close" : "Tap to open";
}

function goToInvitation() {
  invitation.scrollIntoView({ behavior: "smooth", block: "start" });
}

envelopeButton.addEventListener("click", toggleEnvelope);
continueButton.addEventListener("click", goToInvitation);
openInvitation.addEventListener("click", goToInvitation);
