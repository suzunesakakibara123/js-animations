//ホバーで機能するアコーディオン機能にしました。アコーディオンの内容は、ホバーしたときに高さをscrollHeightにして、ホバーが外れたときに高さを0にすることで実装しています。
const accordions = document.querySelectorAll('.list-item');

accordions.forEach(accordion => {
  const content = accordion.querySelector('.list-content');

  accordion.addEventListener('mouseenter', () => {
    content.classList.add('active');
    content.style.height = content.scrollHeight + 'px';
  });

  accordion.addEventListener('mouseleave', () => {
    content.classList.remove('active');
    content.style.height = '0px';
  });
});
