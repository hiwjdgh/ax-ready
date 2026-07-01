# PHP 프로젝트 분석 기준

PHP 프로젝트를 AX Ready로 준비할 때 이 파일을 참고한다.

## 우선 확인할 파일

- `composer.json`
- `composer.lock`
- `.env.example`
- `phpunit.xml` 또는 `phpunit.xml.dist`
- `artisan` 또는 framework별 CLI entrypoint
- `public/index.php`
- `src/`, `app/`, `config/`, `routes/`, `database/`, `tests/`

## 추론할 항목

- Composer script와 의존성 관리 방식.
- Laravel, Symfony, WordPress, Drupal, Slim 등 framework 여부.
- 환경 변수와 secret 관리 방식.
- migration, seed, queue, scheduler, cache, storage link 같은 운영 명령.
- PHPUnit, Pest 등 test 도구.

## Agent 문서에 남길 내용

- 설치 명령: 보통 `composer install`.
- 로컬 실행 명령: framework별로 확인한 명령만 기록.
- 테스트 명령: `composer test`, `vendor/bin/phpunit`, `vendor/bin/pest` 등 실제 존재하는 명령.
- migration과 production data를 다루는 명령은 위험 작업으로 표시.
- `.env`는 직접 커밋하지 말고 `.env.example` 기준으로 설명.

## 주의할 위험 영역

- migration rollback, destructive seeding, cache clear, storage permission.
- WordPress plugin/theme 프로젝트의 경우 core 파일 수정 금지.
- Laravel 프로젝트의 경우 `bootstrap/cache`, `storage`, `vendor`는 일반적으로 직접 수정하지 않는다.
