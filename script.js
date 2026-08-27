const button = document.getElementById('openInvitation');
const invitation = document.getElementById('invitation');
button.addEventListener('click', () => {
  invitation.hidden = false;
  button.setAttribute('aria-expanded', 'true');
  invitation.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
