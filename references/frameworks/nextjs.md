# Next.js 프로젝트 분석 기준

Next.js 프로젝트를 AX Ready로 준비할 때 이 파일을 참고한다.

## 우선 확인할 파일

- `package.json`
- lockfile: `package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, `bun.lockb`
- `next.config.js`, `next.config.mjs`, `next.config.ts`
- `app/` 또는 `pages/`
- `components/`, `lib/`, `src/`, `public/`
- `.env.example`
- `middleware.ts`
- `tsconfig.json`

## 추론할 항목

- App Router와 Pages Router 중 무엇을 쓰는지.
- TypeScript 사용 여부.
- package manager와 script: `dev`, `build`, `start`, `lint`, `test`, `typecheck`.
- server component, client component, route handler, server action 사용 여부.
- styling 방식: CSS Modules, Tailwind, styled-components 등.
- 인증, DB, 외부 API, image/domain config.

## Agent 문서에 남길 내용

- dev/build/start/lint/typecheck/test 명령을 `package.json` 기준으로 기록.
- `app/`과 `pages/`가 함께 있으면 라우팅 경계를 명확히 적는다.
- client component는 `"use client"` 필요 조건을 설명한다.
- 환경 변수는 browser 노출 여부를 구분한다. `NEXT_PUBLIC_` prefix는 client로 노출된다.
- generated output인 `.next/`는 수정하지 말라고 적는다.

## 주의할 위험 영역

- server/client boundary 혼동.
- route cache, revalidation, dynamic rendering 설정.
- middleware와 auth redirect loop.
- image optimization, env var 노출, server action에서의 권한 검증.
