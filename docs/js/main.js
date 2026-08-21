/**
 * @file 프로젝트 전체 Vanilla JS 부트스트랩 엔트리포인트 — DOMContentLoaded 시점에 각 모듈 init 함수를 호출
 * @author logic-developer
 * @create 2026-08-18
 */

document.addEventListener('DOMContentLoaded', function () {
  const themeToggleEl = document.getElementById('js-theme-toggle');
  initThemeToggle(themeToggleEl);

  const searchTriggerEl = document.querySelector('.site-header__action-btn[popovertarget]');
  const searchPopoverEl = document.getElementById('js-search-popover');
  initSearchPopover(searchTriggerEl, searchPopoverEl);

  const searchInputEl = document.getElementById('js-search-input');
  initCardSearch(searchInputEl);
  initGallerySearch(searchInputEl);

  const sliderEls = document.querySelectorAll('.slider');
  sliderEls.forEach((sliderEl) => {
    initSlider(sliderEl);
  });

  const lightboxEl = document.getElementById('js-lightbox');
  const galleryTriggerEls = document.querySelectorAll('.detail-gallery__trigger');
  if (lightboxEl && galleryTriggerEls.length > 0) {
    initLightbox(lightboxEl, galleryTriggerEls);
  }
});
