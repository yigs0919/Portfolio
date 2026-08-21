# 이가슬 포트폴리오

웹 퍼블리셔 이가슬의 포트폴리오 사이트입니다. 실무에서 진행한 프로젝트(디지털트윈, 정비통합솔루션, VTS 솔루션 시리즈 등)를 카드형 목록과 상세 페이지로 정리해 보여줍니다.

## 기술 스택

- **마크업**: Semantic HTML5, BEM 네이밍
- **스타일**: SCSS (Dart Sass 문법), 디자인 토큰(`_token.scss`) 기반, `@use`/`@forward` 모듈 시스템
- **스크립트**: Vanilla JavaScript (외부 라이브러리 없음, 함수 기반 구현)
- **빌드 도구 없음**: 별도 번들러/패키지 매니저 없이 정적 파일로 구성

## 프로젝트 구조

```
src/
├── assets/
│   ├── fonts/          # Pretendard 웹폰트 (woff/woff2)
│   ├── icons/           # 인터랙션 아이콘 SVG (검색/화살표/닫기/테마/연락처(메일·전화·GitHub) 등)
│   └── images/           # 프로젝트별 스크린샷 (프로젝트명 하위 폴더로 구분)
├── html/
│   ├── index.html        # 메인 페이지 — 프로필 소개 + 대표 프로젝트 + 프로젝트 카드 그리드
│   └── sub/               # 프로젝트별 상세 페이지 (갤러리 + 라이트박스, 일부는 케이스 스터디 포함)
├── js/
│   ├── main.js             # DOMContentLoaded 시점에 각 모듈 init 함수 호출
│   ├── modules/              # 기능별 모듈 (슬라이더/라이트박스/검색/테마 토글 등)
│   └── utils/                # 순수 유틸리티 함수 (debounce, matchesKeyword 등)
└── scss/
    ├── abstract/    # 디자인 토큰, 반응형/유틸리티 mixin
    ├── base/         # reset, typography, 폰트 등록
    ├── layout/        # header, footer, container
    ├── component/      # card, slider, lightbox, breadcrumb, button, detail-story 등 컴포넌트 단위 스타일
    ├── parts/           # hero, featured(대표 프로젝트), detail-layout 등 페이지 조합 단위
    ├── pages/             # 페이지별 미세 조정
    ├── theme/              # light/dark 테마 오버라이드
    ├── main.scss            # 전체 로드 순서를 고정하는 진입점
    └── main.css               # 컴파일된 산출물 (HTML이 실제로 참조)
```

## 주요 기능

- **카드 그리드 + 실시간 검색**: 메인 페이지 카드 제목 기준 필터링(`card-search.js`)
- **상세 페이지 갤러리 + 실시간 검색**: 각 프로젝트 페이지의 스크린샷 캡션 기준 필터링(`gallery-search.js`) — 같은 검색창을 페이지 종류에 따라 다른 대상에 연결
- **이미지 슬라이더**: 카드 썸네일 다중 이미지 순환 (이전/다음 버튼 + dot 내비게이션)
- **라이트박스**: 네이티브 `<dialog>` 기반 이미지 확대 보기, 이전/다음 순환
- **다크모드 토글**: `localStorage` 기반, `<body>` 최상단 inline script로 FOUC 방지
- **검색 popover**: 네이티브 `popover="auto"` 속성 활용
- **히어로 연락 CTA + 핵심 역량 배지**: 이메일/GitHub/전화 링크(`mailto:`/`tel:`)와 시맨틱 마크업·웹접근성·QA 프로세스 등 역량 배지 노출
- **대표 프로젝트(Featured) 섹션**: 우선순위 상위 프로젝트를 비대칭(bento) 그리드로 강조 — 전체 카드 그리드와 별개로 메인 상단에 노출
- **프로젝트 케이스 스터디**: 일부 상세 페이지(`detail-story` 컴포넌트)에 문제 → 해결 → 성과 형식으로 구체적 작업 사례 기술
- **접근성**: WCAG 2.2 AA 기준 준수 (Target Size, Focus Not Obscured, 키보드 접근성, ARIA 레이블 등)

## 실행 방법

별도 빌드 과정이 없는 정적 사이트입니다. `src/html/index.html`을 정적 서버로 열면 됩니다.

```bash
# 예시: VS Code Live Server, 또는
npx serve src/html
```

> **SCSS 컴파일**: 별도 빌드 스크립트 없이 VS Code SCSS 컴파일 확장(예: Live Sass Compiler)으로 `src/scss/main.scss` → `src/scss/main.css`를 자동 컴파일하는 구조입니다. `.scss` 파일을 저장하면 확장이 자동으로 `main.css`를 갱신하므로, HTML은 컴파일된 `main.css`만 참조합니다.

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
