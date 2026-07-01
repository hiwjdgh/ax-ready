# DB 지식 수집 기준

DB 접근이 감지된 사용자 프로젝트에서만 이 기준을 사용한다.

## DB 접근 감지 신호

- raw SQL 문자열.
- stored procedure 호출.
- ORM entity 또는 model.
- migration 파일.
- mapper XML.
- DAO, repository, query service.
- DB connection config.
- `.sql` query file.

## 기본 산출물

DB 접근이 감지되면 다음 구조를 생성한다.

```text
docs/db/
  overview.md
  required-knowledge.md
  relationships.md
  data-dictionary.md
  risks.md
  tables/
  stored-procedures/
```

## 사용자에게 요청해야 하는 경우

다음 중 하나라도 있으면 추측하지 말고 사용자에게 요청한다.

- stored procedure 이름은 보이지만 definition이 없다.
- table 이름은 보이지만 DDL이 없다.
- join 관계나 foreign key가 코드에서 불명확하다.
- status, type, code 값의 business meaning이 불명확하다.
- report, billing, settlement, permission, audit처럼 domain rule이 중요한 기능이다.

## 질문 예시

```text
이 기능은 DB 지식이 부족해 AI Agent Coding 준비도를 낮게 평가했습니다.

확인된 내용:
- `/admin/reports` 페이지가 `GET /api/reports/sales`를 호출합니다.
- 백엔드에서 `sp_sales_report` stored procedure 호출이 확인됩니다.

안전한 전환을 위해 아래 정보를 제공해 주세요.

1. `sp_sales_report` stored procedure definition
2. `sales` table DDL
3. `orders` table DDL
4. `payments` table DDL
5. 매출 집계 기준
   - 취소 주문 포함 여부
   - 환불 처리 기준
   - 날짜/timezone 기준

실제 production data row, password, connection string, 개인정보는 제공하지 마세요.
```

## 저장 규칙

- 사용자가 제공한 DDL은 table별 markdown으로 요약한다.
- 원본 DDL이 길면 핵심 schema, primary key, foreign key, index, nullable, default, enum/check constraint를 보존한다.
- stored procedure는 역할, 사용 위치, input/output, 참조 table, 위험 영역을 정리한다.
- 실제 개인정보 row, secret, connection string은 저장하지 않는다.
- masking된 table/column 이름은 그대로 사용하고, masking 사실을 note로 남긴다.
