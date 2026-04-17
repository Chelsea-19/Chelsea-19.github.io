(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const navMenuBtn = document.getElementById('navMenuBtn');
  const navLinks = document.getElementById('navLinks');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (themeToggle) {
      themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  const storedTheme = localStorage.getItem('theme');
  const preferredDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(storedTheme || (preferredDark ? 'dark' : 'light'));

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      localStorage.setItem('theme', nextTheme);
    });
  }

  if (navMenuBtn && navLinks) {
    navMenuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navMenuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
