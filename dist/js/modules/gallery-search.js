/**
 * @file 헤더 검색 input으로 상세 페이지의 detail-gallery 아이템을 실시간 필터링
 * @author logic-developer
 * @create 2026-08-20
 */

/**
 * 헤더 검색 input(#js-search-input)의 입력값으로 상세 페이지 갤러리(#js-detail-gallery)를
 * 실시간 필터링합니다. 각 아이템의 .detail-gallery__caption 텍스트를 기준으로 매칭하며,
 * 매칭되지 않는 아이템은 hidden 처리하고, 검색 결과가 없으면 안내 문구(#js-detail-gallery-empty)를 노출합니다.
 * 갤러리가 없는 페이지(index.html 등)에서 호출되어도 안전하게 아무 동작을 하지 않습니다.
 *
 * @function initGallerySearch
 * @param {HTMLInputElement} inputEl - 검색어를 입력받는 input 요소 (#js-search-input)
 * @returns {void}
 */
function initGallerySearch(inputEl) {
  if (!inputEl) return;

  const galleryGridEl = document.getElementById('js-detail-gallery');
  const emptyMessageEl = document.getElementById('js-detail-gallery-empty');

  if (!galleryGridEl || !emptyMessageEl) return;

  const galleryItemEls = galleryGridEl.querySelectorAll('.detail-gallery__item');

  if (!galleryItemEls || galleryItemEls.length === 0) return;

  /**
   * 현재 input 값을 기준으로 갤러리 아이템을 필터링하고 화면에 반영합니다.
   *
   * @function filterGalleryItems
   * @returns {void}
   */
  function filterGalleryItems() {
    const keyword = inputEl.value;
    let visibleCount = 0;

    galleryItemEls.forEach((itemEl) => {
      const captionEl = itemEl.querySelector('.detail-gallery__caption');
      const caption = captionEl ? captionEl.textContent : '';
      const isMatched = matchesKeyword(caption, keyword);

      itemEl.hidden = !isMatched;

      if (isMatched) {
        visibleCount += 1;
      }
    });

    emptyMessageEl.hidden = visibleCount > 0;
  }

  const debouncedFilterGalleryItems = debounce(filterGalleryItems, 150);

  inputEl.addEventListener('input', debouncedFilterGalleryItems);

  const searchFormEl = inputEl.closest('.search-form');

  if (searchFormEl) {
    searchFormEl.addEventListener('submit', function (event) {
      event.preventDefault();
      filterGalleryItems();
    });
  }
}
