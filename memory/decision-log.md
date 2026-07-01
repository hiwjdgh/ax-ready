# Decision Log

중요한 제품/기술 결정을 기록한다. 각 항목은 다음 Agent가 이유를 다시 추측하지 않도록 짧고 구체적으로 남긴다.

## 2026-07-01: 스킬 형태로 시작

- 결정: AX Ready를 독립 앱보다 AI Agent용 스킬로 먼저 만든다.
- 이유: 사용자는 이 프로젝트를 스킬로 이용할 예정이며, 기존 프로젝트 안에서 Agent가 바로 적용하는 workflow가 핵심이다.
- 영향: `SKILL.md`, `agents/openai.yaml`, `references/`, `assets/templates/` 구조를 사용한다.

## 2026-07-01: 한국어 우선 배포

- 결정: 초기 문서와 템플릿은 한국어를 우선한다.
- 이유: 사용자가 한국어로 먼저 배포하고 싶다고 명시했다.
- 영향: README, AGENTS, SKILL 본문, 템플릿을 한국어 중심으로 유지한다. 필요하면 나중에 영어 문서를 병행한다.

## 2026-07-01: `memory/`는 AX Ready 자체의 내부 기록으로 둔다

- 결정: `memory/` 폴더는 사용자 대상 프로젝트의 기본 산출물이 아니라 AX Ready 자체를 지속적으로 업데이트하기 위한 내부 기록으로 둔다.
- 이유: 사용자가 원한 지식 휘발 방지는 AX Ready 프로젝트를 계속 개선하기 위한 것이며, 대상 프로젝트 사용자는 Agent 산출물만 있어도 된다.
- 영향: 대상 프로젝트 기본 산출물 우선순위는 `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `docs/`로 조정한다.

## 2026-07-01: 여러 Agent와 OS를 고려한다

- 결정: Claude Code, Gemini, Codex 등 여러 Agent와 Windows/macOS/Linux 환경을 고려한다.
- 이유: 사용자가 특정 Agent나 OS에 종속되지 않는 스킬을 원한다고 명시했다.
- 영향: Agent별 adapter 템플릿을 제공하고, OS별 실행 스크립트에는 의존하지 않는다.

## 2026-07-01: 실행 스크립트보다 reference 확장을 우선한다

- 결정: `scripts/` 기반 detector를 제거하고 언어/프레임워크별 `.md` reference를 점진적으로 확장한다.
- 이유: 사용자는 로컬 Agent에게 스킬을 호출할 뿐 별도 스크립트를 직접 실행하지 않는다. 또한 여러 Agent/OS 호환성을 위해 절차 지식이 실행 도구보다 중요하다.
- 영향: PHP, Next.js, NestJS 같은 framework reference를 추가하고, 이후 지원 범위를 문서 단위로 늘린다.

## 2026-07-01: npm은 설치 채널로만 사용한다

- 결정: npm 패키지는 AX Ready 스킬 파일을 설치/업데이트하는 역할만 한다.
- 이유: 사용자는 로컬 Agent 환경에 스킬을 설치해야 하지만, 대상 프로젝트 분석은 Agent가 스킬 지침을 읽고 수행해야 한다.
- 영향: `bin/ax-ready.js`는 `install`, `path`, `help`만 제공한다. 프로젝트 분석 command는 만들지 않는다.

## 2026-07-01: GitHub를 source of truth로 둔다

- 결정: GitHub는 원본 저장소와 release 기록, npm은 설치/업데이트 채널로 둔다.
- 이유: 오픈소스 배포에서는 변경 이력, issue, PR, release note가 GitHub에 모이는 것이 가장 자연스럽다.
- 영향: `docs/release-strategy.md`, `.github/workflows/ci.yml`, `.github/workflows/npm-publish.yml`를 추가한다.

## 2026-07-01: npm publish는 Release 기반으로 실행한다

- 결정: GitHub Release가 published 상태가 되면 npm publish workflow를 실행한다.
- 이유: Git tag, release note, npm version을 연결해 배포 이력을 추적하기 쉽다.
- 영향: repository secret `NPM_TOKEN`이 필요하며, workflow는 `npm publish --provenance`를 사용한다.

## 2026-07-01: version bump와 GitHub Release 생성을 자동화한다

- 결정: `.github/workflows/release.yml`을 추가해 version bump, commit, tag, GitHub Release 생성을 자동화한다.
- 이유: 사용자가 로컬에서 `npm version`, `git push`, tag push, release note 작성을 반복하지 않기 위해서다.
- 영향: 배포 시 GitHub Actions의 `Release` workflow에서 `patch`, `minor`, `major` 중 하나만 선택하면 된다.

## 2026-07-01: release workflow에서 npm publish까지 수행한다

- 결정: `.github/workflows/release.yml` 안에서 GitHub Release 생성 후 `npm publish --provenance`를 실행한다.
- 이유: `GITHUB_TOKEN`으로 생성된 release 이벤트는 다른 workflow를 자동 트리거하지 않아 `npm-publish.yml`이 실행되지 않았다.
- 영향: `npm-publish.yml`은 수동 Release 또는 publish 재시도용 fallback으로 유지한다.

## 2026-07-01: npm provenance용 repository metadata를 명시한다

- 결정: `package.json`에 repository, bugs, homepage metadata를 추가한다.
- 이유: `npm publish --provenance`는 provenance의 GitHub repository와 `package.json` repository URL이 일치해야 한다.
- 영향: repository URL은 `https://github.com/hiwjdgh/ax-ready`로 유지한다.

## 2026-07-01: npm package name은 `ax-ready`로 확정한다

- 결정: npm package name은 scoped package가 아닌 `ax-ready`를 사용한다.
- 이유: 최초 npm 배포가 `ax-ready` 이름으로 완료되었다.
- 영향: README, package metadata, release 문서에서 `ax-ready` 이름을 유지한다.

## 2026-07-01: npm description은 한국어로 유지한다

- 결정: npm package description은 `AI Agent 코딩이 가능하도록 기존 프로젝트를 준비하는 스킬`을 사용한다.
- 이유: 초기 배포 전략이 한국어 우선이기 때문이다.
- 영향: `package.json`의 한국어 description 변경은 의도된 배포 변경으로 취급한다.

## 2026-07-01: 사용자 프로젝트 산출물에 준비도와 DB 지식 규칙을 포함한다

- 결정: AX Ready는 사용자 프로젝트에 `docs/readiness/`와 조건부 `docs/db/` 산출물을 만들도록 규칙과 템플릿을 제공한다.
- 이유: 레거시 프로젝트는 Agent 파일만으로 전환 가능성을 판단하기 어렵고, 페이지/API별 준비도와 DB 지식 coverage가 필요하다.
- 영향: `references/readiness-scoring.md`, `references/db-knowledge.md`, readiness/db 템플릿을 추가한다.

## 2026-07-01: DB 지식은 감지된 경우에만 요청하고 문서화한다

- 결정: 사용자 프로젝트에서 DB 접근이 감지된 경우에만 `docs/db/`를 만든다.
- 이유: 프론트엔드 전용 프로젝트나 DB가 없는 프로젝트에 불필요한 산출물을 만들지 않기 위해서다.
- 영향: DB DDL, stored procedure definition, relationship, status/code 의미가 부족하면 `docs/db/required-knowledge.md`에 요청 목록을 남긴다.

## 2026-07-01: 수정 후 자동 커밋까지 진행한다

- 결정: Agent가 이 저장소를 수정하면 검증 후 커밋까지 진행한다.
- 이유: 사용자는 AX Ready를 지속적으로 업데이트하면서 변경 이력이 자동으로 남기를 원한다.
- 영향: 커밋 전 변경 범위를 확인하고, 현재 작업에서 직접 수정한 파일만 stage한다. 사용자 기존 변경은 임의로 포함하지 않는다.
