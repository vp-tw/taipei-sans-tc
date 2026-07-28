type Theme = 'dark' | 'light';

const root = document.documentElement;
const themeToggle = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
const themeLabel = document.querySelector<HTMLElement>('[data-theme-label]');
const liveType = document.querySelector<HTMLElement>('[data-live-type]');
const sizeInput = document.querySelector<HTMLInputElement>('[data-size]');
const weightInput = document.querySelector<HTMLInputElement>('[data-weight]');
const sizeOutput = document.querySelector<HTMLOutputElement>('[data-size-output]');
const weightOutput = document.querySelector<HTMLOutputElement>('[data-weight-output]');
const heroStage = document.querySelector<HTMLElement>('[data-hero-stage]');
const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]');

const setTheme = (theme: Theme): void => {
  root.dataset['theme'] = theme;
  themeToggle?.setAttribute('aria-pressed', String(theme === 'dark'));
  if (themeLabel) themeLabel.textContent = theme === 'dark' ? '深色' : '淺色';
  document
    .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#171a1f' : '#f8f8f5');
};

const storedTheme = window.localStorage.getItem('taipei-sans-theme');
const initialTheme: Theme =
  storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'dark';
setTheme(initialTheme);

themeToggle?.addEventListener('click', () => {
  const theme: Theme = root.dataset['theme'] === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  window.localStorage.setItem('taipei-sans-theme', theme);
});

const updateSpecimen = (): void => {
  if (!liveType || !sizeInput || !weightInput) return;

  liveType.style.fontSize = `${sizeInput.value}px`;
  liveType.style.fontWeight = weightInput.value;
  if (sizeOutput) sizeOutput.value = `${sizeInput.value}px`;
  if (weightOutput) weightOutput.value = weightInput.value;
};

sizeInput?.addEventListener('input', updateSpecimen);
weightInput?.addEventListener('input', updateSpecimen);
updateSpecimen();

if (heroStage) {
  heroStage.addEventListener('pointermove', (event: PointerEvent) => {
    const bounds = heroStage.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    heroStage.style.setProperty('--pointer-x', `${x}%`);
    heroStage.style.setProperty('--pointer-y', `${y}%`);
  });

  heroStage.addEventListener('pointerleave', () => {
    heroStage.style.setProperty('--pointer-x', '50%');
    heroStage.style.setProperty('--pointer-y', '50%');
  });
}

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
