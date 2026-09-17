const menuButton = document.querySelector('.menu-button');
menuButton?.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.sidebar a').forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.copy-button').forEach((button) => {
  button.addEventListener('click', async () => {
    const text = button.parentElement?.querySelector('code')?.textContent?.trim();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = '已复制';
      button.classList.add('copied');
      window.setTimeout(() => {
        button.textContent = '复制';
        button.classList.remove('copied');
      }, 1400);
    } catch {
      button.textContent = '请手动复制';
    }
  });
});

const navLinks = [...document.querySelectorAll('.sidebar a')];
const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
const observer = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`));
}, { rootMargin: '-20% 0px -65%', threshold: [0, .2, .6] });
sections.forEach((section) => observer.observe(section));
