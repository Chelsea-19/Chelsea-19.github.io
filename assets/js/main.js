(function () {
  'use strict';
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const menu = document.getElementById('navMenuBtn');
  const links = document.getElementById('navLinks');
  const zh = root.lang.startsWith('zh');
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  const mobile = window.matchMedia('(max-width: 1050px)');
  let savedTheme;
  try { savedTheme = localStorage.getItem('theme'); } catch (_) { /* Storage is optional. */ }
  if (!['light', 'dark'].includes(savedTheme)) savedTheme = null;
  function applyTheme(theme) {
    root.dataset.theme = theme;
    if (!toggle) return;
    const dark = theme === 'dark';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', zh ? (dark ? '切换至浅色模式' : '切换至深色模式') : (dark ? 'Switch to light theme' : 'Switch to dark theme'));
    toggle.innerHTML = dark
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/></svg>'
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.2A8.7 8.7 0 0 1 9.8 3.5a8.7 8.7 0 1 0 10.7 10.7Z"/></svg>';
  }
  applyTheme(savedTheme || (preference.matches ? 'dark' : 'light'));
  if (toggle) toggle.addEventListener('click', function () {
    savedTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(savedTheme);
    try { localStorage.setItem('theme', savedTheme); } catch (_) { /* Continue without persistence. */ }
  });
  preference.addEventListener('change', function (event) { if (!savedTheme) applyTheme(event.matches ? 'dark' : 'light'); });
  if (menu && links) {
    function setMenu(open) {
      links.classList.toggle('open', open);
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', zh ? (open ? '关闭导航菜单' : '打开导航菜单') : (open ? 'Close navigation menu' : 'Open navigation menu'));
    }
    menu.addEventListener('click', function (event) {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      setMenu(open);
      if (open && event.detail === 0) links.querySelector('a').focus();
    });
    links.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (event) { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { setMenu(false); menu.focus(); } });
    document.addEventListener('click', function (event) { if (!event.target.closest('.top-nav')) setMenu(false); });
    mobile.addEventListener('change', function () { setMenu(false); });
  }
})();
