# AX Ready

AX Ready는 AI 시대 이전에 만들어졌거나 문서화가 부족한 소프트웨어 프로젝트를 AI Agent 코딩이 가능한 상태로 준비하는 스킬입니다.

기존 저장소에 적용하면 Agent가 코드베이스를 조사하고, Claude Code, Gemini, Codex 등 여러 코딩 Agent가 읽을 수 있는 공통 지침과 프로젝트 문서를 생성하거나 개선합니다.

이 저장소의 `memory/`는 AX Ready 자체를 지속적으로 개선하기 위한 내부 기록입니다. 사용자의 대상 프로젝트에 반드시 생성해야 하는 산출물은 아닙니다.

## 산출물

- `AGENTS.md`: Agent 공통 setup, architecture, editing rule, validation step.
- `CLAUDE.md`: Claude Code용 adapter 지침.
- `GEMINI.md`: Gemini 계열 Agent용 adapter 지침.
- `docs/`: 프로젝트 개요, 아키텍처, 개발, 테스트, Agent workflow 문서.
- 오픈소스 파일: contributing guide, security policy, issue template, PR template, CI 권장사항.

## 사용법

### npm으로 설치

```sh
npx ax-ready install
```

또는 전역 설치 후 실행합니다.

```sh
npm install -g ax-ready
ax-ready install
```

기본 설치 위치는 `CODEX_HOME`이 있으면 `$CODEX_HOME/skills/ax-ready`, 없으면 사용자 홈의 `.codex/skills/ax-ready`입니다.

다른 위치에 설치하려면:

```sh
ax-ready install --target ./skills
```

이미 설치된 스킬을 교체하려면:

```sh
ax-ready install --force
```

### Agent에서 호출

설치 후 대상 프로젝트 폴더에서 Agent에게 다음처럼 요청합니다.

```text
Use $ax-ready to prepare this project for reliable AI agent coding.
```

스킬은 대상 프로젝트를 먼저 조사하고, 기존 사용자 변경사항을 보존하며, `assets/templates/`의 한국어 템플릿을 프로젝트 맥락에 맞게 수정해 적용합니다.

## 저장소 구조

| Path | Purpose |
| --- | --- |
| `SKILL.md` | 스킬 호출 시 읽는 핵심 지침. |
| `agents/openai.yaml` | 스킬 discovery를 위한 UI 메타데이터. |
| `bin/ax-ready.js` | npm 설치용 CLI. 프로젝트 분석에는 사용하지 않는다. |
| `memory/` | AX Ready 프로젝트 자체의 지속 메모리와 의사결정 기록. |
| `references/` | readiness 체크리스트, 산출물 배치 기준, 언어/프레임워크별 분석 기준. |
| `assets/templates/` | 대상 프로젝트에 맞게 수정해 적용할 한국어 템플릿. |
| `package.json` | npm 배포 설정. |
| `docs/release-strategy.md` | GitHub 및 npm 배포 전략. |

## 개발

이 프로젝트는 실행 스크립트보다 스킬 지침과 reference 문서를 중심으로 발전시킨다.

새 언어 또는 프레임워크 지원을 추가할 때는 `references/frameworks/`에 분석 기준 문서를 추가하고, `SKILL.md`의 번들 리소스 목록에 연결한다.

배포 전 확인:

```sh
npm run check
npm pack --dry-run
```

GitHub Actions는 PR/push 검증용 CI와 npm publish workflow로 나뉜다.

- `.github/workflows/ci.yml`
- `.github/workflows/npm-publish.yml`

GitHub와 npm 배포 절차는 [docs/release-strategy.md](docs/release-strategy.md)를 따른다.

## 라이선스

MIT
