
const cursor = document.getElementById('cursor');
const follower = document.getElementById('follower');
let mx = 0, my = 0, fx = 0, fy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
});

function followCursor() {
  fx += (mx - fx) * 0.1;
  fy += (my - fy) * 0.1;
  follower.style.transform = `translate(${fx - 20}px, ${fy - 20}px)`;
  requestAnimationFrame(followCursor);
}
followCursor();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    follower.style.width = '56px';
    follower.style.height = '56px';
    follower.style.borderColor = 'rgba(250,109,155,0.6)';
    cursor.style.background = 'var(--accent2)';
  });
  el.addEventListener('mouseleave', () => {
    follower.style.width = '40px';
    follower.style.height = '40px';
    follower.style.borderColor = 'rgba(124,109,250,0.5)';
    cursor.style.background = 'var(--accent)';
  });
});
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      const bar = e.target.querySelector('.skill-bar-fill');
      if (bar) bar.style.width = bar.dataset.width + '%';
    }
  });
}, { threshold: 0.12 });
reveals.forEach(r => revealObserver.observe(r));
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    const sectionTop = s.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = s.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
