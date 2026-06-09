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

/****** Вариант 2 с учетом  Media, когда на определенном разрешении не нужно подстраивать автовысоту *******/
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
            if($(window).width() > 992){
                equalHeight('.desc');
                equalHeight('.z_row');
            }
        });
        window.addEventListener('resize', () => {
            if($(window).width() > 992){
                equalHeight('.desc');
                equalHeight('.z_row');
            }
        });
