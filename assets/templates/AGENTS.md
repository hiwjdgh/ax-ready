# Agent 지침

## 프로젝트 개요

이 프로젝트가 무엇을 하는지, 누가 사용하는지, 주요 runtime 또는 delivery model이 무엇인지 적는다.

## 설정

- 설치:
- 설정:
- 로컬 실행:

## 주요 명령

- Dev:
- Build:
- Test:
- Lint:
- Typecheck:

## 구조

- `path/`: 책임.
- `path/`: 책임.
- `path/`: 책임.

## 편집 규칙

- 사용자 변경사항을 보존한다. 직접 만들지 않은 변경을 되돌리지 않는다.
- 새 추상화보다 기존 프로젝트 패턴을 우선한다.
- 요청된 동작에 맞게 변경 범위를 제한한다.
- 명시적 요청이 없으면 generated, vendored, build-output 파일을 수정하지 않는다.

## 지속 메모리

- 중요한 결정은 `memory/decision-log.md`에 남긴다.
- 다음 Agent가 이어받아야 할 맥락은 `memory/project-memory.md`에 남긴다.
- 세션 단위의 진행 내용은 `memory/session-log.md`에 남긴다.

## 검증

마무리 전 변경을 커버하는 가장 작은 신뢰 가능한 check를 실행한다.

1. 명령:
2. 명령:

check를 실행할 수 없으면 이유와 남는 risk를 설명한다.

## Known Gap

- 모르는 것:
- 누락된 것:
