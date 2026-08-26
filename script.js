const button = document.getElementById("invitationButton");
const tapText = document.getElementById("tapText");

button.addEventListener("click", () => {
  const isOpen = button.classList.toggle("open");
  button.setAttribute("aria-expanded", String(isOpen));
  tapText.textContent = isOpen
    ? "Tap again to close"
    : "Tap the invitation to open";
});
