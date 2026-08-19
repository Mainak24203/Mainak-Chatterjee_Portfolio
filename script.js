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
const heroArt = document.getElementById('heroArt');
if (heroArt && window.matchMedia('(pointer:fine)').matches) {
  const card = heroArt.querySelector('.portrait-card');
  const tags = [...heroArt.querySelectorAll('.floating-tag')];
  const core = heroArt.querySelector('.hero-3d-core');
  const rings = [...heroArt.querySelectorAll('.hero-3d-ring')];
heroArt.addEventListener('pointermove', (event) => {
  const rect = heroArt.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  if (card) {
      card.style.transform =
        `translate3d(${x * 12}px, ${y * 10}px, 0)
         rotateX(${y * -3}deg)
         rotateY(${x * 5}deg)`;
    }

    tags.forEach((tag, index) => {
      const depth = (index + 1) * 7;

      tag.style.transform =
        `translate3d(${x * depth}px, ${y * depth}px, 0)`;
    });

    if (core) {
      core.style.transform =
        `translate3d(${x * 18}px, ${y * 18}px, 70px)
         rotateX(${y * -14}deg)
         rotateY(${x * 18}deg)`;
    }

    rings.forEach((ring, index) => {
      const move = (index + 1) * 4;

      ring.style.marginLeft = `${x * move}px`;
      ring.style.marginTop = `${y * move}px`;
    });
  });

  heroArt.addEventListener('pointerleave', () => {
    if (card) card.style.transform = '';

    tags.forEach(tag => {
      tag.style.transform = '';
    });

    if (core) core.style.transform = '';

    rings.forEach(ring => {
      ring.style.marginLeft = '';
      ring.style.marginTop = '';
    });
  });
}
});
