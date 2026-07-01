---
name: ax-ready
description: AI 시대 이전에 만들어졌거나 문서화가 부족한 소프트웨어 프로젝트를 AI Agent 코딩이 가능한 상태로 준비한다. Codex, Claude Code, Gemini CLI 등 여러 코딩 Agent가 공통으로 읽을 수 있는 AGENTS.md, CLAUDE.md, GEMINI.md, README, 프로젝트 문서, 설정/테스트/빌드 지침, 기여 가이드, CI 권장사항 등 agent-ready 산출물을 만들거나 개선해야 할 때 사용한다.
---

# AX Ready

기존 프로젝트를 여러 AI 코딩 Agent가 추측을 줄이고 이해, 수정, 검증, 유지보수할 수 있는 상태로 준비한다.

## 작업 흐름

1. 파일을 쓰기 전에 대상 프로젝트를 먼저 조사한다.
   - 최상위 파일과 디렉터리를 확인한다.
   - 언어, 프레임워크, 패키지 매니저, 테스트 도구, 빌드 도구, lint/typecheck 도구, 생성 산출물, 배포 표면을 감지한다.
   - 기존 README, docs, CI, 패키지 manifest, 설정 파일, entrypoint를 읽는다.
   - 대상 프로젝트가 Git 저장소이면 `git status`를 확인한다.

2. 간결한 프로젝트 인벤토리를 만든다.
   - 코드와 문서에서 앱/라이브러리의 목적을 파악한다.
   - setup, dev, build, test, lint, typecheck 명령을 확인한다.
   - 중요한 디렉터리와 책임 경계를 식별한다.
   - Agent가 피해야 할 파일을 식별한다. 예: 생성 파일, 의도 없는 lockfile 변경, vendored code, migration, snapshot, build artifact.

3. readiness 산출물을 만들거나 갱신한다.
   - 기존 파일을 덮어쓰기보다 읽고 병합한다.
   - 누락된 섹션은 `assets/templates/`의 한국어 템플릿을 기준으로 보강한다.
   - 지침은 사실 기반, 저장소 맞춤형으로 작성한다. 명령을 지어내지 말고 모르는 항목은 명시한다.
   - `AGENTS.md`를 공통 Agent-facing 계약의 중심으로 둔다.
   - 필요한 경우 Claude Code용 `CLAUDE.md`, Gemini용 `GEMINI.md`처럼 Agent별 adapter 파일을 추가한다.

4. 검증한다.
   - 프로젝트에 이미 존재하는 가벼운 local check를 실행한다. 예: format, lint, typecheck, unit test, build.
   - 명령을 모르거나 실행할 수 없으면 성공한 것처럼 쓰지 말고 readiness gap에 남긴다.
   - 변경 파일과 남은 gap을 요약한다.

## 산출물 우선순위

다음 순서로 만들거나 갱신한다.

1. `AGENTS.md` - Agent 공통 지침, 명령, 아키텍처 메모, 작업 규칙, 검증.
2. `CLAUDE.md` - Claude Code가 우선 읽을 adapter 지침. 필요하면 `AGENTS.md`를 참조하도록 짧게 만든다.
3. `GEMINI.md` - Gemini 계열 Agent가 우선 읽을 adapter 지침. 필요하면 `AGENTS.md`를 참조하도록 짧게 만든다.
4. `README.md` - 사람을 위한 목적, quick start, 주요 명령.
5. `docs/project-overview.md` - 간결한 시스템 요약.
6. `docs/architecture.md` - 모듈, 데이터 흐름, 경계, 외부 서비스.
7. `docs/development.md` - setup, 환경 변수, 로컬 작업 흐름.
8. `docs/testing.md` - 테스트 전략, 명령, gap.
9. `docs/agent-workflows.md` - 반복되는 AI Agent 작업 절차와 체크리스트.
10. 요청 시 오픈소스 파일: `CONTRIBUTING.md`, `SECURITY.md`, `LICENSE`, issue template, PR template, CI.

## 번들 리소스

- 무엇을 조사하고 어떤 gap을 남길지 판단할 때 `references/readiness-checklist.md`를 읽는다.
- 발견 내용을 어느 산출물에 넣을지 정할 때 `references/output-map.md`를 읽는다.
- 언어/프레임워크별 분석이 필요하면 `references/frameworks/`에서 해당 파일을 읽는다.
  - PHP 프로젝트: `references/frameworks/php.md`
  - Next.js 프로젝트: `references/frameworks/nextjs.md`
  - NestJS 프로젝트: `references/frameworks/nestjs.md`
- `assets/templates/`를 시작점으로 사용하되, 완료 전 모든 placeholder를 대상 프로젝트에 맞게 수정한다.

## 규칙

- 사용자 변경사항을 보존한다. 기존 프로젝트 문서는 반드시 읽고 병합한다.
- readiness 문서는 유지보수 가능한 길이로 유지한다.
- 추측보다 manifest와 CI에서 확인한 명령을 우선한다.
- 저장소에 여러 app/package가 있으면 하나의 root 명령으로 억지 통합하지 말고 package별 명령을 기록한다.
- readiness 문서화를 넘어선 구현을 사용자가 요청하지 않았다면 무거운 도구, 새 프레임워크, 의존성 변경을 추가하지 않는다.
- Agent별 파일은 중복을 최소화한다. 공통 내용은 `AGENTS.md`에 두고 adapter 파일은 해당 Agent가 찾기 쉬운 entrypoint 역할을 하게 한다.
