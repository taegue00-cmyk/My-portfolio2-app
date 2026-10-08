// 처음 열 때 제목과 카드가 순서대로 부드럽게 나타나게 해요.
document.documentElement.classList.add('js');

window.addEventListener('DOMContentLoaded', function () {
  var items = [document.querySelector('.hero')]
    .concat(Array.prototype.slice.call(document.querySelectorAll('.card')));

  items.forEach(function (el, i) {
    setTimeout(function () { el.classList.add('show'); }, 120 + i * 160);
  });

  // 배경 도형이 마우스를 따라 아주 살짝 움직여요 (마우스가 있는 기기에서만)
  var shapes = document.querySelectorAll('.m');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !window.matchMedia('(hover: hover)').matches) return;

  window.addEventListener('mousemove', function (e) {
    var x = e.clientX / window.innerWidth - 0.5;
    var y = e.clientY / window.innerHeight - 0.5;
    shapes.forEach(function (s, i) {
      var depth = (i % 4 + 1) * 6;
      s.style.translate = (x * depth) + 'px ' + (y * depth) + 'px';
    });
  });
});
