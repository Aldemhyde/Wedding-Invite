const invitationButton = document.getElementById("envelopeButton");
const invitationInstruction = document.getElementById("envelopeInstruction");

invitationButton.addEventListener("click", () => {
  const isOpen = invitationButton.classList.toggle("open");
  invitationButton.setAttribute("aria-expanded", String(isOpen));
  invitationInstruction.textContent = isOpen
    ? "Tap again to close your invitation"
    : "Tap to open your invitation";
});
