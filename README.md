# 이가슬 포트폴리오

웹 퍼블리셔 이가슬의 포트폴리오 사이트입니다. 실무에서 진행한 프로젝트(디지털트윈, 정비통합솔루션, VTS 솔루션 시리즈 등)를 카드형 목록과 상세 페이지로 정리해 보여줍니다.

## 기술 스택

- **마크업**: Semantic HTML5, BEM 네이밍
- **스타일**: SCSS (Dart Sass 문법), 디자인 토큰(`_token.scss`) 기반, `@use`/`@forward` 모듈 시스템
- **스크립트**: Vanilla JavaScript (외부 라이브러리 없음, 함수 기반 구현)
- **빌드 도구 없음**: 별도 번들러/패키지 매니저 없이 정적 파일로 구성

## 프로젝트 구조

최상위는 `src/`(작업 소스)와 `docs/`(GitHub Pages 배포 산출물, 아래 "배포" 섹션 참고) 두 폴더로 나뉩니다. `src/` 하위 4개 폴더(`assets`, `html`, `js`, `scss`)의 자식 파일을 기준으로 정리하면 다음과 같습니다.

### `src/assets/` — 정적 리소스

**`fonts/`** — Pretendard 웹폰트, 4가지 굵기 × woff/woff2 2종 (총 8개)

| 파일 | 용도 |
| --- | --- |
| `Pretendard-Regular.woff(2)` | 기본 굵기(400) — 본문 텍스트 |
| `Pretendard-Medium.woff(2)` | 중간 굵기(500) — 배지, 보조 라벨 |
| `Pretendard-SemiBold.woff(2)` | 준굵게(600) — 소제목 |
| `Pretendard-Bold.woff(2)` | 굵게(700) — 헤딩, 로고 |

**`icons/`** — 인터랙션 아이콘 SVG 9개

| 파일 | 용도 |
| --- | --- |
| `ico--search.svg` | 헤더 검색 토글 버튼, 검색 폼 제출 버튼 |
| `ico--arrow-left.svg` | 슬라이더 이전 버튼, 라이트박스 이전 내비게이션 |
| `ico--arrow-right.svg` | 슬라이더/라이트박스 다음 버튼 — `scroll-fab` 위/아래 버튼도 이 svg를 ±90° 회전해 재사용(`icon--arrow-up`/`--arrow-down`) |
| `ico--close.svg` | 라이트박스 닫기 버튼 |
| `ico--mail.svg` | 히어로 이메일 CTA, 푸터 연락처 |
| `ico--phone.svg` | 푸터 전화번호 연락처 |
| `ico--github.svg` | 푸터 GitHub 링크 |
| `ico--theme-sun.svg`, `ico--theme-moon.svg` | **현재 미사용.** 다크모드 토글 아이콘 원본 — `mask-image`의 외부 svg 참조가 `file://`에서 조용히 실패하는 문제로 `_theme-switch.scss`에 인라인 `data:` URI로 옮겨졌고, 이 두 파일은 참조되지 않는 원본 보관용으로만 남아있음 (기술 노트 참고) |

**`images/`** — 프로젝트별 스크린샷 (프로젝트당 하위 폴더 1개) + 공용 이미지 2개

| 폴더/파일 | 매핑되는 페이지 | 비고 |
| --- | --- | --- |
| `dt/` (18장) | `sub/dt.html` — 디지털트윈 | 한국수력원자력 |
| `e-npcr/` (7장) | `sub/e-npcr.html` — E-NPCR | 한국수력원자력 |
| `mis/` (12장) | `sub/mis.html` — 정비통합솔루션 | 한국수력원자력 |
| `pipe-thinning/` (7장) | `sub/pipe-thinning.html` — 배관 감육 | 한국수력원자력 |
| `ssnc/` (10장) | `sub/ssnc.html` — 스마트 넷제로 시티 | 한국수력원자력 |
| `ai-safeguard/` (3장) | `sub/ai-safeguard.html` — AI 융합형 안전관리 플랫폼 | 중기청 |
| `tp/` (2장) | `sub/tp.html` — 나노 입자 합성 가상제조 시스템 | 대전 테크노파크·한국화학연구원 |
| `tikitanote/` (5장) | `sub/tikitanote.html` — 티키타노트 | (주) 에어사운드 |
| `s-project/` (43장) | `sub/sproject.html` — 소규모 프로젝트 | 폴더명(`s-project`)과 페이지 파일명(`sproject`)이 다르니 주의 |
| `apm/` (13장) | `sub/apm.html` — APM 모니터링 | (주) 스마트프로 |
| `vts_builder/` (8장) | `sub/vts-builder.html` — VTS 솔루션 · 빌더 | 폴더명만 언더스코어(`vts_builder`), 나머지 vts 폴더는 전부 하이픈 표기 |
| `vts-login/` (11장) | `sub/vts-login.html` — VTS 솔루션 · 로그인 | (주) 스마트프로 |
| `vts-portal-main/` (4장) | `sub/vts-portal-main.html` — VTS 솔루션 · 포털 메인 | (주) 스마트프로 |
| `vts-portal-admin-list/` (36장) | `sub/vts-portal-admin-list.html` — VTS 솔루션 · 포털 관리자 상세페이지 | (주) 스마트프로 |
| `vts-portal-user-list/` (24장) | `sub/vts-portal-user-list.html` — VTS 솔루션 · 포털 사용자 상세페이지 | (주) 스마트프로 |
| `vts-presenter/` (36장) | `sub/vts-presenter.html` — VTS 솔루션 · 프레젠터 | (주) 스마트프로 |
| `yigs_profile.jpg` | `index.html` 히어로 섹션 | 프로필 사진 |
| `yigs_og-image.png` | 전 페이지 `<head>` | Open Graph 공유 썸네일 (1200×630) |

### `src/html/` — 마크업

| 파일 | 설명 |
| --- | --- |
| `index.html` | 메인 페이지 — 히어로(프로필 소개) + 대표 프로젝트(Featured bento) + 전체 프로젝트 카드 그리드 |
| `sub/*.html` (16개) | 프로젝트별 상세 페이지. 파일명 ↔ 프로젝트명 매핑은 위 `assets/images` 표 참고. 갤러리 + 라이트박스가 공통이며, 일부(예: `dt.html`)는 `detail-story`(문제→해결→성과) 케이스 스터디 섹션을 추가로 포함 |

### `src/js/` — Vanilla JavaScript (모듈당 `init*()` 함수 하나, `main.js`에서 조립)

| 파일 | 설명 |
| --- | --- |
| `main.js` | DOMContentLoaded 시점에 아래 모든 모듈의 init 함수를 호출하는 부트스트랩 엔트리포인트 |
| `modules/theme-toggle.js` | 다크모드 토글 (`localStorage` 연동, FOUC 방지용 초기 적용 포함) |
| `modules/search-popover.js` | 검색 popover 트리거의 `aria-expanded` 상태 동기화 |
| `modules/mobile-nav.js` | 모바일 햄버거 메뉴 popover의 `aria-expanded` 동기화 + 링크 클릭 시 닫기 처리 |
| `modules/scroll-fab.js` | 우측 하단 플로팅 버튼 — 클릭 시 페이지 맨 위/맨 아래로 스무스 스크롤 |
| `modules/slider.js` | 카드 슬라이더(`.slider`) 인터랙션 — 메인 페이지 카드 그리드에서 인스턴스별로 사용 |
| `modules/lightbox.js` | 상세 페이지 이미지 갤러리 라이트박스 인터랙션 |
| `modules/card-search.js` | 헤더 검색 input으로 메인 페이지 카드 그리드를 실시간 필터링 |
| `modules/gallery-search.js` | 헤더 검색 input으로 상세 페이지 `detail-gallery` 아이템을 실시간 필터링 |
| `utils/utils.js` | 슬라이더/라이트박스 등에서 공용으로 쓰는 순수 유틸리티 함수 모음(debounce 등) |

### `src/scss/` — 스타일 (Dart Sass, `@use`/`@forward` 모듈 시스템)

| 파일 | 설명 |
| --- | --- |
| `main.scss` | 전체 로드 순서를 고정하는 진입점 (순서는 아래 "SCSS 로드 순서" 참고) |
| `main.css` | 컴파일된 산출물 — HTML이 실제로 참조하는 파일 |
| `main.min.css` | **미사용.** 어떤 스크립트가 생성하는지 불명확하고 어떤 HTML도 참조하지 않음 — 정리 대상 후보 |
| `vendor/` | 비어 있는 placeholder 폴더 (서드파티 css 도입 시 사용 예정) |

- **`abstract/`** — `_token.scss`(색상/spacing/타이포/z-index/duration 디자인 토큰 단일 진실 공급원), `_mixins.scss`(반응형 breakpoint, flex-center 등 유틸리티 mixin), `_index.scss`(forward 진입점)
- **`base/`** — `_reset.scss`, `_typography.scss`, `_font-face.scss`(Pretendard 등록), `_index.scss`
- **`layout/`** — `_header.scss`(sticky 헤더 + 모바일 햄버거 메뉴), `_footer.scss`, `_container.scss`(sticky 헤더 대응 scroll-margin 보정), `_index.scss`
- **`component/`** — `_icon.scss`, `_button.scss`, `_card.scss`(카드 그리드), `_slider.scss`, `_lightbox.scss`, `_search-form.scss`, `_skip-link.scss`, `_breadcrumb.scss`, `_detail-hero.scss`, `_detail-meta.scss`, `_detail-story.scss`, `_detail-gallery.scss`, `_tech-stack.scss`, `_theme-switch.scss`, `_scroll-fab.scss`, `_index.scss`
- **`parts/`** — `_hero.scss`, `_featured.scss`(대표 프로젝트 bento 그리드), `_detail-layout.scss`(상세 페이지 사이드바 레이아웃), `_index.scss`
- **`pages/`** — `_sub-page.scss`(상세 페이지 전용 미세 조정), `_index.scss`
- **`theme/`** — `_light.scss`, `_dark.scss`, `_index.scss`

## 주요 기능

- **카드 그리드 + 실시간 검색**: 메인 페이지 카드 제목 기준 필터링(`card-search.js`)
- **상세 페이지 갤러리 + 실시간 검색**: 각 프로젝트 페이지의 스크린샷 캡션 기준 필터링(`gallery-search.js`) — 같은 검색창을 페이지 종류에 따라 다른 대상에 연결
- **이미지 슬라이더**: 카드 썸네일 다중 이미지 순환 (이전/다음 버튼 + dot 내비게이션)
- **라이트박스**: 네이티브 `<dialog>` 기반 이미지 확대 보기, 이전/다음 순환
- **다크모드 토글**: `localStorage` 기반, `<body>` 최상단 inline script로 FOUC 방지
- **검색 popover**: 네이티브 `popover="auto"` 속성 활용
- **모바일 내비게이션**: 태블릿 미만 뷰포트에서는 인라인 메뉴 대신 햄버거 토글 버튼 + `popover="auto"` 기반 드롭다운(`mobile-nav.js`)으로 전환, 3선 아이콘이 열림 상태에서 X로 모핑
- **스크롤 플로팅 버튼**: 우측 하단 고정 버튼으로 페이지 맨 위/맨 아래 즉시 이동(`scroll-fab.js`, `scrollTo({behavior:'smooth'})`)
- **히어로 연락 CTA + 핵심 역량 배지**: 이메일/GitHub/전화 링크(`mailto:`/`tel:`)와 시맨틱 마크업·웹접근성·QA 프로세스 등 역량 배지 노출
- **대표 프로젝트(Featured) 섹션**: 우선순위 상위 프로젝트를 비대칭(bento) 그리드로 강조 — 전체 카드 그리드와 별개로 메인 상단에 노출
- **프로젝트 케이스 스터디**: 일부 상세 페이지(`detail-story` 컴포넌트)에 문제 → 해결 → 성과 형식으로 구체적 작업 사례 기술
- **Open Graph 메타태그**: 카카오톡/슬랙/디스코드 등에 링크 공유 시 제목·설명·썸네일 미리보기 노출 (`og:title`/`og:description`/`og:image`/`og:url`/`og:type`, `twitter:card`)
- **접근성**: WCAG 2.2 AA 기준 준수 (Target Size, Focus Not Obscured, 키보드 접근성, ARIA 레이블 등)

## 실행 방법

별도 빌드 과정이 없는 정적 사이트입니다. `src/html/index.html`을 정적 서버로 열면 됩니다.

```bash
# 예시: VS Code Live Server, 또는
npx serve src/html
```

> **SCSS 컴파일**: 별도 빌드 스크립트 없이 VS Code SCSS 컴파일 확장(예: Live Sass Compiler)으로 `src/scss/main.scss` → `src/scss/main.css`를 자동 컴파일하는 구조입니다. `.scss` 파일을 저장하면 확장이 자동으로 `main.css`를 갱신하므로, HTML은 컴파일된 `main.css`만 참조합니다.

## 배포 (`docs/` 폴더)

GitHub Pages는 `docs/` 폴더를 배포 루트로 서빙합니다. `docs/`는 `src/`의 빌드 산출물을 **수동으로 미러링한 폴더**이며, 별도 빌드 스크립트가 없으므로 `src`를 수정한 뒤에는 반드시 `docs`에도 같은 내용을 반영해야 합니다.

경로 규칙만 다릅니다 (내용은 완전히 동일):

| src 기준 경로 | docs 기준 경로 |
| --- | --- |
| `src/html/index.html`의 `../scss/main.css` | `docs/index.html`의 `css/main.css` |
| `src/html/sub/*.html`의 `../../` 프리픽스 | `docs/sub/*.html`의 `../` 프리픽스 (한 단계 적게) |
| `src/scss/main.css` | `docs/css/main.css` (내용 그대로, 경로 변환 불필요) |
| `src/js/**` | `docs/js/**` (내용 그대로, 경로 변환 불필요) |

`docs/`는 `src/`가 한 단계 더 깊은 폴더 구조(`src/html/`, `src/scss/`)를 갖는 반면 배포 루트 자체이기 때문에, HTML 안의 상대경로만 한 단계씩 줄이고 `scss` 폴더명을 `css`로 바꿔주면 됩니다. `main.min.css`나 `.scss` 소스 파일은 `docs`에 존재하지 않는 산출물이므로 동기화 대상이 아닙니다.

## SCSS 로드 순서

`main.scss`가 아래 순서로 고정 로드합니다 (하위 계층이 상위 계층의 토큰/mixin에 의존하므로 순서 변경 시 컴파일 오류 발생 가능):

```
abstract (token → mixins) → base → layout → component → parts → pages → theme
```

## 브라우저 지원 범위

Chrome / Edge / Firefox / Safari 최신 2개 메이저 버전, iOS Safari 최신 2개 메이저 버전. 이 기준 미만 버전은 별도 폴백 없이 저하(degraded)를 허용합니다.

## 코드 컨벤션

- **BEM**: `block__element--modifier` 형식, 상태는 `is-` prefix, JS 훅은 `js-` prefix (스타일링 금지)
- **ID**: JS 훅과 ARIA 연결(`aria-labelledby` 등) 전용 — 스타일링에 사용하지 않음
- **용어 표기**: 기술 용어는 한글 음차 대신 영어 원어 사용 (예: "핸드오프" 대신 "Handoff")

## 기술 노트

- **아이콘 마스킹은 반드시 인라인 `data:` URI로**: `mask-image`가 외부 svg 파일(`url('../assets/icons/...')`)을 참조하면 `file://` 프로토콜에서 크로스오리진 리소스로 취급되어 로드 자체가 조용히 실패한다 (`background-image`는 동일 상황에서도 정상 로드됨). 새 아이콘을 mask 방식으로 추가할 때는 svg를 인라인 `data:image/svg+xml,...` URI로 변환해 넣을 것 (`theme-switch__icon` 참고).
- **`mask-mode`는 항상 명시**: 지정하지 않으면 사실상 luminance 취급이라, 검정 선(stroke) 위주 아이콘은 명도가 낮아 마스크가 거의 다 걷어내 버린다. `mask-mode: alpha` (+ `-webkit-mask-mode: alpha`)를 함께 지정할 것.
- **CSS Grid에서 이미지가 포함된 grid item은 `min-width: 0` 필수**: `grid-template-columns: 1fr`처럼 유연한 트랙이어도, item 내부에 `<img>`가 있으면 자동 최소 크기가 이미지의 콘텐츠 기반 크기로 잡혀 트랙이 뷰포트보다 넓게 밀려날 수 있다 (`.card-grid__item` 참고).
