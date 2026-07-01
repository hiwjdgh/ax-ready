# Session Log

작업 세션 단위의 중요한 진행 내용을 기록한다. 너무 자세한 명령 로그가 아니라, 다음 Agent가 이어서 일할 때 필요한 수준으로 남긴다.

## 2026-07-01

- 빈 저장소에서 AX Ready 스킬 프로젝트 골격을 만들었다.
- 초기 구조는 현재 작업 환경에 맞춰 직접 작성했다.
- 사용자 요청에 따라 한국어 우선 배포 방향을 반영했다.
- `memory/`를 사용자 산출물이 아니라 AX Ready 자체의 내부 기록으로 재정의했다.
- Claude Code, Gemini, Codex 등 여러 Agent 호환 방향으로 재정리했다.
- 로컬 컴퓨터 경로와 환경 종속 validator 언급은 공개 문서에서 제거했다.
- `scripts/`를 제거하고 언어/프레임워크별 reference 확장 구조로 전환했다.
- npm 배포를 위해 `package.json`과 설치 전용 CLI `bin/ax-ready.js`를 추가했다.
- GitHub source of truth, npm install channel 기준의 release strategy 문서를 추가했다.
- GitHub Actions CI와 npm publish workflow를 추가했다.
