// Cursor glow follows the mouse (desktop only)
const glow = document.querySelector('.cursor-glow');
if (glow && matchMedia('(pointer: fine)').matches) {
  window.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }, { passive: true });
}

// Nav border on scroll
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Reveal on scroll
const revealTargets = document.querySelectorAll('.section-head, .pillar, .card, .mini-card, .price-card, .faq details, .bridge-copy, .bridge-visual, .story-table, .story-steps');
revealTargets.forEach((el) => el.classList.add('reveal'));
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealTargets.forEach((el) => io.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('in'));
}

// Context Bridge demo copy button
document.querySelectorAll('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const text = document.getElementById('context-text').innerText;
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = 'Copied ✓';
    } catch {
      btn.textContent = 'Copy failed';
    }
    setTimeout(() => (btn.textContent = 'Copy Context'), 1600);
  });
});

// Demo Allow/Deny buttons give quick feedback
document.querySelectorAll('.session-actions').forEach((group) => {
  group.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    const allowed = b.classList.contains('allow');
    group.innerHTML = `<span class="status ${allowed ? 'done' : 'error'}">${allowed ? 'Approved' : 'Denied'}</span>`;
  });
});

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
