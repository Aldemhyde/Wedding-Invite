const envelopeButton = document.getElementById("envelopeButton");
const envelopeInstruction = document.getElementById("envelopeInstruction");

function toggleEnvelope() {
  const isOpen = envelopeButton.classList.toggle("open");
  envelopeButton.setAttribute("aria-expanded", String(isOpen));
  envelopeInstruction.textContent = isOpen
    ? "Tap again to close"
    : "Tap the envelope to open";
}

envelopeButton.addEventListener("click", toggleEnvelope);
