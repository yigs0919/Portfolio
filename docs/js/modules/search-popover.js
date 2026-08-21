/**
 * @file 검색 popover 트리거의 aria-expanded 상태 동기화
 * @author logic-developer
 * @create 2026-08-18
 */

/**
 * 검색 popover(popover="auto")의 네이티브 toggle 이벤트를 감지하여 트리거 버튼의
 * aria-expanded 값을 popover 열림/닫힘 상태와 동기화합니다.
 * popover 자체의 열기/닫기 동작은 트리거의 popovertarget 속성이 네이티브로 처리하므로
 * 별도의 show/hide 로직은 구현하지 않습니다.
 *
 * @function initSearchPopover
 * @param {HTMLElement} triggerEl - popovertarget이 지정된 검색 트리거 버튼
 * @param {HTMLElement} popoverEl - popover="auto" 속성을 가진 검색 popover 요소
 * @returns {void}
 */
function initSearchPopover(triggerEl, popoverEl) {
  if (!triggerEl || !popoverEl) return;

  popoverEl.addEventListener('toggle', function (event) {
    const isOpen = event.newState === 'open';
    triggerEl.setAttribute('aria-expanded', String(isOpen));
  });
}
