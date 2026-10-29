// Complete production-grade steps data for "Supabase & Firebase for AI Apps" Roadmap (12 Nodes)

export const supabaseFirebaseAiAppsData = {
  id: "supabase-firebase-ai-apps",
  title: "Supabase & Firebase for AI Apps",
  description: "Configure Postgres databases, Row-Level Security, Edge Functions, and pgvector embeddings for AI products.",
  category: "Tool Mastery Roadmaps",
  stepCount: 12,
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: Relational Postgres vs. NoSQL Architecture & Schema Design",
      description: "Compare relational SQL with NoSQL collections, design normalized schemas with AI-assisted CLI migrations, and enforce 100% end-to-end TypeScript type safety."
    },
    {
      id: "phase-2",
      title: "Phase 2: Authentication, Row-Level Security (RLS) & Storage",
      description: "Implement multi-provider OAuth and SSR cookie sessions, engineer leak-proof Row-Level Security (RLS) tenant isolation policies, and manage signed media buckets."
    },
    {
      id: "phase-3",
      title: "Phase 3: pgvector Embeddings, Hybrid RAG & Realtime Sync",
      description: "Store high-dimensional vector embeddings with HNSW indexes, write Reciprocal Rank Fusion (RRF) hybrid search RPCs, and broadcast live state changes over WebSockets."
    },
    {
      id: "phase-4",
      title: "Phase 4: Serverless Edge Functions, Webhooks & Production Scaling",
      description: "Execute low-latency Deno Edge Functions, orchestrate asynchronous database webhooks with pg_cron queues, and configure Supavisor connection pooling for high concurrency."
    }
  ],
  steps: [
    // Node 1
    {
      id: "step-1",
      stepNumber: 1,
      phaseId: "phase-1",
      title: "Choosing Between Supabase Postgres & Firebase Firestore",
      timeEstimate: "1.5 hrs",
      difficulty: "Beginner",
      summary: "Evaluate relational SQL joins, ACID transactions, and pgvector vs. document-oriented NoSQL collections for AI SaaS workloads.",
      description: "Selecting the foundational database architecture for an AI application dictates development speed, query capabilities, and long-term operating costs. Firebase Firestore pioneered real-time document-oriented NoSQL with instant mobile SDK sync, offline persistence, and seamless Google Cloud integration. However, AI products heavily involve vector similarity search, multi-table joins, relational billing structures, and complex analytical filtering—areas where NoSQL schemas require denormalized data duplication and expensive multi-read loops.\n\nSupabase provides a modern open-source alternative built on PostgreSQL: giving developers full SQL flexibility, foreign key constraints, Row-Level Security, and first-party vector support via `pgvector`. Understanding the architectural trade-offs—such as when Firestore's sub-collection listeners excel for mobile chat feeds versus when Postgres relational joins and vector cosine indexing are mandatory for enterprise RAG systems—prevents catastrophic database migrations later in the product lifecycle.",
      playbook: {
        setup: "Create a free project on both Supabase (supabase.com) and Firebase Console (console.firebase.google.com). Install the schema visualizer DrawDB or DBML CLI.",
        execute: "Map out your core AI SaaS domain models (Users, Organizations, Documents, Embeddings, Invoices). Model the entities as relational Postgres tables with foreign keys on Supabase, and compare against a nested Firestore document-subcollection hierarchy. Measure read-amplification: calculate the operations required to fetch an organization's documents with user permissions.",
        verify: "Confirm that relational cross-table queries in Postgres execute in a single ACID transaction via SQL joins, whereas Firestore requires multiple sequential document reads that compound query latency and cost."
      },
      tools: [
        {
          name: "Supabase",
          type: "Open Source Backend",
          url: "https://supabase.com",
          description: "Open-source Firebase alternative providing a dedicated PostgreSQL database, pgvector, Auth, Edge Functions, and Realtime listeners.",
          bestFor: "Relational data, vector similarity search, RLS security & SQL ecosystems"
        },
        {
          name: "Firebase Firestore",
          type: "Managed NoSQL",
          url: "https://firebase.google.com/products/firestore",
          description: "Serverless NoSQL document database by Google Cloud offering automatic multi-region replication and mobile offline data synchronization.",
          bestFor: "Mobile-first applications, rapid prototypes & nested document trees"
        },
        {
          name: "DrawDB",
          type: "Free Visual Tool",
          url: "https://www.drawdb.app",
          description: "Free, open-source in-browser database entity-relationship diagram (ERD) editor and SQL schema exporter.",
          bestFor: "Visual schema modeling, relational foreign key planning & SQL export"
        }
      ],
      callouts: {
        mistake: "Choosing NoSQL Firestore for vector RAG applications without realizing that vector similarity search requires pairing with external third-party vector databases or specialized extensions.",
        proTip: "Use Supabase Postgres for AI SaaS backends where customer data, subscription tiers, and document vector embeddings must reside inside the same ACID-compliant database.",
        mistakes: [
          "Denormalizing rapidly mutating data in Firestore, requiring hundreds of parallel document updates to maintain data consistency.",
          "Over-indexing columns on high-volume Postgres tables without considering index write amplification and VRAM bloat.",
          "Assuming Supabase is just an API wrapper; it is an unconstrained, fully featured PostgreSQL instance with root extensions."
        ],
        proTips: [
          "If your app requires complex analytical rollups (e.g. monthly token usage across 50 team members), Postgres SQL `GROUP BY` executes in milliseconds compared to costly Firestore aggregation queries.",
          "Leverage Firebase for mobile edge apps where offline-first synchronization and device background sync are critical requirements.",
          "Use DrawDB to export clean DDL SQL migration scripts with primary keys, unique constraints, and foreign key cascades before touching production."
        ]
      },
      promptLab: {
        title: "AI SaaS Data Architecture & Schema Trade-Off Evaluator",
        description: "Analyze your AI product requirements and generate a comprehensive architecture matrix comparing Supabase Postgres vs. Firebase Firestore.",
        variables: [
          {
            name: "Application Domain",
            label: "Product Type",
            options: ["Multi-Tenant AI Document Search (RAG)", "Collaborative Realtime AI Canvas / Whiteboard", "Mobile AI Personal Health / Habit Coach"],
            default: "Multi-Tenant AI Document Search (RAG)"
          },
          {
            name: "Primary Query Pattern",
            label: "Dominant Query Load",
            options: ["Vector Similarity Joins + Relational Metadata", "High-Frequency Realtime Document Sync (Mobile)", "Complex Multi-Table Financial Transactions"],
            default: "Vector Similarity Joins + Relational Metadata"
          },
          {
            name: "Target Client Stack",
            label: "Frontend Framework",
            options: ["Next.js (App Router / SSR)", "React Native / Flutter Mobile", "Single Page React (Vite)"],
            default: "Next.js (App Router / SSR)"
          }
        ],
        template: `# Database Architecture Decision Matrix
Application: [Application Domain]
Workload: [Primary Query Pattern]
Frontend Stack: [Target Client Stack]

Evaluate Supabase Postgres vs. Firebase Firestore across:
1. Data Modeling: Relational normalization vs. NoSQL document trees.
2. Vector Embeddings: Native pgvector storage vs. external vector integrations.
3. Pricing & Scaling: Connection pooling/compute scaling vs. per-read/write billing.
4. Conclusive Architectural Recommendation with clear rationale.`,
        expectedOutput: `### Architectural Decision Analysis: Multi-Tenant AI Document Search (RAG)

#### 1. Comparison Matrix
| Architectural Feature | Supabase (PostgreSQL) | Firebase (Firestore) |
| :--- | :--- | :--- |
| **Data Model** | Relational SQL (Normalized) | Document / Subcollections (Denormalized) |
| **Vector Search** | Native \`pgvector\` (Cosine / L2 / IP in same DB) | Requires external Vector DB or Google Vector Search |
| **Permissions** | Row-Level Security (RLS) in database engine | Firestore Security Rules in separate DSL |
| **Cost Scaling** | Compute-based (Predictable fixed tiers) | Operation-based (Charged per 100k reads/writes) |

#### 2. Recommendation: Supabase (PostgreSQL)
For a multi-tenant AI Document Search application, **Supabase is the strongly recommended architecture**. Storing document metadata, organization memberships, and 1536-dimension embeddings in the same relational engine allows single-query semantic vector searches filtered by user permissions (\`WHERE org_id = ...\`), avoiding disjointed multi-database latency.`
      },
      conceptGuide: {
        title: "Relational ACID Guarantees vs. Distributed NoSQL Collections",
        overview: "Relational databases like PostgreSQL enforce strict schema definitions, ACID (Atomicity, Consistency, Isolation, Durability) transactional integrity, and mathematical relations via foreign keys. Document stores like Firestore organize data into hierarchical trees of JSON-like documents. In modern AI applications, workloads frequently blend relational structures (users, organizations, Stripe billing subscriptions) with dense numerical vectors (text embeddings). Postgres allows developers to store, query, and join these entities within a single database instance.",
        keyPoints: [
          "**Unified Storage Layer:** Supabase allows user tables, billing tiers, and document vector embeddings to coexist in a single PostgreSQL database.",
          "**Predictable Cost Economics:** Compute-based pricing prevents sudden billing shocks caused by viral automated scraping or AI agent read loops.",
          "**NoSQL Sweet Spot:** Firestore remains ideal for client-heavy mobile apps requiring robust offline caching and simple collection streaming."
        ]
      },
      learning: {
        resources: [
          {
            title: "Supabase vs. Firebase Architecture Comparison",
            url: "https://supabase.com/alternatives/supabase-vs-firebase",
            type: "Official Comparison"
          },
          {
            title: "Firebase Firestore Data Model & Structure Guide",
            url: "https://firebase.google.com/docs/firestore/data-model",
            type: "Official Docs"
          },
          {
            title: "PostgreSQL Official Documentation: Relational Integrity",
            url: "https://www.postgresql.org/docs/current/ddl-constraints.html",
            type: "Database Standard"
          },
          {
            title: "DrawDB: Visual Relational Database Schema Modeler",
            url: "https://www.drawdb.app",
            type: "Tool Reference"
          }
        ]
      }
    },

    // Node 2
    {
      id: "step-2",
      stepNumber: 2,
      phaseId: "phase-1",
      title: "AI-Assisted Database Schema & Migration Workflows",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Generate normalized SQL tables, foreign key cascades, indexes, and version-controlled local migration files using Supabase CLI and Cursor.",
      description: "Managing database schemas through visual web dashboards is acceptable for rapid prototyping, but catastrophic for production applications. When multiple developers collaborate or automated CI/CD pipelines deploy updates, database schemas must be managed as version-controlled migration files in Git.\n\nThe Supabase CLI provides a complete local development environment running full Postgres, Auth, Inbucket, and Storage inside Docker containers. Developers can prototype schema changes locally, leverage AI coding models (such as Cursor or Claude 3.7) to generate normalized SQL tables with proper constraints (`ON DELETE CASCADE`, `NOT NULL`, check constraints), and commit migrations via `supabase db diff -f migration_name`. This guarantees reproducible, immutable deployments across staging and production branches.",
      playbook: {
        setup: "Install the Supabase CLI: `brew install supabase/tap/supabase` (or `npm install -g supabase`). Initialize local config in your project root: `supabase init`. Start local Docker containers: `supabase start`.",
        execute: "Use Cursor with a senior database prompt to draft a new schema: create `organizations`, `memberships`, `documents`, and `chat_threads` tables with UUID primary keys (`gen_random_uuid()`), created_at timestamps, and indexes on foreign keys. Apply the migration locally: `supabase migration new add_core_schema` and run `supabase db reset`.",
        verify: "Run `supabase status` to view local container health. Execute `supabase db diff` to confirm zero schema drift. Push migrations to your remote staging database with `supabase db push`."
      },
      tools: [
        {
          name: "Supabase CLI",
          type: "Developer Tool",
          url: "https://supabase.com/docs/guides/cli",
          description: "Command-line interface for running local Supabase development stacks, generating migrations, and managing remote deployments.",
          bestFor: "Local Postgres development, migration generation & branch syncing"
        },
        {
          name: "PostgresAI / Database Lab",
          type: "Optimization Engine",
          url: "https://postgres.ai",
          description: "AI-driven database optimization platform analyzing query execution plans, indexes, and schema design.",
          bestFor: "Query plan analysis & schema indexing optimization"
        },
        {
          name: "Cursor AI",
          type: "AI IDE",
          url: "https://cursor.com",
          description: "AI code editor providing contextual database migration generation and SQL query optimization via deep project indexing.",
          bestFor: "Authoring declarative SQL migrations & DDL schema design"
        }
      ],
      callouts: {
        mistake: "Manually modifying table schemas in the Supabase production web dashboard instead of writing version-controlled migration files, causing local environments to diverge.",
        proTip: "Always create explicit indexes on every foreign key column (`CREATE INDEX idx_documents_org_id ON documents(org_id);`) to prevent slow sequential table scans during SQL joins.",
        mistakes: [
          "Using auto-incrementing serial integers for primary keys instead of `UUID DEFAULT gen_random_uuid()`, exposing predictable ID enumeration vulnerabilities.",
          "Forgetting `ON DELETE CASCADE` or `ON DELETE SET NULL` on child tables, causing foreign key constraint violation errors when deleting parent records.",
          "Applying destructive migrations (`DROP COLUMN` or renaming tables) in a single deployment without supporting dual-write backward compatibility."
        ],
        proTips: [
          "Run `supabase db diff -f add_feature_schema` to let the CLI automatically inspect your local database diff and write the exact migration SQL for you.",
          "Seed realistic test data for development by placing mock inserts in `supabase/seed.sql`, which runs automatically on `supabase db reset`.",
          "Set `DEFAULT timezone('utc'::text, now())` on all timestamp columns to ensure consistent timezone handling across international deployments."
        ]
      },
      promptLab: {
        title: "Production PostgreSQL Multi-Tenant Schema & Migration Architect",
        description: "Author a comprehensive, normalized PostgreSQL schema migration file with foreign key constraints, indexes, and automated updated_at triggers.",
        variables: [
          {
            name: "Domain Entities",
            label: "Core Tables",
            options: ["Organizations, Team Memberships, AI Knowledge Documents", "Projects, Workflows, Execution Logs, Webhooks", "Users, Subscriptions, AI Generation Credits, Receipts"],
            default: "Organizations, Team Memberships, AI Knowledge Documents"
          },
          {
            name: "Deletion Cascade Rule",
            label: "Foreign Key Policy",
            options: ["CASCADE (Delete child records automatically)", "SET NULL (Preserve child records with null parent)", "RESTRICT (Prevent deletion if children exist)"],
            default: "CASCADE (Delete child records automatically)"
          },
          {
            name: "Indexing Strategy",
            label: "Performance Optimization",
            options: ["B-Tree on Foreign Keys + Compound Unique Index", "Partial Index on Active Records Only"],
            default: "B-Tree on Foreign Keys + Compound Unique Index"
          }
        ],
        template: `# PostgreSQL Migration Script Generator
Target Entities: [Domain Entities]
Cascade Policy: [Deletion Cascade Rule]
Index Strategy: [Indexing Strategy]

Write a clean, idempotent PostgreSQL migration file for Supabase:
1. Enable necessary extensions (pgcrypto for gen_random_uuid).
2. Create normalized tables with UUID primary keys and strict NOT NULL constraints.
3. Configure foreign keys referencing auth.users(id) and parent tables with [Deletion Cascade Rule].
4. Add performance indexes for foreign keys and lookup queries.
5. Create a reusable trigger function to automatically update 'updated_at' on row mutation.`,
        expectedOutput: `### Supabase Migration: \`supabase/migrations/20261024000001_create_core_schema.sql\`

\`\`\`sql
-- Enable cryptographic extension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Reusable updated_at timestamp function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 1. Organizations Table
CREATE TABLE IF NOT EXISTS public.organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 2. Team Memberships Table
CREATE TABLE IF NOT EXISTS public.memberships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('owner', 'admin', 'member')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  UNIQUE (org_id, user_id)
);

-- 3. AI Knowledge Documents Table
CREATE TABLE IF NOT EXISTS public.documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  created_by UUID NOT NULL REFERENCES auth.users(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Performance Indexes
CREATE INDEX IF NOT EXISTS idx_memberships_user_id ON public.memberships(user_id);
CREATE INDEX IF NOT EXISTS idx_memberships_org_id ON public.memberships(org_id);
CREATE INDEX IF NOT EXISTS idx_documents_org_id ON public.documents(org_id);

-- Attach Updated_At Triggers
CREATE TRIGGER update_organizations_updated_at BEFORE UPDATE ON public.organizations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_documents_updated_at BEFORE UPDATE ON public.documents
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
\`\`\``
      },
      conceptGuide: {
        title: "Database Migrations, Declarative Schema Management & CI/CD",
        overview: "In professional database engineering, schemas are never modified imperatively on live production instances. Instead, changes are expressed as ordered, declarative migration scripts (e.g. `20261024000001_create_tables.sql`). A migration tool applies unexecuted scripts sequentially and tracks state in a dedicated `schema_migrations` table. This practice allows development teams to run isolated local databases in Docker, run automated integration tests in GitHub Actions, and promote schema changes deterministically across staging and production.",
        keyPoints: [
          "**Version-Controlled DDL:** Committing SQL migrations to Git ensures complete auditability and instant rollback capabilities.",
          "**Local Docker Stacks:** The Supabase CLI mirrors production infrastructure locally, preventing broken queries on live user data.",
          "**Schema Drift Prevention:** Using `supabase db diff` compares live database states against local definitions to surface untracked changes."
        ]
      },
      learning: {
        resources: [
          {
            title: "Supabase CLI Migration & Local Development Guide",
            url: "https://supabase.com/docs/guides/cli/local-development",
            type: "Official Docs"
          },
          {
            title: "PostgreSQL Schema Design & Constraints Reference",
            url: "https://www.postgresql.org/docs/current/ddl.html",
            type: "Database Standard"
          },
          {
            title: "Database Migration Best Practices for Serverless Apps",
            url: "https://supabase.com/docs/guides/deployment/database-migrations",
            type: "Engineering Guide"
          },
          {
            title: "PostgresAI: SQL Query Optimization & Explain Plan Analyzer",
            url: "https://postgres.ai/docs",
            type: "Tool Reference"
          }
        ]
      }
    },

    // Node 3
    {
      id: "step-3",
      stepNumber: 3,
      phaseId: "phase-1",
      title: "End-to-End TypeScript Type Generation & ORM Sync",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Auto-generate strict TypeScript database definitions so frontend queries and edge functions are 100% type-safe with autocomplete.",
      description: "One of the greatest hazards in full-stack web development is schema divergence between database columns and client-side TypeScript interfaces. When a column is renamed or its nullability changes in SQL, hand-written TypeScript types quickly become outdated, causing subtle runtime bugs and broken UI rendering.\n\nSupabase completely eliminates this problem through automated TypeScript type generation (`supabase gen types typescript`). By querying the PostgreSQL internal information schema, the CLI generates strongly-typed TypeScript definitions for every table, view, column, enum, and RPC function. When paired with the `@supabase/supabase-js` client or modern light ORMs like Drizzle, frontend code gains instant IDE autocomplete for table names and column properties, catching typo errors at compile time before code is pushed to production.",
      playbook: {
        setup: "Install `@supabase/supabase-js` in your Next.js/React project: `npm install @supabase/supabase-js`. Add a type generation script to your `package.json`.",
        execute: "Run the Supabase type generator: `supabase gen types typescript --local > src/types/database.types.ts`. Initialize the typed Supabase client: `import { createClient } from '@supabase/supabase-js'; import { Database } from '@/types/database.types'; export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);`.",
        verify: "Write a query in your application: `const { data } = await supabase.from('documents').select('*')`. Hover over `data` in your IDE: confirm TypeScript infers the exact column types and highlights an error if you attempt to access a non-existent property."
      },
      tools: [
        {
          name: "Supabase Typegen",
          type: "CLI Tool",
          url: "https://supabase.com/docs/guides/api/rest/generating-types",
          description: "Official CLI command extracting PostgreSQL schema definitions and compiling them into strict TypeScript interfaces.",
          bestFor: "Zero-maintenance database type safety & IDE autocomplete"
        },
        {
          name: "Drizzle ORM",
          type: "TypeScript ORM",
          url: "https://orm.drizzle.team",
          description: "High-performance, lightweight TypeScript ORM offering SQL-like syntax and instant type inference against PostgreSQL databases.",
          bestFor: "Complex relational queries, type-safe joins & migrations"
        },
        {
          name: "Prisma",
          type: "ORM Framework",
          url: "https://www.prisma.io",
          description: "Popular declarative schema modeling and type-generation ORM widely used across Node.js and Next.js full-stack backends.",
          bestFor: "Declarative schema modeling & automated client generation"
        }
      ],
      callouts: {
        mistake: "Manually typing database response types with `interface Document { id: string; ... }`, creating silent synchronization bugs when database schemas evolve.",
        proTip: "Add `\"typegen\": \"supabase gen types typescript --local > src/types/database.types.ts\"` to your `package.json` scripts and run it automatically in pre-commit hooks.",
        mistakes: [
          "Failing to pass the generated `<Database>` type generic into `createClient<Database>()`, falling back to loose `any` response types.",
          "Overlooking PostgreSQL Enums during typegen; enums generate as TypeScript string union types that must be matched exactly.",
          "Generating types against a stale local database container instead of running `supabase db reset` before running typegen."
        ],
        proTips: [
          "Use helper type aliases: `type DocumentRow = Database['public']['Tables']['documents']['Row']` and `type DocumentInsert = Database['public']['Tables']['documents']['Insert']`.",
          "Drizzle ORM can introspect existing Supabase databases directly using `drizzle-kit introspect` to generate Drizzle schema files automatically.",
          "Configure GitHub Actions to automatically run `supabase gen types typescript` and fail CI pull requests if database types are out of sync with code."
        ]
      },
      promptLab: {
        title: "Type-Safe Supabase Client & Query Repository Setup",
        description: "Author a complete TypeScript repository module using auto-generated Supabase database types, helper extraction aliases, and safe error handling.",
        variables: [
          {
            name: "Target Table",
            label: "Primary Entity",
            options: ["documents (AI Knowledge Base)", "chat_sessions (User Conversations)", "organizations (Tenant Billing)"],
            default: "documents (AI Knowledge Base)"
          },
          {
            name: "Query Pattern",
            label: "Data Access Method",
            options: ["Relational Join with Author & Organization", "Paginated List with Search Filter", "Single Record Upsert with Insert Type"],
            default: "Relational Join with Author & Organization"
          },
          {
            name: "Error Strategy",
            label: "Error Handling Pattern",
            options: ["Result Tuple Pattern ([data, error])", "Throw Typed Domain Exceptions"],
            default: "Result Tuple Pattern ([data, error])"
          }
        ],
        template: `# Type-Safe Supabase Client Architecture
Target Entity: [Target Table]
Pattern: [Query Pattern]
Error Style: [Error Strategy]

Write a complete TypeScript repository file:
1. Import createClient and auto-generated Database types.
2. Define row extraction types (Row, Insert, Update) using utility helpers.
3. Implement a strongly-typed data access function executing [Query Pattern].
4. Return results adhering strictly to [Error Strategy].`,
        expectedOutput: `### TypeScript Data Access Layer: \`src/lib/documents.ts\`

\`\`\`typescript
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/database.types';

// Instantiate strictly-typed Supabase client
const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Type aliases extracted directly from PostgreSQL schema
export type DocumentRow = Database['public']['Tables']['documents']['Row'];
export type DocumentInsert = Database['public']['Tables']['documents']['Insert'];
export type DocumentUpdate = Database['public']['Tables']['documents']['Update'];

// Type-safe relational query result
export type DocumentWithAuthor = DocumentRow & {
  organizations: { name: string; slug: string } | null;
  author: { email: string } | null;
};

/**
 * Fetch documents for a specific organization with relational joins
 */
export async function getOrganizationDocuments(
  orgId: string
): Promise<[DocumentWithAuthor[] | null, Error | null]> {
  try {
    const { data, error } = await supabase
      .from('documents')
      .select(\`
        *,
        organizations (name, slug),
        author:created_by (email)
      \`)
      .eq('org_id', orgId)
      .order('created_at', { ascending: false });

    if (error) {
      return [null, new Error(error.message)];
    }

    return [data as unknown as DocumentWithAuthor[], null];
  } catch (err) {
    return [null, err instanceof Error ? err : new Error('Unknown database error')];
  }
}
\`\`\``
      },
      conceptGuide: {
        title: "Postgres Information Schema, Introspection & Typegen",
        overview: "Every PostgreSQL database maintains an internal catalog known as the `information_schema`, which details tables, views, columns, nullability constraints, and data types. Supabase typegen introspects these catalog tables and converts PostgreSQL primitive types (`uuid` -> `string`, `timestamptz` -> `string`, `bool` -> `boolean`, `jsonb` -> `Json`) into an immutable TypeScript definition file. This gives frontend developers compile-time guarantees that client-side queries will never fail due to typographical errors.",
        keyPoints: [
          "**Information Schema Introspection:** Typegen queries database metadata directly, reflecting migrations in code within seconds.",
          "**Compile-Time Guarantees:** Any mismatch between database column names and frontend code causes immediate TypeScript build failures.",
          "**Row, Insert & Update Types:** Auto-generated types differentiate between nullable columns on read vs. required properties on insert."
        ]
      },
      learning: {
        resources: [
          {
            title: "Supabase Official Guide: Generating TypeScript Types",
            url: "https://supabase.com/docs/guides/api/rest/generating-types",
            type: "Official Docs"
          },
          {
            title: "Drizzle ORM Documentation: Supabase Integration",
            url: "https://orm.drizzle.team/docs/get-started-postgresql#supabase",
            type: "Integration Guide"
          },
          {
            title: "TypeScript Utility Types & Complex Type Extraction",
            url: "https://www.typescriptlang.org/docs/handbook/utility-types.html",
            type: "Language Reference"
          },
          {
            title: "Prisma vs. Supabase Typegen Architecture Comparison",
            url: "https://supabase.com/docs/guides/database/prisma",
            type: "Guide"
          }
        ]
      }
    },

    // Node 4
    {
      id: "step-4",
      stepNumber: 4,
      phaseId: "phase-2",
      title: "Multi-Provider Auth, Magic Links & SSR Session Management",
      timeEstimate: "2.5 hrs",
      difficulty: "Intermediate",
      summary: "Implement Google/GitHub OAuth, passwordless magic links, and secure HTTP-only cookie sessions in Next.js and React applications.",
      description: "User authentication in modern web applications has evolved far beyond basic username-password forms. Modern AI SaaS applications must offer frictionless social sign-on (Google, GitHub), passwordless email magic links, and rock-solid session persistence across Server-Side Rendered (SSR) frameworks like Next.js.\n\nHistorically, client-side authentication stored JWTs in browser `localStorage`, exposing tokens to cross-site scripting (XSS) extraction and creating jarring UI hydration flickers on server-rendered routes. Using the official `@supabase/ssr` library or Firebase Authentication with session cookies, developers manage authentication tokens securely inside encrypted, HTTP-only cookies. This allows Next.js Server Components, Middleware, and API routes to authenticate user sessions before rendering HTML, ensuring zero-latency route protection.",
      playbook: {
        setup: "Install `@supabase/ssr` in your Next.js project: `npm install @supabase/ssr @supabase/supabase-js`. Configure Google and GitHub OAuth credentials in Supabase Dashboard > Authentication > Providers.",
        execute: "Implement the Next.js SSR middleware (`middleware.ts`) using `createServerClient` to refresh expired auth cookies automatically on every request. Create an auth callback route (`/auth/callback/route.ts`) that exchanges the incoming authorization `code` for a user session. Wire a client-side sign-in button executing `supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: '...' } })`.",
        verify: "Log in with Google OAuth in an incognito window. Inspect browser storage: verify auth tokens are stored in secure HTTP-only cookies rather than `localStorage`. Refresh a protected server-rendered page: confirm the page loads without authentication redirect flickers."
      },
      tools: [
        {
          name: "Supabase Auth (@supabase/ssr)",
          type: "Auth Framework",
          url: "https://supabase.com/docs/guides/auth/server-side/nextjs",
          description: "Official server-side authentication library for Next.js and Remix managing secure HTTP-only cookie storage and token refreshes.",
          bestFor: "Next.js App Router, SSR cookie management & social OAuth"
        },
        {
          name: "Firebase Authentication",
          type: "Managed Auth",
          url: "https://firebase.google.com/products/auth",
          description: "Google's battle-tested identity platform supporting phone SMS auth, multi-factor authentication (MFA), and anonymous logins.",
          bestFor: "Mobile app authentication, SMS phone login & multi-factor auth"
        },
        {
          name: "Next.js App Router",
          type: "Web Framework",
          url: "https://nextjs.org",
          description: "React framework with Server Components and Middleware requiring secure HTTP-only cookie authentication flows.",
          bestFor: "Full-stack SSR web applications & protected server routes"
        }
      ],
      callouts: {
        mistake: "Storing Supabase JWT access tokens in browser `localStorage` in a Next.js App Router application, exposing sessions to XSS attacks and causing hydration flicker.",
        proTip: "Always configure your Next.js `middleware.ts` to call `supabase.auth.getUser()` rather than `getSession()`; `getUser()` validates the token cryptographically with Supabase Auth servers on every request.",
        mistakes: [
          "Forgetting to configure Redirect URLs in the Supabase Dashboard, causing OAuth callbacks to fail in production with 'URL not allowed'.",
          "Attempting to set cookies inside Next.js Server Components, where HTTP headers are read-only; cookie mutation must occur inside Server Actions or Middleware.",
          "Failing to handle auth callback errors, stranding users on blank white screens when social authentication is cancelled."
        ],
        proTips: [
          "Use passwordless magic links (`supabase.auth.signInWithOtp({ email })`) to eliminate forgotten password support tickets entirely.",
          "Use Supabase Auth Hooks (Postgres triggers on `auth.users`) to automatically insert a corresponding record into `public.profiles` upon user signup.",
          "Enable Multi-Factor Authentication (MFA / TOTP) in Supabase with two lines of code to meet enterprise security compliance mandates."
        ]
      },
      promptLab: {
        title: "Next.js App Router Server-Side Auth Middleware & Cookie Handler",
        description: "Author complete, production-grade Next.js middleware and server-side Supabase client utilities managing HTTP-only cookies and route protection.",
        variables: [
          {
            name: "Protected Path Pattern",
            label: "Protected Route Scope",
            options: ["/dashboard/* and /api/*", "/app/* and /settings/*", "All routes except /login and /marketing"],
            default: "/dashboard/* and /api/*"
          },
          {
            name: "Unauthenticated Redirect",
            label: "Login Route",
            options: ["/login?redirectTo=", "/auth/sign-in", "/join"],
            default: "/login?redirectTo="
          },
          {
            name: "Token Refresh Strategy",
            label: "Session Validation",
            options: ["Cryptographic Server Check (supabase.auth.getUser())", "Local Cookie Decode (supabase.auth.getSession())"],
            default: "Cryptographic Server Check (supabase.auth.getUser())"
          }
        ],
        template: `# Next.js SSR Auth Middleware Architecture
Route Scope: [Protected Path Pattern]
Redirect: [Unauthenticated Redirect]
Validation: [Token Refresh Strategy]

Provide:
1. utils/supabase/middleware.ts: Update session cookie function using createServerClient from @supabase/ssr.
2. root middleware.ts: Matcher configuration intercepting protected paths.
3. app/auth/callback/route.ts: Route handler exchanging OAuth code for session cookies.`,
        expectedOutput: `### Next.js App Router Authentication Architecture

#### 1. \`src/utils/supabase/middleware.ts\`
\`\`\`typescript
import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Cryptographically validate user session
  const { data: { user } } = await supabase.auth.getUser();

  // Redirect unauthenticated users
  if (!user && request.nextUrl.pathname.startsWith('/dashboard')) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('redirectTo', request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
\`\`\`

#### 2. \`src/middleware.ts\`
\`\`\`typescript
import { type NextRequest } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/protected/:path*'],
};
\`\`\`

#### 3. \`src/app/auth/callback/route.ts\`
\`\`\`typescript
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/dashboard';

  if (code) {
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() { return cookieStore.getAll(); },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
          },
        },
      }
    );
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) return NextResponse.redirect(\`\${origin}\${next}\`);
  }

  return NextResponse.redirect(\`\${origin}/auth/auth-code-error\`);
}
\`\`\``
      },
      conceptGuide: {
        title: "JWT Cookie Storage, OAuth2 Code Exchange & SSR Hydration",
        overview: "In modern full-stack architectures, authentication relies on JSON Web Tokens (JWTs) comprising an Access Token and a Refresh Token. Storing these credentials in `localStorage` prevents server components from reading user state before rendering. The `@supabase/ssr` pattern stores tokens inside HTTP-only, `SameSite=Lax` browser cookies. When an SSR request arrives, the Next.js server decodes the cookie, validates the cryptographic signature with the Auth server, and renders authenticated content without client-side loading spinners.",
        keyPoints: [
          "**HTTP-Only Cookie Storage:** Prevents token exfiltration via client-side XSS vulnerabilities.",
          "**Server-Side Hydration:** Eliminates UI flicker by granting Server Components immediate access to user session data.",
          "**PKCE Code Exchange:** The OAuth2 PKCE flow exchanges authorization codes for session tokens securely via backend route handlers."
        ]
      },
      learning: {
        resources: [
          {
            title: "Supabase SSR Auth for Next.js Official Guide",
            url: "https://supabase.com/docs/guides/auth/server-side/nextjs",
            type: "Official Docs"
          },
          {
            title: "Firebase Authentication: Manage Session Cookies",
            url: "https://firebase.google.com/docs/auth/admin/manage-cookies",
            type: "Official Docs"
          },
          {
            title: "Next.js Official Documentation: Route Middleware",
            url: "https://nextjs.org/docs/app/building-your-application/routing/middleware",
            type: "Framework Reference"
          },
          {
            title: "OWASP Session Management & Cookie Security Cheat Sheet",
            url: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html",
            type: "Security Standard"
          }
        ]
      }
    },

    // Node 5
    {
      id: "step-5",
      stepNumber: 5,
      phaseId: "phase-2",
      title: "Bulletproof Row-Level Security (RLS) Policies & Tenant Isolation",
      timeEstimate: "3 hrs",
      difficulty: "Advanced",
      summary: "Write performant USING (auth.uid() = user_id) and multi-tenant organization policies so client-side queries can never leak unauthorized rows.",
      description: "In traditional architectures, data authorization is enforced inside server application code (e.g., Express or Django middleware). If a developer forgets an `org_id` check in an API endpoint, confidential tenant data leaks to unauthorized users. PostgreSQL Row-Level Security (RLS) fundamentally re-engineers this model: moving authorization directly into the database engine itself.\n\nWhen RLS is active on a table, PostgreSQL evaluates SQL policies for every incoming query before returning rows. Even if client-side code executes `supabase.from('documents').select('*')`, the database engine automatically appends the policy clause—such as `WHERE org_id IN (SELECT org_id FROM memberships WHERE user_id = auth.uid())`—ensuring users only see data they are authorized to view. However, naive RLS policies cause severe performance bottlenecks; mastering security functions, indexing policy columns, and writing atomic `USING` and `WITH CHECK` clauses is the cornerstone of Supabase engineering.",
      playbook: {
        setup: "Enable RLS on your target tables: `ALTER TABLE documents ENABLE ROW LEVEL SECURITY;`. Ensure an index exists on the foreign key column: `CREATE INDEX idx_documents_org_id ON documents(org_id);`.",
        execute: "Author a multi-tenant organization policy: create a security definer helper function `is_org_member(org_id UUID)` to prevent recursive query loops. Create granular policies: separate SELECT policies (`USING (is_org_member(org_id))`) from INSERT/UPDATE policies (`WITH CHECK (is_org_member(org_id) AND auth.uid() = created_by)`).",
        verify: "Log into your client app as User A (belonging to Org 1). Execute a query fetching all documents. Confirm that documents belonging to Org 2 are completely invisible and omitted from the result set."
      },
      tools: [
        {
          name: "Supabase Row-Level Security (RLS)",
          type: "Database Security",
          url: "https://supabase.com/docs/guides/database/postgres/row-level-security",
          description: "Postgres-native security layer enforcing declarative access control policies directly on SQL tables.",
          bestFor: "Zero-leak multi-tenant authorization & client-side querying"
        },
        {
          name: "PostgreSQL Security Policies",
          type: "Core Engine Feature",
          url: "https://www.postgresql.org/docs/current/ddl-rowsecurity.html",
          description: "Declarative SQL policy syntax evaluating boolean conditions for SELECT, INSERT, UPDATE, and DELETE queries.",
          bestFor: "Fine-grained database permissions & compliance auditability"
        },
        {
          name: "Claude 3.7 Sonnet",
          type: "AI Auditor",
          url: "https://www.anthropic.com",
          description: "Frontier reasoning model used to red-team and audit RLS policies for infinite recursive loops and data leakage edge cases.",
          bestFor: "Auditing complex SQL RLS policies & performance review"
        }
      ],
      callouts: {
        mistake: "Creating a table and forgetting to run `ALTER TABLE <name> ENABLE ROW LEVEL SECURITY;`, leaving the entire table publicly readable to anyone with your anonymous API key.",
        proTip: "Wrap subqueries inside `(SELECT auth.uid())` instead of calling `auth.uid()` directly in your policy expressions; this allows PostgreSQL to cache the authentication ID per query rather than re-evaluating it for every scanned row.",
        mistakes: [
          "Writing recursive policies (e.g. Table A's policy queries Table B, whose policy queries Table A), triggering PostgreSQL's 100-recursion depth error.",
          "Using `USING` clauses for INSERT statements; `USING` filters existing rows for read/update, while `WITH CHECK` validates newly inserted data.",
          "Writing un-indexed RLS policies on high-cardinality tables, forcing sequential table scans that slow query times from 5ms to 2,000ms."
        ],
        proTips: [
          "Create a `SECURITY DEFINER` function with `SET search_path = public` to check user roles without triggering nested RLS checks on the memberships table.",
          "Use the Supabase Studio visual Table Editor to simulate queries under specific user JWTs to test RLS policies safely before deploying.",
          "Always write separate policies for SELECT, INSERT, UPDATE, and DELETE rather than using `FOR ALL`, ensuring write operations have strict validation."
        ]
      },
      promptLab: {
        title: "Bulletproof Multi-Tenant Organization RLS Policy Architect",
        description: "Author complete, production-grade PostgreSQL Row-Level Security (RLS) policies with cached auth functions and role-based permissions.",
        variables: [
          {
            name: "Multi-Tenant Model",
            label: "Authorization Hierarchy",
            options: ["Organization-Based (Users belong to Orgs via Memberships)", "Strict Single-User Isolation (auth.uid() = user_id)", "Role-Based Hierarchy (Owner, Admin, Member, Guest)"],
            default: "Organization-Based (Users belong to Orgs via Memberships)"
          },
          {
            name: "Target Table Name",
            label: "Protected Table",
            options: ["documents", "chat_threads", "api_keys", "billing_invoices"],
            default: "documents"
          },
          {
            name: "Write Permission Rule",
            label: "Mutation Constraint",
            options: ["Admins and Owners Only", "Document Creator or Org Admin", "Any Active Org Member"],
            default: "Document Creator or Org Admin"
          }
        ],
        template: `# PostgreSQL Row-Level Security (RLS) Policy Generator
Model: [Multi-Tenant Model]
Table: [Target Table Name]
Write Constraint: [Write Permission Rule]

Author production-ready SQL policies:
1. Enable RLS on the target table.
2. Create an optimized SECURITY DEFINER helper function checking membership and role to prevent recursive overhead.
3. Write separate, optimized policies for:
   - SELECT (Read access)
   - INSERT (Creation validation)
   - UPDATE (Mutation control)
   - DELETE (Destructive action controls)
4. Verify all foreign key columns used in the policies are indexed.`,
        expectedOutput: `### Production RLS Policies: \`public.documents\`

\`\`\`sql
-- 1. Enable RLS explicitly
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;

-- 2. Security Definer Helper Function (Prevents recursive RLS and caches auth)
CREATE OR REPLACE FUNCTION public.check_user_org_role(
  lookup_org_id UUID,
  required_roles TEXT[]
)
RETURNS BOOLEAN
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
STABLE
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM public.memberships
    WHERE org_id = lookup_org_id
      AND user_id = (SELECT auth.uid())
      AND role = ANY(required_roles)
  );
END;
$$;

-- 3. SELECT Policy: Any organization member can read documents
CREATE POLICY "Users can read documents belonging to their organizations"
ON public.documents
FOR SELECT
TO authenticated
USING (
  public.check_user_org_role(org_id, ARRAY['owner', 'admin', 'member'])
);

-- 4. INSERT Policy: Members can create documents, enforcing creator identity
CREATE POLICY "Users can insert documents into their organizations"
ON public.documents
FOR INSERT
TO authenticated
WITH CHECK (
  public.check_user_org_role(org_id, ARRAY['owner', 'admin', 'member'])
  AND (created_by = (SELECT auth.uid()) OR created_by IS NULL)
);

-- 5. UPDATE Policy: Only Document Creator or Org Admin/Owner can update
CREATE POLICY "Creators and Admins can update documents"
ON public.documents
FOR UPDATE
TO authenticated
USING (
  (created_by = (SELECT auth.uid())) OR
  public.check_user_org_role(org_id, ARRAY['owner', 'admin'])
)
WITH CHECK (
  public.check_user_org_role(org_id, ARRAY['owner', 'admin', 'member'])
);

-- 6. DELETE Policy: Only Admins and Owners can delete
CREATE POLICY "Only Admins and Owners can delete documents"
ON public.documents
FOR DELETE
TO authenticated
USING (
  public.check_user_org_role(org_id, ARRAY['owner', 'admin'])
);
\`\`\``
      },
      conceptGuide: {
        title: "Row-Level Security Internals, Security Definer Functions & Query Rewriting",
        overview: "Row-Level Security operates as an automated query-rewriting engine inside PostgreSQL's query planner. When a client issues a query against an RLS-enabled table, PostgreSQL intercepts the parse tree and injects the policy's `USING` boolean expression directly into the query's `WHERE` clause. By using `SECURITY DEFINER` functions, developers can inspect membership or role tables with elevated privileges without exposing those tables to direct client queries or triggering infinite recursion.",
        keyPoints: [
          "**Database-Level Enforcement:** Security rules cannot be bypassed by bugs or oversights in frontend code or server endpoints.",
          "**Cached Auth Execution:** Using `(SELECT auth.uid())` enables single-evaluation caching, slashing query execution latency.",
          "**Security Definer Isolation:** Helper functions bypass recursive RLS loops by executing with owner privileges under safe `search_path` constraints."
        ]
      },
      learning: {
        resources: [
          {
            title: "Supabase Official Row-Level Security (RLS) Guide",
            url: "https://supabase.com/docs/guides/database/postgres/row-level-security",
            type: "Official Docs"
          },
          {
            title: "PostgreSQL Row Security Policies Documentation",
            url: "https://www.postgresql.org/docs/current/ddl-rowsecurity.html",
            type: "Database Standard"
          },
          {
            title: "Supabase Security Best Practices & RLS Performance Guide",
            url: "https://supabase.com/docs/guides/database/postgres/row-level-security#performance-considerations",
            type: "Performance Guide"
          },
          {
            title: "OWASP Multi-Tenant Cloud Architecture Security Standards",
            url: "https://owasp.org/www-project-top-ten/",
            type: "Security Standard"
          }
        ]
      }
    },

    // Node 6
    {
      id: "step-6",
      stepNumber: 6,
      phaseId: "phase-2",
      title: "Secure Media Buckets, Signed URLs & Image Transformations",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Upload user PDFs, audio recordings, and AI images into RLS-protected storage buckets with expiring signed URLs and on-the-fly resizing.",
      description: "AI applications generate and consume large binary files: user-uploaded enterprise PDFs for RAG ingestion, voice memo audio clips for Whisper transcription, and generative image creations from Flux or Midjourney. Storing these large binaries directly inside database table rows causes massive database bloat and degrades query cache performance.\n\nSupabase Storage and Firebase Cloud Storage provide S3-compatible object storage integrated directly with the platform's authentication and permissions layers. In Supabase, storage buckets utilize the same PostgreSQL Row-Level Security policies as standard tables (operating on `storage.objects`). Developers can create private buckets where files are accessible only via short-lived cryptographic Signed URLs (e.g., expiring in 60 seconds) or serve optimized public assets using dynamic, on-the-fly image transformation parameters (`width=500&format=webp`).",
      playbook: {
        setup: "Navigate to Supabase Dashboard > Storage. Create a private bucket named `ai-documents` with public access disabled.",
        execute: "Configure RLS policies on `storage.objects`: allow authenticated users to upload files into folder paths matching their organization ID (`(storage.foldername(name))[1] = org_id`). Upload a PDF from the client: `supabase.storage.from('ai-documents').upload('org-123/doc.pdf', file)`. Generate a temporary 60-second signed URL for download: `supabase.storage.from('ai-documents').createSignedUrl('org-123/doc.pdf', 60)`.",
        verify: "Attempt to access the raw file URL directly in a browser: confirm an HTTP 403 Forbidden error is returned. Test the signed URL: confirm the file downloads cleanly, and verify the link expires and fails after 60 seconds."
      },
      tools: [
        {
          name: "Supabase Storage",
          type: "Object Storage",
          url: "https://supabase.com/docs/guides/storage",
          description: "S3-compatible object storage integrated with Postgres RLS, offering signed URLs, resumable TUS uploads, and CDN caching.",
          bestFor: "Private document storage, RLS-governed files & asset transformations"
        },
        {
          name: "Firebase Cloud Storage",
          type: "Managed Storage",
          url: "https://firebase.google.com/products/storage",
          description: "Google Cloud Storage-backed object repository with automatic mobile upload pausing, resuming, and network resilience.",
          bestFor: "Mobile photo/video uploads & Google Cloud ecosystem integration"
        },
        {
          name: "Cloudflare R2",
          type: "Zero-Egress Storage",
          url: "https://www.cloudflare.com/developer-platform/r2/",
          description: "S3-compatible object storage with zero egress bandwidth fees, ideal for serving petabytes of generative AI media.",
          bestFor: "High-volume generative image hosting & zero egress cost scaling"
        }
      ],
      callouts: {
        mistake: "Creating storage buckets with 'Public' mode enabled for confidential user documents, making proprietary PDFs accessible to anyone who guesses the URL hash.",
        proTip: "Use Supabase's image transformation CDN by appending query parameters (`?width=300&height=300&resize=contain`) to reduce image bandwidth by up to 80% without client-side resizing.",
        mistakes: [
          "Failing to enforce file size and MIME-type constraints in storage RLS policies, allowing users to upload malicious executable files or massive 5GB videos.",
          "Generating signed URLs with multi-week expiration times, defeating the purpose of ephemeral access control.",
          "Uploading multi-gigabyte files via standard HTTP POST instead of using the TUS resumable upload protocol, causing uploads to fail on spotty connections."
        ],
        proTips: [
          "Organize bucket folder paths by tenant ID (`bucket/org_id/user_id/file.pdf`) to make RLS folder-name evaluation simple and performant.",
          "Use `storage.extension(name)` inside RLS policies to restrict uploads strictly to approved formats like `pdf`, `png`, and `docx`.",
          "Set up an automated Supabase Database Webhook on `storage.objects` to trigger document text extraction edge functions immediately upon file upload."
        ]
      },
      promptLab: {
        title: "Secure Supabase Storage RLS Policies & Signed URL Handler",
        description: "Author comprehensive PostgreSQL RLS policies for private storage buckets with tenant folder isolation and MIME-type constraints.",
        variables: [
          {
            name: "Bucket Identity",
            label: "Bucket Name",
            options: ["ai-knowledge-vault", "user-generated-assets", "clinical-audio-recordings"],
            default: "ai-knowledge-vault"
          },
          {
            name: "Allowed File Formats",
            label: "MIME Type Constraint",
            options: ["PDF & Plain Text Only (application/pdf, text/plain)", "Images Only (image/png, image/jpeg, image/webp)", "Audio Only (audio/mpeg, audio/wav, audio/m4a)"],
            default: "PDF & Plain Text Only (application/pdf, text/plain)"
          },
          {
            name: "URL Expiration",
            label: "Signed URL Lifetime",
            options: ["60 Seconds (High Security)", "300 Seconds (5 Minutes)", "3600 Seconds (1 Hour)"],
            default: "60 Seconds (High Security)"
          }
        ],
        template: `# Secure Storage Bucket Architecture
Bucket: [Bucket Identity]
File Types: [Allowed File Formats]
Signed URL TTL: [URL Expiration]

Generate:
1. SQL script creating the private bucket and defining RLS policies on storage.objects.
2. Tenant path validation: users can only upload and read files inside their organization's subfolder.
3. Client-side TypeScript function uploading a file and retrieving a temporary signed download URL.`,
        expectedOutput: `### Storage RLS Policies: \`[Bucket Identity]\`

\`\`\`sql
-- 1. Create Private Bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'ai-knowledge-vault',
  'ai-knowledge-vault',
  false,
  52428800, -- 50 MB limit
  ARRAY['application/pdf', 'text/plain']
) ON CONFLICT (id) DO NOTHING;

-- 2. Storage RLS Policy: Tenant Isolation for Read Access
CREATE POLICY "Tenant Members can read files in their org folder"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'ai-knowledge-vault' AND
  public.check_user_org_role((storage.foldername(name))[1]::uuid, ARRAY['owner', 'admin', 'member'])
);

-- 3. Storage RLS Policy: Upload validation
CREATE POLICY "Tenant Members can upload files to their org folder"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'ai-knowledge-vault' AND
  public.check_user_org_role((storage.foldername(name))[1]::uuid, ARRAY['owner', 'admin', 'member'])
);
\`\`\`

#### TypeScript Upload & Signed URL Generator
\`\`\`typescript
export async function uploadAndSignDocument(
  orgId: string,
  file: File
): Promise<{ signedUrl: string | null; error: Error | null }> {
  const filePath = \`\${orgId}/\${Date.now()}_\${file.name}\`;

  // 1. Upload to private bucket
  const { error: uploadError } = await supabase.storage
    .from('ai-knowledge-vault')
    .upload(filePath, file, { contentType: file.type });

  if (uploadError) return { signedUrl: null, error: new Error(uploadError.message) };

  // 2. Generate temporary 60-second signed URL
  const { data, error: signError } = await supabase.storage
    .from('ai-knowledge-vault')
    .createSignedUrl(filePath, 60);

  if (signError) return { signedUrl: null, error: new Error(signError.message) };

  return { signedUrl: data.signedUrl, error: null };
}
\`\`\``
      },
      conceptGuide: {
        title: "Object Storage Architecture, Signed URL Cryptography & CDN Optimization",
        overview: "Relational databases are optimized for structured rows, not gigabyte binary blobs. Storing media in object storage keeps the database lean and memory caches efficient. Supabase Storage bridges AWS S3-compatible storage with PostgreSQL: file metadata is stored in a `storage.objects` table, allowing developers to author standard SQL Row-Level Security policies to protect binary access. Signed URLs append an HMAC cryptographic signature to the asset URL, granting temporary access to private files without authenticating the user against the origin server.",
        keyPoints: [
          "**Postgres-Governed Object Storage:** File access permissions are governed by the same SQL RLS engine protecting database tables.",
          "**Ephemeral Cryptographic URLs:** Signed URLs grant temporary download access with automated expiration, preventing permanent URL leakage.",
          "**Edge CDN Transformations:** On-the-fly resizing and WebP conversion reduce network payload sizes by up to 80%."
        ]
      },
      learning: {
        resources: [
          {
            title: "Supabase Storage Official Documentation & RLS Rules",
            url: "https://supabase.com/docs/guides/storage",
            type: "Official Docs"
          },
          {
            title: "Firebase Cloud Storage Architecture & Security Rules",
            url: "https://firebase.google.com/docs/storage",
            type: "Official Docs"
          },
          {
            title: "Supabase Image Transformation CDN Guide",
            url: "https://supabase.com/docs/guides/storage/image-transformations",
            type: "Performance Guide"
          },
          {
            title: "TUS Protocol: Resumable File Upload Open Standard",
            url: "https://tus.io",
            type: "Open Standard"
          }
        ]
      }
    },

    // Node 7
    {
      id: "step-7",
      stepNumber: 7,
      phaseId: "phase-3",
      title: "Enabling pgvector & High-Dimensional Embedding Columns",
      timeEstimate: "2.5 hrs",
      difficulty: "Advanced",
      summary: "Store 1536-dimension vector embeddings alongside relational metadata inside Postgres with fast HNSW indexing.",
      description: "Building Retrieval-Augmented Generation (RAG) applications traditionally required running two separate databases: a relational database for user records and billing, and a standalone vector database (like Pinecone or Weaviate) for semantic embeddings. This dual-database architecture introduced synchronization latency, distributed transaction failures, and complex dual-permission management.\n\n`pgvector` transforms PostgreSQL into a high-performance vector database by introducing native vector data types and similarity operators directly into SQL. In Supabase, enabling `CREATE EXTENSION vector;` allows tables to store high-dimensional float arrays (e.g. `vector(1536)` for OpenAI `text-embedding-3-small` or `vector(1024)` for Cohere). By building Hierarchical Navigable Small World (`HNSW`) indexes over vector columns, Postgres executes approximate nearest neighbor (ANN) similarity searches across hundreds of thousands of documents in under 10 milliseconds.",
      playbook: {
        setup: "Enable the pgvector extension in your local migration or Supabase SQL Editor: `CREATE EXTENSION IF NOT EXISTS vector WITH SCHEMA extensions;`.",
        execute: "Create a `document_chunks` table with a vector column: `embedding extensions.vector(1536)`. Create an HNSW index using cosine distance: `CREATE INDEX idx_chunks_hnsw ON document_chunks USING hnsw (embedding vector_cosine_ops) WITH (m = 16, ef_construction = 64);`.",
        verify: "Insert 5 sample vector embeddings. Run a similarity query using the cosine distance operator `<=>`: `SELECT id, content, 1 - (embedding <=> '[0.012, -0.043, ...]') AS similarity FROM document_chunks ORDER BY embedding <=> '[...]' LIMIT 3;`. Verify query execution time is under 15ms using `EXPLAIN ANALYZE`."
      },
      tools: [
        {
          name: "Supabase pgvector",
          type: "Postgres Extension",
          url: "https://supabase.com/docs/guides/ai",
          description: "Open-source vector similarity search extension for PostgreSQL supporting L2 distance, inner product, and cosine similarity with HNSW and IVFFlat indexes.",
          bestFor: "Co-locating relational data with semantic embeddings & ACID RAG"
        },
        {
          name: "OpenAI Embeddings API",
          type: "Embedding Provider",
          url: "https://platform.openai.com/docs/guides/embeddings",
          description: "Industry-standard text embedding models (text-embedding-3-small, text-embedding-3-large) producing normalized vector representations.",
          bestFor: "Generating semantic text vectors for RAG document chunking"
        },
        {
          name: "HNSW (Hierarchical Navigable Small World)",
          type: "Index Algorithm",
          url: "https://github.com/pgvector/pgvector#hnsw",
          description: "Graph-based approximate nearest neighbor indexing algorithm offering superior recall and low query latency compared to IVFFlat.",
          bestFor: "Fast production vector search & low-latency similarity queries"
        }
      ],
      callouts: {
        mistake: "Using the older `IVFFlat` index type instead of `HNSW` on pgvector tables; IVFFlat requires periodic retraining after data inserts and delivers inferior recall under high traffic.",
        proTip: "Always normalize your vectors before insertion if using cosine distance (`<=>`), or use the Inner Product operator (`<#>`) with normalized vectors for 20% faster index computation.",
        mistakes: [
          "Attempting to create an HNSW index on an empty table; HNSW builds significantly faster and more accurately after initial data has been populated.",
          "Mismatching vector dimensions (e.g. creating `vector(1536)` and trying to insert a 768-dimension vector from a local model), triggering immediate database insertion errors.",
          "Failing to filter vector searches by tenant ID (`WHERE org_id = ...`) in the index, causing the vector scan to evaluate irrelevant tenant clusters."
        ],
        proTips: [
          "Tune HNSW query accuracy in your session by adjusting `SET hnsw.ef_search = 100;` before executing vector similarity searches.",
          "Store the raw chunk text and token count in the same table as the embedding to avoid secondary joins when assembling prompt context for the LLM.",
          "Use the `<=>` operator for Cosine Distance, `<->` for Euclidean (L2) Distance, and `<#>` for Negative Inner Product."
        ]
      },
      promptLab: {
        title: "pgvector Migration, HNSW Indexing & Semantic Similarity Query",
        description: "Author a complete PostgreSQL migration script enabling pgvector, creating an HNSW-indexed document chunk table, and drafting a cosine similarity query.",
        variables: [
          {
            name: "Embedding Dimension",
            label: "Vector Dimensions",
            options: ["1536 (OpenAI text-embedding-3-small)", "3072 (OpenAI text-embedding-3-large)", "1024 (Cohere Embed v3 / BGE-M3)"],
            default: "1536 (OpenAI text-embedding-3-small)"
          },
          {
            name: "Index Parameters",
            label: "HNSW Tuning",
            options: ["Balanced (m=16, ef_construction=64)", "High Precision (m=24, ef_construction=128)", "Fast Build (m=12, ef_construction=48)"],
            default: "Balanced (m=16, ef_construction=64)"
          },
          {
            name: "Search Distance Metric",
            label: "Distance Operator",
            options: ["Cosine Similarity (vector_cosine_ops, <=>) ", "Inner Product (vector_ip_ops, <#>)", "L2 Euclidean Distance (vector_l2_ops, <->)"],
            default: "Cosine Similarity (vector_cosine_ops, <=>) "
          }
        ],
        template: `# pgvector Database Architecture
Dimensions: [Embedding Dimension]
HNSW Profile: [Index Parameters]
Metric: [Search Distance Metric]

Generate:
1. SQL migration creating the extension and public.document_chunks table with tenant foreign key.
2. HNSW index definition applying the selected tuning parameters and operator class.
3. Parameterized SQL query executing approximate nearest neighbor retrieval with threshold filtering.`,
        expectedOutput: `### pgvector Migration: \`supabase/migrations/20261024000002_enable_pgvector.sql\`

\`\`\`sql
-- 1. Enable pgvector in the extensions schema
CREATE EXTENSION IF NOT EXISTS vector WITH SCHEMA extensions;

-- 2. Document Chunks Table
CREATE TABLE IF NOT EXISTS public.document_chunks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id UUID NOT NULL REFERENCES public.documents(id) ON DELETE CASCADE,
  org_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  chunk_index INTEGER NOT NULL,
  content TEXT NOT NULL,
  token_count INTEGER NOT NULL,
  embedding extensions.vector(1536) NOT NULL,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now())
);

-- Performance Indexes
CREATE INDEX IF NOT EXISTS idx_chunks_org_id ON public.document_chunks(org_id);
CREATE INDEX IF NOT EXISTS idx_chunks_doc_id ON public.document_chunks(document_id);

-- 3. HNSW Index for Fast Cosine Vector Similarity Search
CREATE INDEX IF NOT EXISTS idx_document_chunks_hnsw
ON public.document_chunks
USING hnsw (embedding extensions.vector_cosine_ops)
WITH (m = 16, ef_construction = 64);

-- 4. Sample Parameterized Retrieval Query
-- Pass target_org_id, query_embedding, and similarity_threshold
SELECT
  id,
  document_id,
  content,
  metadata,
  1 - (embedding <=> '[0.012, -0.043, ...]'::extensions.vector) AS similarity_score
FROM public.document_chunks
WHERE org_id = 'org-uuid-here'
  AND (1 - (embedding <=> '[0.012, -0.043, ...]'::extensions.vector)) > 0.75
ORDER BY embedding <=> '[0.012, -0.043, ...]'::extensions.vector
LIMIT 5;
\`\`\``
      },
      conceptGuide: {
        title: "pgvector Mechanics, HNSW Multi-Layer Graphs & Cosine Distance",
        overview: "In linear vector search, finding the nearest neighbors requires computing vector distances against every row in the table (O(N) brute-force scan). The HNSW (Hierarchical Navigable Small World) algorithm constructs a multi-layer geometric graph where upper layers feature long-range connections for fast greedy navigation, and lower layers contain densely connected local clusters. This reduces search complexity to O(log N), allowing PostgreSQL to search millions of 1536-dimensional vectors in single-digit milliseconds.",
        keyPoints: [
          "**Unified SQL Infrastructure:** Eliminates the synchronization overhead and costs of maintaining external third-party vector databases.",
          "**HNSW Graph Traversal:** Multi-layered graph navigation delivers sub-10ms search latency without requiring background retraining.",
          "**Co-Located Filtering:** Combining vector distance (`<=>`) with standard relational SQL predicates (`WHERE org_id = ...`) filters results in a single step."
        ]
      },
      learning: {
        resources: [
          {
            title: "Supabase AI & Vector Search Documentation",
            url: "https://supabase.com/docs/guides/ai",
            type: "Official Docs"
          },
          {
            title: "pgvector Official GitHub Repository & Performance Benchmarks",
            url: "https://github.com/pgvector/pgvector",
            type: "Open Source Engine"
          },
          {
            title: "OpenAI Embeddings API Reference & Model Sizing",
            url: "https://platform.openai.com/docs/guides/embeddings",
            type: "API Reference"
          },
          {
            title: "HNSW Algorithm Theoretical Foundations & Tuning Guide",
            url: "https://arxiv.org/abs/1603.09320",
            type: "Research Paper"
          }
        ]
      }
    },

    // Node 8
    {
      id: "step-8",
      stepNumber: 8,
      phaseId: "phase-3",
      title: "Hybrid Search RPC Functions (Semantic Vector + Full-Text Keyword)",
      timeEstimate: "2.5 hrs",
      difficulty: "Advanced",
      summary: "Write custom PostgreSQL RPC functions combining cosine similarity with Postgres tsvector keyword search using Reciprocal Rank Fusion (RRF).",
      description: "While dense vector embeddings excel at grasping high-level semantic intent ('how do I fix billing issues?'), they notoriously struggle with exact lexical matches: acronyms, error codes (`ERR_403_STK`), SKU numbers, and customer names. Conversely, traditional Full-Text Search (FTS) with inverted keyword indexes (`tsvector`) matches exact keywords perfectly but fails on synonyms and conceptual phrasing.\n\nHybrid Search solves this dilemma by executing both semantic vector search and lexical full-text search simultaneously, merging the ranked outputs using Reciprocal Rank Fusion (RRF). By writing a custom PostgreSQL Remote Procedure Call (RPC) function in Supabase, the entire hybrid search, score normalization, and tenant filtering pipeline executes in a single database round-trip. The frontend invokes `supabase.rpc('hybrid_search', { query_text, query_embedding, ... })` to receive optimal context chunks for the LLM.",
      playbook: {
        setup: "Add a `tsvector` generated column and GIN index to your document chunks table: `ALTER TABLE document_chunks ADD COLUMN fts tsvector GENERATED ALWAYS AS (to_tsvector('english', content)) STORED; CREATE INDEX idx_chunks_fts ON document_chunks USING gin(fts);`.",
        execute: "Author a PostgreSQL stored function `hybrid_search_documents` that accepts `query_text`, `query_embedding`, `match_count`, and `target_org_id`. Implement Reciprocal Rank Fusion (RRF) logic: assigning score = `1.0 / (60 + rank)` for both vector and keyword passes, summing scores, and sorting by aggregated relevance.",
        verify: "Call the function from your TypeScript app: `const { data } = await supabase.rpc('hybrid_search_documents', { query_text: 'ERR_TIMEOUT_504', query_embedding: [...] })`. Verify that exact error codes and conceptual matches both rank at the top of the returned results."
      },
      tools: [
        {
          name: "Postgres RPC Functions",
          type: "Database Stored Procedure",
          url: "https://supabase.com/docs/guides/database/functions",
          description: "Server-side PL/pgSQL stored procedures exposed automatically as type-safe HTTP and client-side RPC endpoints.",
          bestFor: "Complex multi-step database algorithms & hybrid search pipelines"
        },
        {
          name: "PostgreSQL Full-Text Search (FTS)",
          type: "Built-In Search Engine",
          url: "https://www.postgresql.org/docs/current/textsearch.html",
          description: "Native lexical search engine featuring stemming, lexeme parsing, stop-word filtering, and high-speed GIN inverted indexes.",
          bestFor: "Exact keyword matching, acronym lookup & full-text search"
        },
        {
          name: "Cohere Rerank",
          type: "Cross-Encoder Model",
          url: "https://cohere.com/rerank",
          description: "Specialized cross-encoder model scoring query-document relevance as a second-stage reranking layer over hybrid database outputs.",
          bestFor: "Maximizing top-5 RAG retrieval precision & contextual filtering"
        }
      ],
      callouts: {
        mistake: "Summing raw cosine similarity scores (0.0 to 1.0) directly with BM25/tsvector scores (which are unbounded), completely biasing the search toward whichever metric produces higher raw numbers.",
        proTip: "Use Reciprocal Rank Fusion (RRF) with a standard constant `k=60` to normalize ranks into uniform fractional scores before summing.",
        mistakes: [
          "Failing to mark the RPC function as `STABLE`, preventing PostgreSQL from optimizing query execution plans across consecutive calls.",
          "Omitting the GIN index on the `tsvector` column, forcing PostgreSQL into an expensive sequential text search across all rows.",
          "Forgetting to validate organization membership inside the RPC function, inadvertently bypassing Row-Level Security."
        ],
        proTips: [
          "Combine English stemming (`english`) with a simple whitespace dictionary (`simple`) to support both natural language queries and exact code symbols.",
          "Pass the top 20 hybrid search results from Postgres through Cohere Rerank (`rerank-v3.5`) in your edge function to boost final answer quality by 25%.",
          "Test RPC performance directly in the Supabase SQL Editor using `EXPLAIN (ANALYZE, BUFFERS)` to verify index usage."
        ]
      },
      promptLab: {
        title: "Complete PostgreSQL Hybrid Search & Reciprocal Rank Fusion (RRF) RPC",
        description: "Author a production-grade PL/pgSQL stored procedure combining pgvector cosine distance and tsvector full-text search with RRF scoring.",
        variables: [
          {
            name: "Language Stemmer",
            label: "Text Search Dictionary",
            options: ["'english' (Standard Stemming)", "'simple' (Exact Literal Matching)", "Multi-lingual ('english' + 'simple')"],
            default: "'english' (Standard Stemming)"
          },
          {
            name: "RRF Smoothing Constant",
            label: "Rank Fusion Weight (k)",
            options: ["60 (Industry Standard RRF)", "20 (Biased toward top 5 ranks)", "100 (Smoothed distribution)"],
            default: "60 (Industry Standard RRF)"
          },
          {
            name: "Candidate Pool Size",
            label: "Per-Stage Candidate Pool",
            options: ["50 Candidates per method", "25 Candidates per method", "100 Candidates per method"],
            default: "50 Candidates per method"
          }
        ],
        template: `# PostgreSQL Hybrid Search RPC Architecture
Stemmer: [Language Stemmer]
RRF Constant: [RRF Smoothing Constant]
Pool Size: [Candidate Pool Size]

Write a complete, optimized PL/pgSQL migration function:
1. Define hybrid_search_chunks(query_text text, query_embedding vector, match_count int, filter_org_id uuid).
2. CTE 1: Semantic vector candidates ordered by cosine distance limit [Candidate Pool Size].
3. CTE 2: Full-text search candidates using websearch_to_tsquery limit [Candidate Pool Size].
4. Reciprocal Rank Fusion combination using 1.0 / (k + rank).
5. Output table contract returning chunk_id, content, and combined_score.`,
        expectedOutput: `### PostgreSQL Stored Procedure: \`public.hybrid_search_chunks\`

\`\`\`sql
CREATE OR REPLACE FUNCTION public.hybrid_search_chunks(
  query_text TEXT,
  query_embedding extensions.vector(1536),
  match_count INT,
  filter_org_id UUID,
  rrf_k INT DEFAULT 60
)
RETURNS TABLE (
  chunk_id UUID,
  document_id UUID,
  content TEXT,
  metadata JSONB,
  combined_score FLOAT
)
LANGUAGE plpgsql
STABLE
AS $$
BEGIN
  RETURN QUERY
  WITH
  -- 1. Semantic Vector Retrieval
  vector_candidates AS (
    SELECT
      id,
      ROW_NUMBER() OVER (ORDER BY embedding <=> query_embedding) AS rank
    FROM public.document_chunks
    WHERE org_id = filter_org_id
    ORDER BY embedding <=> query_embedding
    LIMIT 50
  ),
  -- 2. Full-Text Keyword Retrieval
  keyword_candidates AS (
    SELECT
      id,
      ROW_NUMBER() OVER (
        ORDER BY ts_rank_cd(fts, websearch_to_tsquery('english', query_text)) DESC
      ) AS rank
    FROM public.document_chunks
    WHERE org_id = filter_org_id
      AND fts @@ websearch_to_tsquery('english', query_text)
    ORDER BY ts_rank_cd(fts, websearch_to_tsquery('english', query_text)) DESC
    LIMIT 50
  )
  -- 3. Reciprocal Rank Fusion Merging
  SELECT
    dc.id AS chunk_id,
    dc.document_id,
    dc.content,
    dc.metadata,
    COALESCE(1.0 / (rrf_k + vc.rank), 0.0) +
    COALESCE(1.0 / (rrf_k + kc.rank), 0.0) AS combined_score
  FROM vector_candidates vc
  FULL OUTER JOIN keyword_candidates kc ON vc.id = kc.id
  JOIN public.document_chunks dc ON dc.id = COALESCE(vc.id, kc.id)
  ORDER BY combined_score DESC
  LIMIT match_count;
END;
$$;
\`\`\``
      },
      conceptGuide: {
        title: "Reciprocal Rank Fusion (RRF), Lexical Stemming & Vector Limits",
        overview: "Semantic vector models map words into dense numerical vectors based on co-occurrence in training data. While effective for thematic comprehension, they treat specific entity names or code strings as out-of-vocabulary noise. In contrast, PostgreSQL Full-Text Search processes documents into lexemes via stemming dictionaries and builds an inverted GIN index for exact token lookups. Reciprocal Rank Fusion (RRF) evaluates position rather than raw score: calculating `score = 1 / (60 + rank)`, ensuring that items appearing on both lists rank substantially higher than items on only one.",
        keyPoints: [
          "**Solving Vector Blind Spots:** Combining lexical matching with vector search ensures acronyms, SKU numbers, and error codes are retrieved accurately.",
          "**Rank-Based Normalization:** RRF eliminates the mathematically unsound practice of summing unbounded BM25 scores with bounded cosine distances.",
          "**Zero-Egress Execution:** Running the entire hybrid fusion pipeline inside PostgreSQL eliminates the latency of passing candidate lists back and forth over HTTP."
        ]
      },
      learning: {
        resources: [
          {
            title: "Supabase Hybrid Search & Full-Text Search Guide",
            url: "https://supabase.com/docs/guides/ai/hybrid-search",
            type: "Official Docs"
          },
          {
            title: "PostgreSQL Full-Text Search & ts_rank Documentation",
            url: "https://www.postgresql.org/docs/current/textsearch-controls.html",
            type: "Database Standard"
          },
          {
            title: "Reciprocal Rank Fusion (RRF) Original Information Retrieval Paper",
            url: "https://plg.uwaterloo.ca/~gvcormac/cormacksigir09-rrf.pdf",
            type: "Research Paper"
          },
          {
            title: "Cohere Rerank Integration & Best Practices Guide",
            url: "https://docs.cohere.com/docs/reranking",
            type: "Tool Documentation"
          }
        ]
      }
    },

    // Node 9
    {
      id: "step-9",
      stepNumber: 9,
      phaseId: "phase-3",
      title: "Realtime WebSockets, Broadcast Channels & Presence",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Stream live database inserts, multi-user collaborative cursors, and background AI job status updates to the UI without polling.",
      description: "Static polling intervals (e.g. `setInterval` fetching data every 3 seconds) waste database connections, exhaust API rate limits, and degrade user experience with jerky updates. For collaborative AI products—such as live multiplayer canvas editors, AI streaming token generators, and background task progress bars—state synchronization must happen instantly over persistent WebSockets.\n\nSupabase Realtime and Firebase Realtime Database provide multi-tenant WebSocket infrastructure out of the box. In Supabase, Realtime operates across three distinct modes: 'Postgres Changes' (listening to live SQL `INSERT`, `UPDATE`, and `DELETE` events filtered by tenant ID), 'Broadcast' (low-latency client-to-client messaging bypassing the database, ideal for collaborative mouse cursors), and 'Presence' (tracking online user statuses and active session state across connected browsers).",
      playbook: {
        setup: "Enable the Realtime publication for your target table in SQL: `ALTER PUBLICATION supabase_realtime ADD TABLE chat_messages;`.",
        execute: "In your React client, subscribe to live database inserts using the Supabase client: `supabase.channel('room-1').on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chat_messages', filter: 'thread_id=eq.' + threadId }, payload => { setMessages(prev => [...prev, payload.new]); }).subscribe()`.",
        verify: "Open your web app in two side-by-side browser windows. Insert a record into `chat_messages` from Window 1: verify that Window 2 receives the event over WebSockets and renders the new message in under 50ms without reloading the page."
      },
      tools: [
        {
          name: "Supabase Realtime",
          type: "WebSocket Engine",
          url: "https://supabase.com/docs/guides/realtime",
          description: "High-throughput Elixir-powered WebSocket server listening to Postgres write-ahead logs (WAL) and broadcasting state globally.",
          bestFor: "Live database sync, multiplayer presence & ephemeral messaging"
        },
        {
          name: "Firebase Realtime Database",
          type: "Realtime NoSQL",
          url: "https://firebase.google.com/products/realtime-database",
          description: "Google's original cloud-hosted JSON tree database synchronizing live state instantly across connected mobile and web clients.",
          bestFor: "Realtime collaborative JSON trees & instant mobile state sync"
        },
        {
          name: "React State Sync",
          type: "Frontend Runtime",
          url: "https://react.dev",
          description: "Frontend library managing component lifecycle hooks (`useEffect`) and optimistic UI updates for real-time WebSocket payloads.",
          bestFor: "Live UI rendering & subscription state management"
        }
      ],
      callouts: {
        mistake: "Listening to unfiltered Postgres Changes across an entire high-volume table, causing every connected client to receive thousands of irrelevant database events per second.",
        proTip: "Use 'Broadcast' channels instead of database writes for high-frequency events like typing indicators and cursor coordinates to avoid burning database write IOPS.",
        mistakes: [
          "Failing to clean up WebSocket subscriptions in React's `useEffect` return function (`supabase.removeChannel(channel)`), creating memory leaks.",
          "Assuming Realtime Postgres Changes bypass Row-Level Security; Realtime automatically evaluates RLS policies before dispatching events.",
          "Using database Realtime listeners for streaming LLM tokens, generating thousands of unnecessary database disk writes."
        ],
        proTips: [
          "Always apply server-side row filters on your channels: `filter: 'org_id=eq.' + orgId` to minimize network bandwidth.",
          "Use 'Presence' to build an interactive 'Who is currently viewing this document' avatar stack in under 20 lines of code.",
          "Combine optimistic client-side UI updates with Realtime subscriptions to give users instant zero-latency feedback while awaiting database confirmation."
        ]
      },
      promptLab: {
        title: "Production React Realtime Hook with Postgres Changes & Presence",
        description: "Author a clean, production-grade custom React hook (`useRealtimeThread`) managing Supabase WebSocket subscriptions, live message inserts, and active presence tracking.",
        variables: [
          {
            name: "Subscription Event",
            label: "Realtime Target",
            options: ["Postgres INSERT on chat_messages", "Postgres UPDATE on ai_job_runs (Status Tracking)", "Broadcast Channel for Multi-User Cursors"],
            default: "Postgres INSERT on chat_messages"
          },
          {
            name: "Presence Tracking",
            label: "User State Sync",
            options: ["Track Online User Avatars & Typing Status", "Disable Presence (Event Stream Only)"],
            default: "Track Online User Avatars & Typing Status"
          },
          {
            name: "Optimistic State",
            label: "UI Update Strategy",
            options: ["Optimistic UI Updates with Rollback", "Server-Confirmed State Only"],
            default: "Optimistic UI Updates with Rollback"
          }
        ],
        template: `# Realtime WebSocket Subscription Architecture
Event Type: [Subscription Event]
Presence: [Presence Tracking]
Optimistic UI: [Optimistic State]

Write a complete custom React hook:
1. Accept threadId and currentUser parameters.
2. Initialize and subscribe to a scoped Supabase Realtime channel.
3. Handle live payload events and state updates.
4. Track user presence (user info, online timestamp).
5. Ensure proper channel cleanup on component unmount.`,
        expectedOutput: `### Custom React Hook: \`src/hooks/useRealtimeThread.ts\`

\`\`\`typescript
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Database } from '@/types/database.types';

type Message = Database['public']['Tables']['chat_messages']['Row'];
type PresenceUser = { id: string; email: string; online_at: string };

export function useRealtimeThread(threadId: string, currentUser: { id: string; email: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<PresenceUser[]>([]);

  useEffect(() => {
    // 1. Initialize scoped channel
    const channel = supabase.channel(\`thread:\${threadId}\`, {
      config: { presence: { key: currentUser.id } },
    });

    // 2. Listen to Postgres Changes (INSERTs filtered by thread_id)
    channel
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: \`thread_id=eq.\${threadId}\`,
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new as Message]);
        }
      )
      // 3. Track Presence state
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState();
        const users: PresenceUser[] = [];
        for (const key in state) {
          users.push(state[key][0] as PresenceUser);
        }
        setOnlineUsers(users);
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          // Track current user presence
          await channel.track({
            id: currentUser.id,
            email: currentUser.email,
            online_at: new Date().toISOString(),
          });
        }
      });

    // 4. Cleanup on unmount
    return () => {
      channel.unsubscribe();
      supabase.removeChannel(channel);
    };
  }, [threadId, currentUser.id, currentUser.email]);

  return { messages, setMessages, onlineUsers };
}
\`\`\``
      },
      conceptGuide: {
        title: "PostgreSQL Logical Replication, Write-Ahead Logs (WAL) & Elixir Sockets",
        overview: "When data mutations occur in PostgreSQL, they are committed to an append-only Write-Ahead Log (WAL) on disk. Supabase Realtime leverages PostgreSQL logical replication decoding: an external Elixir Phoenix server connects as a replication follower, parses WAL binary changes into JSON events, filters events against active Row-Level Security rules, and broadcasts payloads over persistent WebSocket connections to millions of connected browser clients in under 50 milliseconds.",
        keyPoints: [
          "**WAL Logical Decoding:** Streams database changes directly from PostgreSQL disk logs without polling or database triggers.",
          "**Distributed WebSocket Scale:** Built on Elixir and Phoenix Channels, supporting millions of concurrent persistent connections.",
          "**Separation of Concerns:** Uses database changes for durable state and ephemeral broadcast channels for high-frequency cursor/typing signals."
        ]
      },
      learning: {
        resources: [
          {
            title: "Supabase Realtime Official Guide & Architecture",
            url: "https://supabase.com/docs/guides/realtime",
            type: "Official Docs"
          },
          {
            title: "Firebase Realtime Database Web Quickstart",
            url: "https://firebase.google.com/docs/database/web/start",
            type: "Official Docs"
          },
          {
            title: "PostgreSQL Logical Replication & Write-Ahead Log Documentation",
            url: "https://www.postgresql.org/docs/current/logical-replication.html",
            type: "Database Standard"
          },
          {
            title: "Phoenix Channels Architecture (The Engine Behind Realtime)",
            url: "https://hexdocs.pm/phoenix/channels.html",
            type: "Technical Reference"
          }
        ]
      }
    },

    // Node 10
    {
      id: "step-10",
      stepNumber: 10,
      phaseId: "phase-4",
      title: "Deno Edge Functions & Firebase Cloud Functions for AI APIs",
      timeEstimate: "2.5 hrs",
      difficulty: "Advanced",
      summary: "Run low-latency serverless TypeScript functions at the edge to keep LLM API keys secret and stream responses back to clients.",
      description: "Directly invoking LLM APIs (like Anthropic, OpenAI, or OpenRouter) from client-side browser code is a critical vulnerability: API keys are easily extracted from network request tabs, and users can bypass billing paywalls. Conversely, routing requests through distant monolithic backend servers adds hundreds of milliseconds of routing latency.\n\nSupabase Edge Functions (powered by the Deno runtime on Cloudflare/Fastly edge nodes) and Firebase Cloud Functions (or Firebase Genkit) solve this by running secure serverless TypeScript functions globally distributed close to the user. Edge Functions execute in under 10ms of cold start time, securely retrieve API secrets from environment variables, check the user's available credit balance in PostgreSQL, call the AI model, and stream generated tokens directly back to the browser using Server-Sent Events (SSE).",
      playbook: {
        setup: "Install Deno locally: `brew install deno`. In your Supabase project, create a new edge function: `supabase functions new ai-chat-stream`.",
        execute: "Write the function in TypeScript using Deno: extract the user's JWT from the `Authorization` header, verify credits in Postgres via Supabase service client, invoke the OpenRouter/Anthropic API with `stream: true`, and return a `ReadableStream` response with `text/event-stream` headers and CORS configurations.",
        verify: "Deploy the function: `supabase functions deploy ai-chat-stream`. Test via curl with a valid user bearer token: verify response tokens stream to the terminal immediately with sub-200ms time-to-first-token (TTFT)."
      },
      tools: [
        {
          name: "Supabase Edge Functions",
          type: "Serverless Runtime",
          url: "https://supabase.com/docs/guides/functions",
          description: "Globally distributed Deno TypeScript functions executing at the edge with instant cold starts and native Supabase Auth integration.",
          bestFor: "Securing AI API keys, streaming LLM responses & webhook processing"
        },
        {
          name: "Firebase Cloud Functions / Genkit",
          type: "Serverless Framework",
          url: "https://firebase.google.com/docs/functions",
          description: "Google Cloud Functions framework with Firebase Genkit integration for building structured AI workflows and model abstractions.",
          bestFor: "GCP ecosystem integrations, Genkit workflows & background task triggers"
        },
        {
          name: "Deno Runtime",
          type: "JavaScript/TypeScript Engine",
          url: "https://deno.com",
          description: "Modern, secure runtime for JavaScript and TypeScript with native Web standard APIs (fetch, ReadableStream, WebCrypto).",
          bestFor: "Edge execution, secure sandbox permissions & fast boot times"
        }
      ],
      callouts: {
        mistake: "Calling LLM APIs from client-side React code with exposed API keys, allowing malicious users to extract keys and rack up thousands of dollars in unauthorized usage.",
        proTip: "Use `Deno.env.get('ANTHROPIC_API_KEY')` inside Edge Functions and configure secrets securely using `supabase secrets set ANTHROPIC_API_KEY=sk-...`.",
        mistakes: [
          "Failing to handle CORS preflight `OPTIONS` requests in your Edge Function, causing browser `fetch()` calls to fail immediately.",
          "Buffering the entire LLM response in memory before returning to the client instead of piping the `ReadableStream` via Server-Sent Events (SSE).",
          "Using Node.js specific libraries (`fs`, `net`) inside Deno edge functions without standard `npm:` or `node:` specifiers."
        ],
        proTips: [
          "Include a credit-check transaction inside the Edge Function that deducts 1 credit before initiating the LLM call to prevent balance overdrafts.",
          "Use the standard `corsHeaders` helper to ensure clean cross-origin communication between your localhost client and deployed edge endpoints.",
          "Edge Functions natively support WebSockets, allowing you to build bidirectional agent chat streams directly on the edge."
        ]
      },
      promptLab: {
        title: "Streaming AI Chat Deno Edge Function with CORS & Credit Guard",
        description: "Author a complete Deno Edge Function in TypeScript for Supabase that verifies user authentication, checks credit balance, and streams LLM completions via SSE.",
        variables: [
          {
            name: "LLM Provider",
            label: "AI Model Gateway",
            options: ["Anthropic Claude 3.7 Sonnet", "OpenRouter (Multi-Model Gateway)", "OpenAI GPT-4o"],
            default: "Anthropic Claude 3.7 Sonnet"
          },
          {
            name: "Credit Deduction",
            label: "Billing Verification",
            options: ["Deduct 1 Token Credit in PostgreSQL", "Verify Active Subscription Tier", "Skip Billing Check"],
            default: "Deduct 1 Token Credit in PostgreSQL"
          },
          {
            name: "Streaming Protocol",
            label: "Stream Format",
            options: ["Server-Sent Events (text/event-stream)", "Raw Chunked Stream (application/octet-stream)"],
            default: "Server-Sent Events (text/event-stream)"
          }
        ],
        template: `# Deno Edge Function Architecture
Model: [LLM Provider]
Billing: [Credit Deduction]
Streaming: [Streaming Protocol]

Write a complete Deno TypeScript Edge Function:
1. Handle CORS preflight requests (OPTIONS).
2. Authenticate user from Authorization header using createClient.
3. Check and deduct user credits in Postgres.
4. Call [LLM Provider] with streaming enabled.
5. Pipe the response directly back to the client using [Streaming Protocol].`,
        expectedOutput: `### Supabase Edge Function: \`supabase/functions/ai-chat-stream/index.ts\`

\`\`\`typescript
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // 1. Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) throw new Error('Missing authorization header');

    // 2. Initialize Supabase Client with User Auth
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      { global: { headers: { Authorization: authHeader } } }
    );

    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) throw new Error('Unauthorized');

    const { prompt } = await req.json();

    // 3. Call Frontier Model with Streaming
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': Deno.env.get('ANTHROPIC_API_KEY')!,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-3-7-sonnet-20250219',
        max_tokens: 1024,
        stream: true,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    // 4. Return Server-Sent Events Stream directly to client
    return new Response(response.body, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
\`\`\``
      },
      conceptGuide: {
        title: "Edge Runtime Architecture, V8 Isolates & HTTP Streaming",
        overview: "Traditional serverless functions (like AWS Lambda) spin up container microVMs with cold start latencies of 200ms to 2 seconds. In contrast, Deno Edge Functions run on lightweight V8 Isolates deployed across global CDN edge locations. Isolates start in under 5 milliseconds and share physical memory safely. By implementing standard Web APIs (`ReadableStream` and `TransformStream`), Edge Functions can stream incremental LLM generation tokens to clients with near-zero latency while shielding sensitive credentials.",
        keyPoints: [
          "**Sub-10ms V8 Cold Starts:** Lightweight isolate sandboxes start instantly without container spin-up overhead.",
          "**API Secret Shielding:** Keeps third-party AI keys securely on the server side, out of reach of client-side inspection.",
          "**Native Stream Piping:** Pipes Server-Sent Event (SSE) token streams directly from LLMs to client browsers with zero buffering."
        ]
      },
      learning: {
        resources: [
          {
            title: "Supabase Edge Functions Documentation & Deno Quickstart",
            url: "https://supabase.com/docs/guides/functions",
            type: "Official Docs"
          },
          {
            title: "Deno Standard Web APIs Documentation",
            url: "https://deno.land/manual/runtime/web_platform_apis",
            type: "Runtime Reference"
          },
          {
            title: "Firebase Genkit AI Framework Overview",
            url: "https://firebase.google.com/docs/genkit",
            type: "Framework Docs"
          },
          {
            title: "Server-Sent Events (SSE) Web Standard Guide (MDN)",
            url: "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events",
            type: "Web Standard"
          }
        ]
      }
    },

    // Node 11
    {
      id: "step-11",
      stepNumber: 11,
      phaseId: "phase-4",
      title: "Database Webhooks, pg_cron Scheduled Jobs & Queues",
      timeEstimate: "2.5 hrs",
      difficulty: "Advanced",
      summary: "Trigger asynchronous background AI enrichment pipelines automatically whenever a new row is inserted, and schedule nightly cleanup cron jobs.",
      description: "Synchronous user request-response loops should never perform heavy computational work like generating 100 document embeddings, scraping websites, or executing multi-agent reasoning chains. Attempting to execute long-running tasks synchronously risks HTTP 504 gateway timeouts and frustrates users with frozen loading screens.\n\nSupabase provides a powerful asynchronous automation trifecta: Database Webhooks, `pg_cron`, and message queues (`pgmq`). Database Webhooks use PostgreSQL triggers to dispatch HTTP POST requests to Edge Functions or external automation tools (like n8n) whenever a row is inserted or modified. Meanwhile, `pg_cron` allows developers to schedule periodic database maintenance (purging inactive sessions, recalculating daily usage statistics) directly inside SQL. Pairing this with `pgmq` establishes guaranteed, retryable background job queues with zero external message brokers.",
      playbook: {
        setup: "Enable the pg_cron and pg_net extensions: `CREATE EXTENSION IF NOT EXISTS pg_cron; CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;`.",
        execute: "Configure a Database Webhook in SQL: create a trigger that invokes `net.http_post()` to call an Edge Function whenever a new document is inserted into `documents`. Configure a `pg_cron` job in SQL scheduling a nightly cleanup at 2 AM UTC: `SELECT cron.schedule('nightly-cleanup', '0 2 * * *', $$DELETE FROM dead_letter_queue WHERE resolved = true AND created_at < NOW() - INTERVAL '30 days'$$);`.",
        verify: "Insert a test document into `documents`. Check the Edge Function logs: confirm it received the webhook payload containing the inserted record within 200ms. Check `cron.job_run_details` to verify scheduled cron executions."
      },
      tools: [
        {
          name: "Supabase Database Webhooks",
          type: "Database Triggers",
          url: "https://supabase.com/docs/guides/database/webhooks",
          description: "Postgres-native webhooks triggering external endpoints or Edge Functions automatically on table INSERT, UPDATE, or DELETE events.",
          bestFor: "Event-driven background processing & asynchronous AI pipelines"
        },
        {
          name: "pg_cron",
          type: "Postgres Extension",
          url: "https://supabase.com/docs/guides/database/extensions/pg_cron",
          description: "Simple cron-based job scheduler running directly inside PostgreSQL for recurring SQL maintenance and batch jobs.",
          bestFor: "Scheduled database cleanup, daily rollups & automated reporting"
        },
        {
          name: "pgmq (Postgres Message Queue)",
          type: "Queue Extension",
          url: "https://supabase.com/docs/guides/database/extensions/pgmq",
          description: "Lightweight message queue extension inside PostgreSQL providing SQS-like guaranteed message delivery and visibility timeouts.",
          bestFor: "Asynchronous task queues, background workers & retry buffers"
        }
      ],
      callouts: {
        mistake: "Calling external third-party APIs synchronously inside a PostgreSQL trigger function, causing the entire database transaction to stall if the remote API experiences latency.",
        proTip: "Use `pg_net` (asynchronous non-blocking HTTP extension) inside triggers so the database commit completes in 1ms while the network request fires in the background.",
        mistakes: [
          "Scheduling `pg_cron` jobs to run every minute on heavy analytical queries, exhausting database CPU and starving user traffic.",
          "Failing to secure Database Webhook endpoints with a shared secret header, allowing unauthorized actors to trigger background jobs.",
          "Allowing failed queue jobs to loop endlessly without a visibility timeout or maximum retry limit."
        ],
        proTips: [
          "Use Database Webhooks to trigger embedding generation automatically: insert text -> webhook fires -> Edge Function chunks and embeds -> writes vectors back to DB.",
          "Inspect active cron jobs and execution status at any time with `SELECT * FROM cron.job_run_details ORDER BY start_time DESC LIMIT 10;`.",
          "Leverage `pgmq` to eliminate the need for external Redis or RabbitMQ infrastructure for background AI processing jobs."
        ]
      },
      promptLab: {
        title: "Automated Asynchronous Document Embedding Webhook & Cron Pipeline",
        description: "Author a complete SQL migration configuring pg_net asynchronous database webhooks for AI embedding generation and pg_cron scheduled maintenance.",
        variables: [
          {
            name: "Trigger Event",
            label: "Table Event",
            options: ["INSERT on public.documents", "UPDATE on public.documents (when content changes)", "INSERT on public.user_recordings"],
            default: "INSERT on public.documents"
          },
          {
            name: "Target Worker",
            label: "Asynchronous Destination",
            options: ["Supabase Edge Function (ai-document-embedder)", "External Worker URL (n8n Webhook / Cloud Run)", "AWS SQS / EventBridge Integration"],
            default: "Supabase Edge Function (ai-document-embedder)"
          },
          {
            name: "Cron Schedule",
            label: "Maintenance Interval",
            options: ["Nightly at 03:00 AM UTC", "Every 6 Hours", "Weekly on Sunday Midnight"],
            default: "Nightly at 03:00 AM UTC"
          }
        ],
        template: `# Event-Driven Database Automation Architecture
Event: [Trigger Event]
Worker: [Target Worker]
Cron: [Cron Schedule]

Write the complete PostgreSQL migration:
1. Enable pg_net and pg_cron extensions.
2. Create trigger function using net.http_post() to asynchronously notify [Target Worker].
3. Attach trigger to target table on [Trigger Event].
4. Configure pg_cron job executing automated database pruning at [Cron Schedule].`,
        expectedOutput: `### PostgreSQL Event Automation Migration

\`\`\`sql
-- 1. Enable asynchronous networking and cron extensions
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- 2. Asynchronous Webhook Trigger Function
CREATE OR REPLACE FUNCTION public.trigger_ai_embedding_pipeline()
RETURNS TRIGGER AS $$
DECLARE
  edge_function_url TEXT := 'https://xyzcompany.supabase.co/functions/v1/ai-document-embedder';
  service_key TEXT := 'Bearer ' || current_setting('app.settings.service_role_key', true);
BEGIN
  -- Fire non-blocking asynchronous HTTP POST via pg_net
  PERFORM extensions.http_post(
    edge_function_url,
    json_build_object(
      'type', TG_OP,
      'table', TG_TABLE_NAME,
      'record', row_to_json(NEW)
    )::text,
    'application/json',
    ARRAY[
      extensions.http_header('Authorization', service_key)
    ]
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. Attach Trigger to Documents Table
DROP TRIGGER IF EXISTS on_document_created_embed ON public.documents;
CREATE TRIGGER on_document_created_embed
AFTER INSERT ON public.documents
FOR EACH ROW EXECUTE FUNCTION public.trigger_ai_embedding_pipeline();

-- 4. Scheduled Maintenance Job with pg_cron
-- Runs Nightly at 03:00 AM UTC
SELECT cron.schedule(
  'nightly-database-maintenance',
  '0 3 * * *',
  $$
    -- Clean up soft-deleted records older than 30 days
    DELETE FROM public.documents WHERE deleted_at < NOW() - INTERVAL '30 days';
    -- Vacuum and analyze vector table for optimal index performance
    VACUUM ANALYZE public.document_chunks;
  $$
);
\`\`\``
      },
      conceptGuide: {
        title: "Asynchronous Event Triggers, pg_net Non-Blocking HTTP & Queues",
        overview: "In relational databases, triggers traditionally execute synchronously within the parent transaction boundary: if an external network call hangs, the database commit hangs. The `pg_net` extension resolves this by establishing an asynchronous background worker inside PostgreSQL that buffers outbound HTTP requests in memory and executes them asynchronously via libcurl without blocking the parent SQL transaction. This allows developers to trigger complex AI pipelines automatically from database events with zero user-facing latency.",
        keyPoints: [
          "**Non-Blocking Asynchronous HTTP:** `pg_net` decouples database transactions from external network latency.",
          "**Postgres-Native Cron:** `pg_cron` runs maintenance jobs inside the database engine without external cron servers or lambda scripts.",
          "**Event-Driven Decoupling:** Database webhooks guarantee background AI workers are notified the millisecond data is committed to disk."
        ]
      },
      learning: {
        resources: [
          {
            title: "Supabase Database Webhooks Documentation",
            url: "https://supabase.com/docs/guides/database/webhooks",
            type: "Official Docs"
          },
          {
            title: "pg_cron Extension Official Documentation & Syntax",
            url: "https://supabase.com/docs/guides/database/extensions/pg_cron",
            type: "Official Docs"
          },
          {
            title: "pg_net: Async HTTP Networking for PostgreSQL",
            url: "https://github.com/supabase/pg_net",
            type: "Open Source Engine"
          },
          {
            title: "pgmq: Message Queues Built on PostgreSQL",
            url: "https://github.com/tembo-io/pgmq",
            type: "Extension Reference"
          }
        ]
      }
    },

    // Node 12
    {
      id: "step-12",
      stepNumber: 12,
      phaseId: "phase-4",
      title: "Connection Pooling (Supavisor), Backups & Production Security Advisor",
      timeEstimate: "2 hrs",
      difficulty: "Advanced",
      summary: "Configure transaction-mode connection pooling for serverless traffic spikes, audit missing RLS tables, and enable Point-in-Time Recovery (PITR).",
      description: "When deploying an AI application onto serverless environments (like Next.js on Vercel, AWS Lambda, or Edge Functions), hundreds of ephemeral function instances can spin up in parallel during viral traffic spikes. Because PostgreSQL allocates a dedicated OS process for each connected client (consuming ~10 MB of RAM per connection), serverless traffic spikes can instantly exhaust database connection limits, crashing the database with `FATAL: remaining connection slots are reserved` errors.\n\nSupavisor—Supabase's next-generation connection pooler written in Elixir—solves this by multiplexing tens of thousands of serverless client connections into a small, steady pool of backend Postgres connections in 'Transaction Mode'. Furthermore, securing production databases requires running the Supabase Security Advisor to catch missing RLS policies or exposed schema views, and configuring Point-in-Time Recovery (PITR) to restore database state down to the exact second in the event of human error or malicious corruption.",
      playbook: {
        setup: "In the Supabase Dashboard, navigate to Project Settings > Database. Inspect your Connection Pooling settings powered by Supavisor.",
        execute: "Configure your serverless Next.js application to use the Transaction Mode Pooler connection string (`port 6543`) with `pgbouncer=true` parameter. Run the Supabase Security Advisor (Linter) to detect any tables without RLS, public functions without `search_path` set, or exposed auth schemas. Enable Point-in-Time Recovery (PITR).",
        verify: "Execute a simulated load test running 300 concurrent requests against your serverless API endpoints using Autocannon. Verify that active database connections remain capped well below limits while all requests complete with 200 OK status codes."
      },
      tools: [
        {
          name: "Supavisor Pooler",
          type: "Connection Pooler",
          url: "https://supabase.com/docs/guides/database/connecting-to-postgres#connection-pooler",
          description: "High-scale, Elixir-based connection pooler capable of multiplexing millions of serverless client connections into PostgreSQL.",
          bestFor: "Serverless connection scaling, Vercel deployments & traffic spikes"
        },
        {
          name: "Supabase Security Advisor",
          type: "Security Linter",
          url: "https://supabase.com/docs/guides/database/database-linter",
          description: "Automated security and performance auditing tool identifying unindexed foreign keys, missing RLS policies, and permissive schemas.",
          bestFor: "Production security hardening & vulnerability auditing"
        },
        {
          name: "Point-in-Time Recovery (PITR)",
          type: "Disaster Recovery",
          url: "https://supabase.com/docs/guides/platform/backups#point-in-time-recovery",
          description: "Continuous WAL archiving enabling databases to be restored to any exact second within the previous 7 to 30 days.",
          bestFor: "Accidental data deletion recovery & disaster mitigation"
        }
      ],
      callouts: {
        mistake: "Using the direct connection string (`port 5432`) in serverless Next.js API routes on Vercel, quickly exhausting PostgreSQL connections during concurrent traffic spikes.",
        proTip: "Use the Transaction Mode connection string (`port 6543`) for all serverless queries, but switch to Session Mode (`port 5432`) when running schema migrations via CLI or Drizzle.",
        mistakes: [
          "Running prepared statements over Transaction Mode pooling without setting `prepare=false` in your ORM, causing client protocol mismatch errors.",
          "Ignoring Security Advisor warnings about `SECURITY DEFINER` functions without explicit `SET search_path = public`, exposing functions to search-path hijacking.",
          "Failing to enable Point-in-Time Recovery (PITR) prior to major production migrations, leaving the team with only once-daily snapshot backups."
        ],
        proTips: [
          "Check active client and pool connections in real time using `SELECT * FROM pg_stat_activity WHERE state = 'active';`.",
          "Set `statement_timeout = '10s'` in production to prevent runaway analytical or vector queries from holding database locks indefinitely.",
          "Integrate Sentry with your database error handlers to immediately alert on pool exhaustion or slow query warnings."
        ]
      },
      promptLab: {
        title: "Production Supavisor Connection Pooling & Security Audit Checklist",
        description: "Author complete environment configurations and SQL audit scripts to verify Supavisor connection pooling and resolve all Security Advisor vulnerabilities.",
        variables: [
          {
            name: "Serverless Deployment",
            label: "Hosting Platform",
            options: ["Vercel (Next.js Serverless Functions)", "AWS Lambda / SST", "Cloudflare Workers / Pages"],
            default: "Vercel (Next.js Serverless Functions)"
          },
          {
            name: "Pooling Mode",
            label: "Supavisor Configuration",
            options: ["Transaction Mode (Port 6543, Shared Connections)", "Session Mode (Port 5432, State Preserved)"],
            default: "Transaction Mode (Port 6543, Shared Connections)"
          },
          {
            name: "Backup Tier",
            label: "Disaster Recovery SLA",
            options: ["Point-in-Time Recovery (PITR - 7 Days Continuous)", "Daily Automated Snapshots (Default)"],
            default: "Point-in-Time Recovery (PITR - 7 Days Continuous)"
          }
        ],
        template: `# Production Database Hardening Architecture
Deployment: [Serverless Deployment]
Pooling: [Pooling Mode]
Disaster Recovery: [Backup Tier]

Provide:
1. Production connection string configuration for Prisma / Drizzle / @supabase/ssr in [Serverless Deployment].
2. SQL security audit script detecting all tables with disabled RLS.
3. SQL query identifying slow queries and active connection bottlenecks in pg_stat_activity.
4. Operational checklist before launching to production traffic.`,
        expectedOutput: `### Production Database Configuration

#### 1. Serverless Connection Strings (\`.env.production\`)
\`\`\`bash
# Direct Connection (For CLI migrations only)
DIRECT_URL="postgres://postgres.[ref]:[password]@aws-0-us-east-1.pooler.supabase.com:5432/postgres"

# Supavisor Transaction Pooler (For Next.js / Serverless API routes)
DATABASE_URL="postgres://postgres.[ref]:[password]@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
\`\`\`

#### 2. SQL Security Audit: Detect Tables Missing RLS
\`\`\`sql
SELECT
  schemaname,
  tablename,
  rowsecurity
FROM pg_tables
WHERE schemaname = 'public'
  AND rowsecurity = false;
-- Expected output: 0 rows returned. Any table returned must have RLS enabled!
\`\`\`

#### 3. Active Connections & Slow Query Inspection
\`\`\`sql
SELECT
  pid,
  now() - pg_stat_activity.query_start AS duration,
  query,
  state
FROM pg_stat_activity
WHERE state != 'idle'
  AND (now() - pg_stat_activity.query_start) > interval '5 seconds'
ORDER BY duration DESC;
\`\`\`

#### 4. Pre-Launch Production Hardening Checklist
- [x] All \`public\` tables have \`ROW LEVEL SECURITY\` enabled.
- [x] Connection strings in serverless deployments point to port \`6543\` (Transaction Mode).
- [x] Statement timeout set to 10 seconds (\`ALTER ROLE authenticated SET statement_timeout = '10s';\`).
- [x] Point-in-Time Recovery (PITR) verified active in Project Settings.
- [x] Foreign keys indexed to prevent table-scan locks during cascading updates.`
      },
      conceptGuide: {
        title: "Connection Pooling Multiplexing, Statement Timeouts & PITR",
        overview: "In PostgreSQL, every client connection spawns an independent backend server process. When serverless platforms spin up hundreds of concurrent lambdas, database memory is rapidly exhausted by connection overhead alone. Supavisor sits as a high-performance proxy between client applications and PostgreSQL: in Transaction Mode, an active Postgres connection is loaned to a client only for the brief duration of a single SQL transaction and returned immediately to the pool. Point-in-Time Recovery continuously archives WAL segments to S3, allowing point-in-time state rollbacks.",
        keyPoints: [
          "**Transaction-Mode Multiplexing:** Thousands of ephemeral serverless functions share a fixed pool of 20–50 PostgreSQL connections.",
          "**Connection Overhead Defense:** Prevents serverless spikes from triggering fatal out-of-memory or connection-limit crashes.",
          "**Point-in-Time Recovery (PITR):** Continuous WAL archiving ensures accidental production drops can be rolled back to the exact second."
        ]
      },
      learning: {
        resources: [
          {
            title: "Supabase Connection Management & Supavisor Guide",
            url: "https://supabase.com/docs/guides/database/connecting-to-postgres#connection-pooler",
            type: "Official Docs"
          },
          {
            title: "Supabase Database Linter & Security Advisor",
            url: "https://supabase.com/docs/guides/database/database-linter",
            type: "Security Guide"
          },
          {
            title: "PostgreSQL Connection Pooling Architecture (PgBouncer/Supavisor)",
            url: "https://www.postgresql.org/docs/current/high-availability.html",
            type: "Database Standard"
          },
          {
            title: "Supabase Point-in-Time Recovery (PITR) Disaster Recovery",
            url: "https://supabase.com/docs/guides/platform/backups#point-in-time-recovery",
            type: "Disaster Recovery"
          }
        ]
      }
    }
  ]
};
