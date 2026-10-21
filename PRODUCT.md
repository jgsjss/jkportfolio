# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: static HTML/CSS, single `index.html`, no build, deployed on GitHub Pages (`github.com/jgsjss/jkportfolio`). The user asked for content centered on Java/Spring/eGovFrame backend work; the site itself stays static because GitHub Pages cannot run a server.

## Users

Recruiters and interviewing engineers at companies hiring a Java/Spring backend developer. They open the link from a résumé during document screening or before/after an interview, usually skim for 30 seconds, then read case studies if interested.

## Product Purpose

Personal portfolio of 전광수 (Jeon Gwangsu), a Java/Spring backend developer. Success: a reader quickly understands "experienced backend developer for reservation/payment systems in public institutions" and finds concrete evidence (projects, problem-solving cases) that supports it.

## Positioning

Hands-on builder and operator of membership, reservation, and payment systems for public facility corporations (시설관리공단, 문화재단): login/signup, online course and facility booking, PG payment, kiosk APIs, admin settlement/CMS. Strength is payment data consistency and operational stability, not greenfield product startups.

## Operating Context

- Career: (주)대원정보문화, 개발팀 대리, 2022.08–present. Prior: eeta(이타), ~4 months, Vue.js frontend + Node.js/Express server.
- Total experience quoted by the user: 4년 9개월 (user's own figure; 2022.08–2026.10 plus ~4 months computes nearer 4년 6~7개월 — use "4년+" unless the user confirms).
- Stack: Java, Spring, 전자정부프레임워크(eGovFrame), MyBatis, JavaScript/jQuery, MariaDB (confirmed as the production DB; Oracle only in past study), server deployment and operations. Uses Claude Code and Codex with manual verification.
- Studying: 한국방송통신대학교 컴퓨터과학과 4학년.

## Capabilities and Constraints

- Maintenance/enhancement: 중랑구, 강서구, 광산구, 강동구(도시관리공단), 광주북구, 송파구, 금천구, 동작문화재단.
- External integrations: PG/VAN (스마트로, 나이스페이먼츠 등), identity verification (KMC모바일, 로그인톡, 비즈사이렌 등), 행정정보공동이용센터 비대면 자격확인, 서울시민카드 (procedure-based), 1280X Passwordless.
- New builds: 강동구 (2024.08–12), 광주북구 (2024.08–2025.01), 송파구 (2025.01–08), 금천구 (2026.01–06, delivered), 동작문화재단 통합예약시스템 (2026.08–11, in progress).
- Company code is private: no source links for work projects.
- 송파구 project is 송파구체육문화회관 (confirmed by the user).

## Evidence on Hand

- Case: 문화비 소득공제 분납 결제 — follow-up payments used the wrong merchant ID and cancellations mismatched the approval; fixed cancel to use the approval's merchant ID and added pre-payment validation of deduction eligibility and merchant info.
- Case: 운영 통계 504 Gateway Timeout — charset mismatch in DB function parameter disabled index use; query called 312 times; 90s+ → "수초" (no exact number; do not invent one).
- Practice: ~80 issues recorded in an internal troubleshooting DB over two months.
- Old study projects (servlet calculator, picnic shop JSP, Spring Boot 맛집, Vue toys, Node TodoApp) with GitHub repos — archive only.
- Contact (user-approved for public display): jgsjss9854@naver.com, 010-3835-9854, github.com/jgsjss.
- No testimonials, user counts, or transaction volumes exist; do not fabricate.

## Product Principles

1. Lead with real work experience, not study projects.
2. Show reasoning: symptom → cause → fix → verification.
3. Only verifiable facts; vague where the user has no number.
4. Backend first; frontend and AI tools are supporting skills.
