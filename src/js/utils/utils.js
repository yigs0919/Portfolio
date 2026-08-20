/**
 * @file 슬라이더/라이트박스 등에서 공용으로 쓰이는 순수 유틸리티 함수 모음
 * @author logic-developer
 * @create 2026-08-18
 */

/**
 * 인덱스를 배열 길이 범위 내에서 순환시킵니다 (음수/초과 인덱스를 wrap).
 *
 * @function wrapIndex
 * @param {number} index - 목표 인덱스
 * @param {number} length - 전체 길이
 * @returns {number} 0 이상 length 미만으로 순환된 인덱스
 */
function wrapIndex(index, length) {
  if (!length || length <= 0) return 0;
  return ((index % length) + length) % length;
}

/**
 * "N / 총개수" 형식의 카운터 텍스트를 생성합니다.
 *
 * @function formatSlideCounter
 * @param {number} current - 현재 순번 (1부터 시작)
 * @param {number} total - 전체 개수
 * @returns {string} "N / total" 형식 문자열
 */
function formatSlideCounter(current, total) {
  return `${current} / ${total}`;
}

/**
 * 함수 호출을 지정한 지연 시간만큼 지연시켜, 마지막 호출로부터 delay(ms) 동안
 * 추가 호출이 없을 때만 실행되도록 합니다 (scroll/resize/input 이벤트 최적화용).
 *
 * @function debounce
 * @param {Function} fn - 지연 실행할 함수
 * @param {number} delay - 지연 시간(ms)
 * @returns {Function} debounce가 적용된 함수
 */
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(this, args);
    }, delay);
  };
}

/**
 * 텍스트가 검색어를 포함하는지 판별하는 순수 함수입니다 (대소문자 무시).
 * 검색어가 빈 문자열이면 항상 true(전체 표시)를 반환합니다.
 * card-search.js(카드 제목)와 gallery-search.js(갤러리 캡션)가 공용으로 사용합니다.
 *
 * @function matchesKeyword
 * @param {string} text - 비교 대상 텍스트 (소문자 변환 전 원본)
 * @param {string} keyword - 검색어 (소문자 변환 전 원본)
 * @returns {boolean} 검색어를 포함하면 true
 */
function matchesKeyword(text, keyword) {
  const normalizedKeyword = keyword.trim().toLowerCase();
  if (normalizedKeyword === '') return true;

  const normalizedText = text.trim().toLowerCase();
  return normalizedText.includes(normalizedKeyword);
}
