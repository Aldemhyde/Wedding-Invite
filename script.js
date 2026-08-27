const button = document.getElementById("invitationButton");
const tapText = document.getElementById("tapText");

button.addEventListener("click", () => {
  const open = button.classList.toggle("open");
  button.setAttribute("aria-expanded", String(open));
  tapText.textContent = open ? "Tap again to close" : "Tap the invitation to open";
});
