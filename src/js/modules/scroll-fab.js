/**
 * @file 우측 하단 고정 플로팅 버튼 — 클릭 시 페이지 맨 위/맨 아래로 스무스 스크롤
 * @author logic-developer
 * @create 2026-08-21
 */

/**
 * data-action="scroll:top" / "scroll:bottom" 버튼에 스크롤 동작을 연결합니다.
 * prefers-reduced-motion 환경에서는 브라우저가 자동으로 즉시 이동으로 대체합니다.
 *
 * @function initScrollFab
 * @param {HTMLElement} topBtnEl - 맨 위로 이동 버튼
 * @param {HTMLElement} bottomBtnEl - 맨 아래로 이동 버튼
 * @returns {void}
 */
function initScrollFab(topBtnEl, bottomBtnEl) {
  if (topBtnEl) {
    topBtnEl.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (bottomBtnEl) {
    bottomBtnEl.addEventListener('click', function () {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    });
  }
}
