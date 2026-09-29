const themeButton = document.querySelector('.lamp');
const themeRoot = document.documentElement;
const savedTheme = localStorage.getItem('samdeo-theme');

if (savedTheme === 'dark') themeRoot.dataset.theme = 'dark';

const updateThemeButton = () => {
  if (!themeButton) return;
  const dark = themeRoot.dataset.theme === 'dark';
  themeButton.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  themeButton.title = dark ? 'Switch the lights on' : 'Switch the lights off';
  themeButton.classList.toggle('is-lit', !dark);
  themeButton.classList.toggle('is-dark', dark);
};

updateThemeButton();
themeButton?.addEventListener('click', () => {
  themeRoot.dataset.theme = themeRoot.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('samdeo-theme', themeRoot.dataset.theme);
  updateThemeButton();
});

const artPage = document.querySelector('.art-body');
artPage?.addEventListener('pointermove', (event) => {
  artPage.style.setProperty('--spot-x', `${event.clientX}px`);
  artPage.style.setProperty('--spot-y', `${event.clientY}px`);
});

// Keep the warm cursor glow subtle and let link hovers pick up the site's color.
document.addEventListener('pointermove', (event) => {
  document.documentElement.style.setProperty('--hover-x', `${event.clientX}px`);
  document.documentElement.style.setProperty('--hover-y', `${event.clientY}px`);
});
