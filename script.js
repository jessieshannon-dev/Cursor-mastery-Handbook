
const search = document.getElementById('search');
const cards = Array.from(document.querySelectorAll('.card'));
const topBtn = document.getElementById('topBtn');

search.addEventListener('input', () => {
  const q = search.value.toLowerCase().trim();
  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.classList.toggle('hidden', q && !text.includes(q));
  });
});

document.querySelectorAll('.copy').forEach(btn => {
  btn.addEventListener('click', async () => {
    await navigator.clipboard.writeText(btn.dataset.copy);
    const old = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = old, 1200);
  });
});

topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
