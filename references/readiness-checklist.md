# Readiness Checklist

프로젝트를 AI Agent 코딩 가능한 상태로 준비할 때 이 체크리스트를 사용한다.

## 저장소 기본

- 프로젝트 목적이 README 또는 `docs/project-overview.md`에 적혀 있다.
- 주요 언어, 프레임워크, runtime, package manager가 식별되어 있다.
- clean checkout에서 재현 가능한 setup 지침이 있다.
- 주요 명령이 정확한 working directory와 함께 문서화되어 있다.
- 환경 변수는 secret 없이 문서화되어 있다.
- 생성 파일, vendored code, build output 경로가 식별되어 있다.

## Agent 계약

- 저장소 root에 `AGENTS.md`가 있다.
- Agent 지침에 프로젝트 개요, 명령, architecture note, coding rule, validation step, known gap이 있다.
- migration, auth, billing, security, data deletion, concurrency, deployment, public API 같은 위험 영역이 명시되어 있다.
- 기존 사용자 변경사항을 보호하는 규칙이 있다.

## Agent 호환성

- `AGENTS.md`에 공통 Agent 지침이 있다.
- Claude Code를 고려할 때 `CLAUDE.md`가 있거나 `AGENTS.md`로 명확히 연결된다.
- Gemini 계열 Agent를 고려할 때 `GEMINI.md`가 있거나 `AGENTS.md`로 명확히 연결된다.
- Agent별 파일은 같은 내용을 복붙하지 않고 공통 지침을 참조한다.
- OS별 명령 차이가 있으면 Windows와 POSIX shell 기준을 분리해서 적는다.

## 엔지니어링 위생

- test, lint, typecheck, build 명령을 찾을 수 있다.
- CI가 있거나 추천 CI workflow가 문서화되어 있다.
- dependency update 정책이 명확하다.
- formatting convention이 문서화되어 있거나 도구로 강제된다.
- error handling, logging, configuration convention이 보이면 문서화되어 있다.

## 오픈소스 Readiness

- License가 있다.
- Contributing guide가 있다.
- Security reporting process가 있다.
- Pull request template이 있다.
- bug와 feature request용 issue template이 있다.
- README에 scope, support status, basic usage가 있다.

## Gap 기록

정보가 없으면 다음 형식으로 짧게 남긴다.

- 누락된 항목.
- AI Agent 작업에서 중요한 이유.
- 가장 낮은 위험의 다음 단계.
