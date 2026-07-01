# Output Map

발견한 정보를 어떤 산출물에 넣을지 결정할 때 사용한다.

## `AGENTS.md`

Agent-facing 운영 규칙을 여기에 둔다.

- setup과 validation 명령.
- architecture landmark.
- 수정 시 피해야 할 파일과 디렉터리.
- 편집에 영향을 주는 coding convention.
- 최종 응답 전 필요한 check.
- known gap 또는 불확실성.

## `CLAUDE.md`

Claude Code가 우선 읽을 entrypoint를 둔다.

- 공통 지침은 `AGENTS.md`를 참조한다.
- Claude Code에서 특히 지켜야 할 짧은 주의사항만 추가한다.
- 긴 중복 문서는 만들지 않는다.

## `GEMINI.md`

Gemini 계열 Agent가 우선 읽을 entrypoint를 둔다.

- 공통 지침은 `AGENTS.md`를 참조한다.
- Gemini에서 특히 지켜야 할 짧은 주의사항만 추가한다.
- 긴 중복 문서는 만들지 않는다.

## `README.md`

사람을 위한 프로젝트 정보를 둔다.

- 프로젝트가 하는 일.
- 대상 사용자.
- quick start.
- 주요 명령.
- 상세 문서 링크.

## `docs/project-overview.md`

간결한 시스템 맥락을 둔다.

- product 또는 library 목적.
- 주요 기능.
- runtime model.
- 외부 의존성.
- 저장소 구조.

## `docs/architecture.md`

구조적 맥락을 둔다.

- 주요 module과 책임.
- request/data flow.
- persistence와 integration point.
- cross-cutting concern.
- 안정적으로 유지해야 할 boundary.

## `docs/development.md`

로컬 작업 흐름을 둔다.

- prerequisite.
- installation.
- environment variable.
- local run command.
- troubleshooting note.

## `docs/testing.md`

검증 맥락을 둔다.

- test tool.
- test location.
- unit/integration/e2e 전략.
- 정확한 명령.
- known test gap.

## `docs/agent-workflows.md`

반복 가능한 AI Agent 작업 패턴을 둔다.

- 작은 bug fix workflow.
- feature workflow.
- refactor workflow.
- dependency update workflow.
- documentation update workflow.
