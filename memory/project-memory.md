# Project Memory

이 파일은 다음 Agent 세션이 반드시 이어받아야 할 지속 맥락을 기록한다.

## 프로젝트 정체성

AX Ready는 기존 소프트웨어 프로젝트를 AI Agent가 안전하게 코딩할 수 있는 상태로 준비하는 스킬이다.

핵심 사용자는 오래된 프로젝트, 문서가 부족한 프로젝트, AI Agent에게 맡기기 어려운 프로젝트를 가진 개발자다.

## 현재 제품 방향

- 한국어 우선으로 배포한다.
- 영어가 장기적으로 유리할 수 있지만, 초기 사용성과 메시지는 한국어를 기준으로 한다.
- 단순 문서 템플릿 복사가 아니라, 프로젝트를 읽고 Agent 작업에 필요한 구조와 파일을 생성하는 것이 핵심이다.
- `AGENTS.md`는 Agent 공통 행동 규칙의 중심이다.
- `CLAUDE.md`, `GEMINI.md` 같은 파일은 각 Agent가 쉽게 진입하기 위한 adapter다.
- 사용자 대상 프로젝트에는 `memory/`를 기본 산출물로 만들지 않는다.
- 이 저장소의 `memory/`는 AX Ready 자체의 지속 업데이트를 위한 내부 기록이다.

## 중요한 원칙

- 기존 사용자 변경사항을 절대 함부로 되돌리지 않는다.
- 확인되지 않은 명령이나 프로젝트 사실을 지어내지 않는다.
- readiness 문서는 유지보수 가능한 길이로 쓴다.
- AX Ready 자체에 대한 결정, 위험, 미해결 질문은 `memory/`에 기록한다.
- 구현 자동화보다 안전한 분석, 문서화, 작업 규칙 정비를 먼저 제공한다.

## 현재 상태

- 기본 스킬 구조가 있다.
- 한국어 README, AGENTS, SKILL 지침으로 전환했다.
- 대상 프로젝트에 적용할 템플릿은 `assets/templates/`에 있다.
- 언어/프레임워크별 분석 기준은 `references/frameworks/`에 점진적으로 추가한다.
- Agent별 adapter 템플릿이 있다.
- npm 패키지는 AX Ready 스킬 설치/업데이트 채널이다. 대상 프로젝트 분석 도구가 아니다.
- npm package name은 `ax-ready`로 확정되었고 최초 배포가 완료되었다.
- npm package description은 한국어 `AI Agent 코딩이 가능하도록 기존 프로젝트를 준비하는 스킬`을 사용한다.
- `bin/ax-ready.js`는 스킬 런타임 파일(`SKILL.md`, `agents/`, `assets/`, `references/`)을 로컬 skills directory에 복사한다.
- GitHub는 source of truth이고 npm은 설치/업데이트 채널이다.
- npm publish는 GitHub Release 발행 시 `.github/workflows/npm-publish.yml`로 실행한다.
- npm publish에는 `NPM_TOKEN` secret과 npm provenance를 사용한다.
- 앞으로 Agent가 이 저장소를 수정하면 검증 후 커밋까지 진행한다.
- 커밋에는 Agent가 해당 작업에서 직접 수정한 파일만 포함하고, 기존 사용자 변경은 보존한다.

## 다음으로 고려할 일

- 실제 legacy 프로젝트에 적용해 템플릿이 충분한지 검증한다.
- 한국어/영어 이중 배포 전략을 정한다.
- Claude Code, Gemini, Codex별 파일 명명 규칙과 권장 내용을 검토한다.
- PHP, Next.js, NestJS 외의 우선 지원 프레임워크를 정한다.
