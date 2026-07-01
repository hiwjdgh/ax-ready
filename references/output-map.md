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

## `docs/project-structure.md`

프로젝트 구조 해석을 둔다.

- 최상위 디렉터리와 목적.
- app/package/module 경계.
- generated, vendored, build output 경로.
- Agent가 우선 읽어야 할 경로.
- Agent가 일반적으로 수정하지 말아야 할 경로.

## `docs/file-roles.md`

핵심 파일별 역할 해석을 둔다.

- entrypoint.
- routing/page/controller 파일.
- service/domain/model/repository 파일.
- config/env/build/test 파일.
- 수정 시 주의해야 할 파일.

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

## `docs/readiness/project-readiness.md`

전체 프로젝트의 AI Agent Coding 준비도를 둔다.

- 총점과 등급.
- 점수 근거.
- 페이지/API별 요약.
- DB 지식 coverage.
- 주요 blocker와 다음 action.

## `docs/readiness/pages/*.md`

프론트엔드 페이지 또는 화면 단위 준비도를 둔다.

- route 또는 화면 이름.
- 관련 파일.
- 호출 API.
- 관련 DB 지식이 있으면 링크.
- 부족한 정보와 사용자 요청 항목.

## `docs/readiness/apis/*.md`

백엔드 API 단위 준비도를 둔다.

- method/path 또는 handler 이름.
- controller/service/repository 위치.
- query, table, stored procedure 연결.
- 부족한 DB 지식.
- 위험 영역과 다음 action.

## `docs/db/`

DB 접근이 감지된 프로젝트에서만 만든다.

- `overview.md`: DB 접근 방식과 발견된 schema 단서.
- `required-knowledge.md`: 사용자에게 요청해야 하는 DDL, stored procedure, relationship, business rule.
- `relationships.md`: 확인된 table 관계.
- `data-dictionary.md`: table/column/status 값 의미.
- `risks.md`: DB 관련 위험 영역.
- `tables/`: table별 정리.
- `stored-procedures/`: stored procedure별 정리.
