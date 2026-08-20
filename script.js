const progressBar = document.querySelector('.scroll-progress');
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.nav-links');
const modalBackdrop = document.querySelector('.about-modal-backdrop');
const closeButton = document.querySelector('.about-modal-close');
const openButton = document.querySelector('[data-open-about]');

function updateProgress() {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${total > 0 ? (window.scrollY / total) * 100 : 0}%`;
}

function closeMenu() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}

function openAbout() {
  closeMenu();
  modalBackdrop.hidden = false;
  document.body.style.overflow = 'hidden';
  closeButton.focus();
}

function closeAbout() {
  modalBackdrop.hidden = true;
  document.body.style.overflow = '';
  openButton.focus();
}

window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
openButton.addEventListener('click', openAbout);
closeButton.addEventListener('click', closeAbout);
modalBackdrop.addEventListener('mousedown', (event) => {
  if (event.target === modalBackdrop) closeAbout();
});
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modalBackdrop.hidden) closeAbout();
});
