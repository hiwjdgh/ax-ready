# GitHub 및 npm 배포 전략

AX Ready는 GitHub를 원본 저장소와 릴리스 기록으로 사용하고, npm을 설치/업데이트 채널로 사용한다.

## 배포 원칙

- GitHub가 source of truth다.
- npm package는 사용자가 로컬 Agent 환경에 AX Ready 스킬을 설치하기 위한 배포물이다.
- npm CLI는 대상 프로젝트를 분석하지 않는다. 설치만 담당한다.
- npm publish는 GitHub Release 발행 시 GitHub Actions로 실행한다.
- 수동 publish는 장애 대응 또는 초기 설정 확인용 fallback으로만 사용한다.

## 브랜치 전략

- `main`: 안정 브랜치. npm에 배포 가능한 상태를 유지한다.
- feature branch: 기능, framework reference, 템플릿 개선 작업.
- pull request: 모든 변경은 PR로 검토한다.

초기 1인 관리 단계에서는 직접 main에 push할 수 있지만, 공개 배포 이후에는 PR 기반으로 전환한다.

## 버전 정책

Semantic Versioning을 따른다.

- `patch`: 오타, 문서 개선, framework reference의 작은 보강.
- `minor`: 새 framework 지원, 새 템플릿, CLI의 하위 호환 기능 추가.
- `major`: 설치 경로, 스킬 구조, 산출물 계약이 깨지는 변경.

현재 초기 버전은 `0.x`로 유지한다. `1.0.0`은 실제 프로젝트 적용 사례가 충분히 쌓인 뒤 올린다.

## 릴리스 절차

1. 변경사항이 `CHANGELOG.md`에 기록되어 있는지 확인한다.
2. `README.md`, `SKILL.md`, `AGENTS.md`, `references/`, `assets/templates/`가 서로 모순되지 않는지 확인한다.
3. npm package 검증을 실행한다.

   ```sh
   npm run check
   npm pack --dry-run
   ```

4. package tarball에 불필요한 파일이 포함되지 않는지 확인한다.
   - 포함되어야 함: `SKILL.md`, `agents/`, `assets/`, `references/`, `bin/`, `README.md`, `LICENSE`
   - 포함되지 않아도 됨: `memory/`, `.github/`, `docs/`, repo 운영용 파일

5. GitHub Actions에서 `Release` workflow를 수동 실행한다.
   - workflow: `.github/workflows/release.yml`
   - input: `patch`, `minor`, `major`
   - workflow가 `npm version`, version commit, tag push, GitHub Release 생성을 처리한다.

6. npm publish를 확인한다.

   GitHub Release가 published 상태가 되면 `.github/workflows/npm-publish.yml`이 실행된다.

## GitHub Actions 전략

CI는 PR과 `main` push에서 배포 전 검증을 담당한다.

- workflow: `.github/workflows/ci.yml`
- 필수 파일 존재 확인.
- 공개 문서에 로컬 사용자 경로가 들어가지 않았는지 확인.
- npm package 문법과 tarball 구성을 확인.
- 설치 CLI가 runtime skill 파일만 복사하는지 확인.

릴리스 생성은 GitHub Actions에서 수동 실행하는 `Release` workflow가 담당한다.

- workflow: `.github/workflows/release.yml`
- trigger: 수동 `workflow_dispatch`
- input: `patch`, `minor`, `major`
- 처리: 검증, `npm version`, commit/tag push, GitHub Release 생성

npm publish는 GitHub Release 발행 시 실행한다.

- workflow: `.github/workflows/npm-publish.yml`
- trigger: GitHub Release `published`
- secret: `NPM_TOKEN`
- publish command: `npm publish --provenance`

공개 배포 전 GitHub repository settings에서 `NPM_TOKEN` secret을 추가해야 한다.

## GitHub 저장소 설정 권장값

- Description: `Prepare legacy projects for AI agent coding.`
- Topics:
  - `ai-agent`
  - `codex`
  - `claude-code`
  - `gemini`
  - `developer-tools`
  - `legacy-code`
  - `documentation`
- Default branch: `main`
- Issues: enabled
- Discussions: optional
- Wiki: disabled

## npm 배포 전 확인할 결정

- package name을 `ax-ready`로 유지할지, scoped package로 바꿀지 결정한다.
- README의 설치 명령이 실제 package name과 일치하는지 확인한다.
- npm package description과 GitHub description을 맞춘다.
