/**
 * @file 다크모드 토글 인터랙션 (localStorage 연동, FOUC 방지용 초기 적용 포함)
 * @author logic-developer
 * @create 2026-08-18
 */

/**
 * 다크모드 토글 button(button[role="switch"])을 초기화합니다. localStorage에 저장된
 * 테마 값을 읽어 즉시 적용하고, 버튼의 aria-checked 속성을 현재 테마와 동기화한 뒤
 * click 이벤트로 테마를 전환합니다. 시각 상태는 SCSS의
 * `.theme-switch[aria-checked="true"]` selector가 담당하므로 클래스 토글은 하지 않습니다.
 *
 * @function initThemeToggle
 * @param {HTMLButtonElement} toggleEl - role="switch"인 다크모드 토글 버튼 요소
 * @returns {void}
 */
function initThemeToggle(toggleEl) {
  const stored = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', stored);

  if (!toggleEl) return;

  toggleEl.setAttribute('aria-checked', stored === 'dark' ? 'true' : 'false');

  toggleEl.addEventListener('click', function () {
    const isDark = toggleEl.getAttribute('aria-checked') === 'true';
    const next = isDark ? 'light' : 'dark';

    toggleEl.setAttribute('aria-checked', next === 'dark' ? 'true' : 'false');
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}
