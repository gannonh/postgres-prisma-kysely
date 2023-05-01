# Vercel Postgres + Prisma + Kysely Next.js Starter

Simple Next.js template that uses [Vercel Postgres](https://vercel.com/postgres) as the database, [Prisma](https://prisma.io/) as the schema/migration manager, [Kysely](https://kysely.dev/) as the typesafe ORM/db client, and [Prisma-Kysely](https://github.com/valtyr/prisma-kysely) to bridge the two.

## Purpose

Vercel just released native Postgres support, and with the release they published a Primsa template and a Kysely template. I love Prisma's migration flow, schema language and DX but I much prefer Kysely's typesafety and client. Prisma-keysely is a bridge between the two, allowing you to use Prisma's schema/migration manager with Kysely's client.

## How to Use

Use Primsa for your schema management and migrations and Kysely for your database client. Prisma-kysely will generate typesafe models from your Prisma schema and you can use them with Kysely.

You'll notice that `./primsa/schema.prisma` is using the prisma-kysely generator. This will generate typesafe models from your Prisma schema at `./primsa/schema.prisma` in `./lib/kysely.ts` when you run `npx prisma generate`. Check out the [Prisma-Kysely](https://github.com/valtyr/prisma-kysely) docs for more info

### One-Click Deploy

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgannonh%2Fpostgres-prisma-kysely)
