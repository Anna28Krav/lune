window.addEventListener('load', () => {
  setTimeout(() => document.querySelector('.preloader')?.classList.add('hide'), 900);
});

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav?.classList.remove('open'));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function showToast(text) {
  const toast = document.querySelector('.toast');
  if (!toast) return;
  toast.textContent = text;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.reset();
    showToast('Дякуємо! Заявку прийнято. Ми скоро зв’яжемося з вами.');
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
