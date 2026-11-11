/* Küçük site davranışları: mobil menü, kaydırma animasyonu, yıl.
   JavaScript kapalıyken içerik tamamen görünür kalır. */

(() => {
  const menu = document.querySelector('.nav-menu');
  document.querySelectorAll('.menu-panel a').forEach((link) => {
    link.addEventListener('click', () => menu?.removeAttribute('open'));
  });

  document.addEventListener('click', (event) => {
    if (menu?.open && !menu.contains(event.target)) menu.removeAttribute('open');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu?.open) menu.removeAttribute('open');
  });

  const targets = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('in'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );

  targets.forEach((el) => observer.observe(el));
})();
