(() => {
  const button = document.getElementById('invitationButton');
  const tapText = document.getElementById('tapText');

  if (!button || !tapText) return;

  button.addEventListener('click', () => {
    const open = button.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
    tapText.textContent = open
      ? '❧  TAP AGAIN TO CLOSE  ❦'
      : '❧  TAP THE INVITATION TO OPEN  ❦';
  });
})();
