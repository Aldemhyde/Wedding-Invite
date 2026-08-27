const button = document.getElementById('invitationButton');
const tapText = document.getElementById('tapText');

button.addEventListener('click', () => {
  const isOpen = button.classList.toggle('open');
  button.setAttribute('aria-expanded', String(isOpen));
  tapText.textContent = isOpen
    ? '❧   TAP AGAIN TO CLOSE   ❦'
    : '❧   TAP THE INVITATION TO OPEN   ❦';
});
