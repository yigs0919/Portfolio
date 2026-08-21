/**
 * @file 카드 슬라이더(.slider) 컴포넌트 인터랙션 — 메인 페이지 카드 그리드에서 인스턴스별로 사용
 * @author logic-developer
 * @create 2026-08-18
 */

/**
 * 단일 슬라이더 인스턴스를 초기화합니다. prev/next 버튼과 dot 클릭으로 슬라이드를
 * 순환 이동하며, .slider__slide의 is-active/hidden, .slider__dot의 is-active/aria-current를
 * 함께 동기화합니다.
 *
 * @function initSlider
 * @param {HTMLElement} sliderEl - .slider 컨테이너 요소
 * @returns {void}
 */
function initSlider(sliderEl) {
  if (!sliderEl) return;

  const slides = sliderEl.querySelectorAll('.slider__slide');
  const dots = sliderEl.querySelectorAll('.slider__dot');
  const prevBtn = sliderEl.querySelector('.slider__btn--prev');
  const nextBtn = sliderEl.querySelector('.slider__btn--next');

  if (slides.length === 0) return;

  let currentIndex = 0;

  function goTo(index) {
    currentIndex = wrapIndex(index, slides.length);

    slides.forEach((slide, i) => {
      const isActive = i === currentIndex;
      slide.classList.toggle('is-active', isActive);
      slide.hidden = !isActive;
    });

    dots.forEach((dot, i) => {
      const isActive = i === currentIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-current', String(isActive));
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      goTo(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      goTo(currentIndex + 1);
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', function () {
      const index = Number(dot.dataset.slideIndex);
      if (Number.isNaN(index)) return;
      goTo(index);
    });
  });
}
