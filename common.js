function equalHeight(selector) {
  const elements = document.querySelectorAll(selector);
  let maxHeight = 0;

  if (!elements.length) return;

  // Сброс высоты
  elements.forEach(el => {
    el.style.height = 'auto';
  });

  // Поиск максимальной высоты
  elements.forEach(el => {
    maxHeight = Math.max(maxHeight, el.offsetHeight);
  });

  // Применение
  elements.forEach(el => {
    el.style.height = maxHeight + 'px';
  });
}
window.addEventListener('load', () => {
  equalHeight('.doctor-card p');
  equalHeight('.doctor-card h3');
});
window.addEventListener('resize', () => {
  equalHeight('.doctor-card p');
  equalHeight('.doctor-card h3');
});
