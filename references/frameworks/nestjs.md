# NestJS 프로젝트 분석 기준

NestJS 프로젝트를 AX Ready로 준비할 때 이 파일을 참고한다.

## 우선 확인할 파일

- `package.json`
- `nest-cli.json`
- `tsconfig.json`, `tsconfig.build.json`
- `src/main.ts`
- `src/app.module.ts`
- `src/**/*.module.ts`, `src/**/*.controller.ts`, `src/**/*.service.ts`
- `test/`, `*.spec.ts`, `*.e2e-spec.ts`
- `.env.example`

## 추론할 항목

- module/controller/service 구조.
- REST, GraphQL, microservice, queue, websocket 사용 여부.
- config module과 환경 변수 관리 방식.
- database integration: TypeORM, Prisma, Mongoose 등.
- validation pipe, guard, interceptor, filter 사용 여부.
- unit/e2e test 명령.

## Agent 문서에 남길 내용

- 설치, dev, build, start, test, e2e, lint 명령을 `package.json` 기준으로 기록.
- 기능 추가 시 module boundary를 유지하라고 적는다.
- DTO, validation, guard, service 책임 분리를 설명한다.
- database migration 또는 schema generation 명령은 실제 존재할 때만 기록한다.
- `dist/`는 build output이므로 수정하지 말라고 적는다.

## 주의할 위험 영역

- provider dependency injection 누락.
- circular dependency.
- global pipe/guard/interceptor 변경의 넓은 영향.
- migration, seed, production DB 연결.
- test module setup과 mock provider 누락.
