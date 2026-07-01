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

## 2026-07-01: 수정 후 자동 커밋까지 진행한다

- 결정: Agent가 이 저장소를 수정하면 검증 후 커밋까지 진행한다.
- 이유: 사용자는 AX Ready를 지속적으로 업데이트하면서 변경 이력이 자동으로 남기를 원한다.
- 영향: 커밋 전 변경 범위를 확인하고, 현재 작업에서 직접 수정한 파일만 stage한다. 사용자 기존 변경은 임의로 포함하지 않는다.
