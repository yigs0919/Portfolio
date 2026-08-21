/**
 * @file 모바일 햄버거 메뉴 popover의 aria-expanded 상태 동기화 및 링크 클릭 시 닫기 처리
 * @author logic-developer
 * @create 2026-08-21
 */

/**
 * 모바일 메뉴 popover(popover="auto")의 네이티브 toggle 이벤트를 감지하여 트리거 버튼의
 * aria-expanded 값을 popover 열림/닫힘 상태와 동기화합니다.
 * popover 자체의 열기/닫기 동작은 트리거의 popovertarget 속성이 네이티브로 처리하므로
 * 별도의 show/hide 로직은 구현하지 않으며, 메뉴 내부 링크 클릭 시에는 페이지 이동이
 * popover 바깥 클릭이 아니므로 자동으로 닫히지 않아 hidePopover()를 명시적으로 호출합니다.
 *
 * @function initMobileNav
 * @param {HTMLElement} triggerEl - popovertarget이 지정된 햄버거 트리거 버튼
 * @param {HTMLElement} popoverEl - popover="auto" 속성을 가진 모바일 메뉴 요소
 * @returns {void}
 */
function initMobileNav(triggerEl, popoverEl) {
  if (!triggerEl || !popoverEl) return;

  popoverEl.addEventListener('toggle', function (event) {
    const isOpen = event.newState === 'open';
    triggerEl.setAttribute('aria-expanded', String(isOpen));
  });

  const linkEls = popoverEl.querySelectorAll('.site-header__mobile-nav-link');
  linkEls.forEach((linkEl) => {
    linkEl.addEventListener('click', function () {
      popoverEl.hidePopover();
    });
  });
}
