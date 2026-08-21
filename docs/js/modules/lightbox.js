/**
 * @file 상세페이지(sub/detail.html) 이미지 갤러리 라이트박스 인터랙션
 * @author logic-developer
 * @create 2026-08-18
 */

/**
 * 라이트박스 dialog(#js-lightbox)와 갤러리 트리거 버튼들을 초기화합니다.
 * 트리거 클릭 시 해당 인덱스의 이미지/캡션/카운터를 갱신하고 showModal()로 엽니다.
 * 닫기 버튼, 이전/다음 순환 이동, backdrop 클릭 닫기를 처리합니다.
 * 총 이미지 개수는 하드코딩하지 않고 triggerEls.length로 동적 계산합니다.
 *
 * @function initLightbox
 * @param {HTMLDialogElement} dialogEl - #js-lightbox dialog 요소
 * @param {NodeListOf<HTMLElement>} triggerEls - .detail-gallery__trigger 버튼 목록
 * @returns {void}
 */
function initLightbox(dialogEl, triggerEls) {
  if (!dialogEl || !triggerEls || triggerEls.length === 0) return;

  const imageEl = dialogEl.querySelector('#js-lightbox-image');
  const captionEl = dialogEl.querySelector('#js-lightbox-caption');
  const counterEl = dialogEl.querySelector('#js-lightbox-counter');
  const closeBtn = dialogEl.querySelector('.lightbox__close');
  const prevBtn = dialogEl.querySelector('.lightbox__nav--prev');
  const nextBtn = dialogEl.querySelector('.lightbox__nav--next');

  const totalCount = triggerEls.length;
  let currentIndex = 0;

  function updateContent(index) {
    currentIndex = wrapIndex(index, totalCount);

    const trigger = triggerEls[currentIndex];
    const img = trigger.querySelector('img');
    const figure = trigger.closest('.detail-gallery__figure');
    const caption = figure ? figure.querySelector('.detail-gallery__caption') : null;

    if (imageEl && img) {
      imageEl.src = img.src;
      imageEl.alt = img.alt;
    }

    if (captionEl) {
      captionEl.textContent = caption ? caption.textContent : '';
    }

    if (counterEl) {
      counterEl.textContent = formatSlideCounter(currentIndex + 1, totalCount);
    }
  }

  triggerEls.forEach((trigger, index) => {
    trigger.addEventListener('click', function () {
      updateContent(index);
      dialogEl.showModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      dialogEl.close();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      updateContent(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      updateContent(currentIndex + 1);
    });
  }

  // backdrop 클릭 닫기 — ESC 닫기는 네이티브 <dialog> 동작이라 별도 구현 불필요
  dialogEl.addEventListener('click', function (event) {
    if (event.target === dialogEl) {
      dialogEl.close();
    }
  });
}
