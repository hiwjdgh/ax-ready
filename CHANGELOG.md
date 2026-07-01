# Changelog

## 미배포

- AX Ready 스킬 초기 구조를 추가했다.
- readiness reference와 대상 프로젝트용 템플릿을 추가했다.
- 한국어 우선 배포 방향을 반영했다.
- `memory/`를 AX Ready 자체의 지속 운영 기록으로 추가했다.
- Claude Code, Gemini, Codex 등 여러 Agent 호환 방향을 반영했다.
- 로컬 컴퓨터 경로와 환경 종속 validator 문구를 제거했다.
- 실행 스크립트를 제거하고 언어/프레임워크별 reference 확장 구조로 전환했다.
- npm 배포를 위한 `package.json`과 `ax-ready install` CLI를 추가했다.
- GitHub 및 npm 배포 전략 문서를 추가했다.
- GitHub Actions CI와 npm publish workflow를 분리해 추가했다.
- 사용자 프로젝트 산출물에 프로젝트 구조, 파일 역할, AI Agent Coding 준비도, DB 지식 요청 템플릿을 추가했다.
- version bump, tag, GitHub Release 생성을 자동화하는 release workflow를 추가했다.
- release workflow에서 npm publish까지 수행하도록 수정했다.
