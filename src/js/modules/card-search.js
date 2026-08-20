/**
 * @file 헤더 검색 input으로 메인 페이지 카드 그리드를 실시간 필터링
 * @author logic-developer
 * @create 2026-08-18
 */

/**
 * 헤더 검색 input(#js-search-input)의 입력값으로 메인 페이지 카드 그리드(#js-card-grid)를
 * 실시간 필터링합니다. 각 카드의 .card__title-link 텍스트를 기준으로 매칭하며,
 * 매칭되지 않는 카드는 hidden 처리하고, 검색 결과가 없으면 안내 문구(#js-card-grid-empty)를 노출합니다.
 * 카드 그리드가 없는 페이지(detail.html 등)에서 호출되어도 안전하게 아무 동작을 하지 않습니다.
 *
 * @function initCardSearch
 * @param {HTMLInputElement} inputEl - 검색어를 입력받는 input 요소 (#js-search-input)
 * @returns {void}
 */
function initCardSearch(inputEl) {
  if (!inputEl) return;

  const cardGridEl = document.getElementById('js-card-grid');
  const emptyMessageEl = document.getElementById('js-card-grid-empty');

  if (!cardGridEl || !emptyMessageEl) return;

  const cardItemEls = cardGridEl.querySelectorAll('.card-grid__item');

  if (!cardItemEls || cardItemEls.length === 0) return;

  /**
   * 현재 input 값을 기준으로 카드 아이템을 필터링하고 화면에 반영합니다.
   *
   * @function filterCards
   * @returns {void}
   */
  function filterCards() {
    const keyword = inputEl.value;
    let visibleCount = 0;

    cardItemEls.forEach((itemEl) => {
      const titleLinkEl = itemEl.querySelector('.card__title-link');
      const title = titleLinkEl ? titleLinkEl.textContent : '';
      const isMatched = matchesKeyword(title, keyword);

      itemEl.hidden = !isMatched;

      if (isMatched) {
        visibleCount += 1;
      }
    });

    emptyMessageEl.hidden = visibleCount > 0;
  }

  const debouncedFilterCards = debounce(filterCards, 150);

  inputEl.addEventListener('input', debouncedFilterCards);

  const searchFormEl = inputEl.closest('.search-form');

  if (searchFormEl) {
    searchFormEl.addEventListener('submit', function (event) {
      event.preventDefault();
      filterCards();
    });
  }
}
