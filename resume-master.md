# Abhishek Shrestha

Github: {GITHUB_URL}
LinkedIn: {LINKEDIN_URL}
Email: {EMAIL_ADDRESS}
Address: {CITY, Country}

Software Engineer who builds systems that move real business data, not just APIs. 3+ years of experience designing event-driven architectures and data-heavy SaaS platforms, owning delivery from system design through to production at scale.

### Technical Skills

- Languages: Java, TypeScript, Python, Rust, SQL
- Backend & Cloud: Spring Boot, Node.js, Django, PostgreSQL, Kafka, AWS (Cloudfront, EB, RDS, S3, ECS)
- Frontend: React, Angular, Redux/NgRx, Tailwind, Jest, Cypress
- Tools & Skills: Docker, Bitbucket Pipelines, CI/CD, JUnit, TDD, OOP, Agile, Git

### Work Experience

Software Engineer | Loopsio | January 2026 - Present

- Engineered and delivered a desktop MVP for a construction-tech startup using Tauri (Rust + React) in 4 months, helping secure a follow-on Phase 2 development contract through rapid iteration driven by weekly customer demos and feedback sessions.
- Developed a high-performance ML inference pipeline that used coarse object detection to filter irrelevant image regions, reducing GPU segmentation workloads by 90% and enabling the processing of 1,000+ images per session with near-zero IPC latency.
- Integrated AI-assisted development workflows (Claude Code) to reduce boilerplate and refactoring overhead, and accelerate delivery cycles.

Fullstack Software Engineer | Wavelet Solutions | January 2023 - August 2025

- Led a team of 4 engineers to design and deliver a greenfield manufacturing MRP SaaS module, owning backend REST API design, frontend delivery and collaborating closely with clients onsite to refine workflows; achieved UAT sign-off, secured MYR 1M in contract value, and converted the client into a recurring customer.
- Extended and maintained a high-throughput event-driven messaging system using Spring Boot and PostgreSQL queue tables with async producers/consumers and SKIP LOCKED concurrency, processing ~500k events per day across ERP workflows including orders, inventory, and financial updates.
- Designed and implemented a queue-based ETL system using PostgreSQL event tables and distributed consumer microservices to support bulk ERP client onboarding and continuous cross-system data synchronization, migrating 20M+ records from 3 legacy systems into a central platform with idempotent processing guarantees.
- Designed multi-tenant PostgreSQL schemas serving 50+ clients, implementing partitioning and audit trail patterns across 50M+ row datasets to ensure data integrity and traceability.
- Spearheaded internationalisation across 50+ Angular microfrontend apps, designing a lazy-loading resource bundle that dynamically swaps languages at runtime - unlocking 3 new markets without requiring app rebuilds per locale.
- Initiated and built a shared Angular component library of 200+ components, consolidating UI usage across 50+ apps into a single versioned NPM package, improving reusability and maintainability.
- Designed and authored Bitbucket CI/CD pipelines across containerised Spring Boot services, micro-frontends, and versioned NPM libraries with hourly to weekly release cadences, reducing deployment time by 40% and improving cross-team release velocity.

Software Engineer Intern | BigLedger | July 2021 - December 2021

- Designed a drag-and-drop WYSIWYG website builder in Angular with a JSON-driven component engine and performant redux state management, enabling client self-serve page creation and reducing page delivery time by 3×.
- Implemented client side caching with service workers in a cross-platform e-commerce app, slashing app startup time by 40% to significantly reduce user drop-off.
- Engineered an enterprise inventory management web application using Spring Boot and Angular  for stock transfers, currently deployed in production for a various logistics companies.

### Education

MSc Innovation & Entrepreneurship | University of Edinburgh | Sept 2025 – Present (Exp: Aug 2026)

- Award: Merit Scholarship.

Bachelor of Computer Science | Monash University | July 2019 – Dec 2022

- Award: Best Overall Graduate in Bachelor of Computer Science; High Achiever Scholarship.
- GPA: 3.83/4.0 | WAM: 86%.

### Projects

Clinical Management System with Voice Recognition | Python (Django), Deepspeech, PostgreSQL, Angular, Ionic | {Github link} 

- Led a team of 3 students to develop a heathcare app that managed patients, appointments and diagnoses using voice recognition. Created PostgreSQL schemas and Django REST APIs.
- Integrated Mozilla Deepspeech for voice recognition with the model having 85% accuracy.
- Delivered a cross platform app for web and mobile using Ionic, Angular and Capacitor. 

Finny: AI Banking Companion (Hackathon Winner) | NextJS, Gemini Tool Calling, GCP | {Github link} | {live url}

- Winner of NatWestGroup's fintech hackathon by building an AI-powered banking assistant inside NatWestBank's mobile app. 
- Integrated Gemini APIs tool calling for agentic task execution to help customers predict their next spend and proactively manage their finances.

Website Builder | Angular, NgRx, TypeScript | {Github link} | {live url}

- Proof of Concept for a drag and drop Website Builder (wix-like). This is a tool to dynamically create the skeleton of a website.
- Now employed within Wavelet's website builder and evolved into their in-house CMS.

Post Trade Backoffice | Spring Boot, Kafka, PostgreSQL

- Built an event-driven trading back-office system in Spring Boot modelling order execution, portfolio management, and cash settlement workflows using Kafka for asynchronous communication.
- Designed independently deployable microservices with isolated PostgreSQL schemas and idempotent consumers. Load-tested the system under concurrent workloads of up to 1,000 requests/minute.

Pong | TypeScript, RxJS | {Github link} | {live url}

- Pong game written following priciples of functional reactive programming in TypeScript with RxJS. 
- Single player with AI opponent