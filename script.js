const greeting = document.getElementById('greeting');
const hour = new Date().getHours();
if (greeting) greeting.textContent = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
const footerYear = document.getElementById('footerYear');
if (footerYear) footerYear.textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const menu = document.getElementById('menuBtn');
const links = document.getElementById('navLinks');
menu?.addEventListener('click', () => {
  const open = links.classList.toggle('mobile-open');
  menu.setAttribute('aria-expanded', String(open));
});
links?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  links.classList.remove('mobile-open');
  menu?.setAttribute('aria-expanded','false');
}));

const sculpture = document.querySelector('.sculpture');
window.addEventListener('pointermove', event => {
  if (!sculpture || window.innerWidth < 900) return;
  const x = (event.clientX / window.innerWidth - .5) * 12;
  const y = (event.clientY / window.innerHeight - .5) * 10;
  sculpture.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${x * .18}deg)`;
});
