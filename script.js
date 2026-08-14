const greeting = document.getElementById('greeting');
const hour = new Date().getHours();
greeting.textContent = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');
menu?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  if (open) {
    links.style.display='flex'; links.style.position='absolute'; links.style.top='78px'; links.style.left='0'; links.style.right='0';
    links.style.background='rgba(244,244,240,.98)'; links.style.padding='20px 24px'; links.style.flexDirection='column'; links.style.borderBottom='1px solid #ddd';
  } else links.removeAttribute('style');
});