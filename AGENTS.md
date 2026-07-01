# Agent 지침

## 프로젝트 개요

AX Ready는 AI Agent 코딩 준비 스킬 프로젝트다. 목적은 legacy 또는 문서화가 부족한 저장소를 Claude Code, Gemini, Codex 등 여러 코딩 Agent가 작업 가능한 상태로 준비하는 것이다. 저장소별 Agent 지침, Agent별 adapter 파일, 프로젝트 문서, 오픈소스 readiness 산출물을 만든다.

## 구조

- `SKILL.md`: 핵심 스킬 workflow와 trigger metadata.
- `agents/openai.yaml`: 스킬 목록에 노출되는 UI metadata.
- `bin/ax-ready.js`: npm 설치용 CLI. 대상 프로젝트 분석에는 사용하지 않는다.
- `memory/`: AX Ready 자체를 지속적으로 개선하기 위한 내부 맥락, 의사결정, 작업 이력.
- `references/`: 필요할 때만 읽는 상세 readiness, DB 지식, 준비도 산정, framework 기준.
- `assets/templates/`: 대상 프로젝트에 맞게 수정할 source template.
- `package.json`: npm package metadata와 배포 파일 범위.
- `docs/release-strategy.md`: GitHub 및 npm 배포 전략.
- `.github/workflows/ci.yml`: PR/push 검증.
- `.github/workflows/release.yml`: version bump, tag, GitHub Release 생성, npm publish.
- `.github/workflows/npm-publish.yml`: 수동 Release 또는 publish 재시도용 npm publish fallback.

## 편집 규칙

- `SKILL.md`는 간결하고 절차 중심으로 유지한다.
- 상세 체크리스트는 `SKILL.md`를 늘리지 말고 `references/`에 둔다.
- 이 저장소 자체에 대한 판단, 변경 이유, 미해결 질문은 `memory/`에 남긴다.
- 대상 사용자 프로젝트에 `memory/`를 기본 생성하지 않는다. 사용자가 장기 운영 로그를 원할 때만 제안한다.
- 대상 사용자 프로젝트에서 DB 접근이 감지될 때만 `docs/db/`를 생성한다.
- 사용자 프로젝트 산출물의 점수 명칭은 "AI Agent Coding 준비도"를 사용한다.
- DB DDL, stored procedure definition, relationship, status/code 의미는 추측하지 말고 사용자에게 요청하도록 규칙과 템플릿에 반영한다.
- 템플릿은 범용적이되 실무적으로 유지한다. 템플릿 안에 특정 프로젝트 사실을 넣지 않는다.
- 이 프로젝트는 한국어 우선 배포를 기본으로 한다.
- 사용자가 더 강한 자동화를 명시적으로 요청하지 않았다면 의존성을 추가하지 않는다.
- 실행 스크립트보다 reference 문서와 템플릿을 우선 확장한다.

## 커밋 규칙

- 이 저장소에서 파일을 수정한 경우, 검증 후 커밋까지 진행한다.
- 커밋 전 `git status --short`로 변경 범위를 확인한다.
- 사용자가 만든 기존 변경은 임의로 stage하거나 되돌리지 않는다.
- 커밋에는 현재 작업에서 직접 수정한 파일만 포함한다.
- 커밋 메시지는 conventional commits 형식을 사용한다.
- 검증을 실행하지 못했거나 실패했으면 커밋하지 말고 이유를 보고한다.

## 검증

변경 후 `SKILL.md`, `references/`, `assets/templates/`, `README.md`, `memory/`가 서로 모순되지 않는지 확인한다.

npm 관련 변경 후 다음을 실행한다.

1. `npm run check`
2. `npm pack --dry-run`

릴리스 관련 변경은 `docs/release-strategy.md`와 `CHANGELOG.md`를 함께 확인한다.
