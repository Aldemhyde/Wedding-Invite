(() => {
  const invitation = document.getElementById('invitationButton');
  const tapText = document.getElementById('tapText');
  if (!invitation || !tapText) return;

  invitation.addEventListener('click', () => {
    const isOpen = invitation.classList.toggle('is-open');
    invitation.setAttribute('aria-expanded', String(isOpen));
    tapText.textContent = isOpen
      ? '❧  TAP AGAIN TO CLOSE  ❦'
      : '❧  TAP THE INVITATION TO OPEN  ❦';
  });
})();
