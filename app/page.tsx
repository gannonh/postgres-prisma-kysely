import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Table from "@/components/table";
import TablePlaceholder from "@/components/table-placeholder";
import ExpandingArrow from "@/components/expanding-arrow";

// Prisma does not support Edge without the Data Proxy currently
export const runtime = "nodejs"; // default
export const preferredRegion = "home";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen">
      <Link
        href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgannonh%2Fpostgres-prisma-kysely"
        className="flex px-10 py-2 mt-20 space-x-1 text-sm font-medium text-gray-600 transition-all rounded-full shadow-sm group sm:mt-0 bg-white/30 ring-1 ring-gray-900/5 hover:shadow-lg active:shadow-sm"
      >
        <p>Deploy your own to Vercel</p>
        <ExpandingArrow />
      </Link>
      <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Postgres on Vercel
      </h1>
      <Suspense fallback={<TablePlaceholder />}>
        {/* @ts-expect-error Async Server Component */}
        <Table />
      </Suspense>
      <p className="w-full max-w-lg mt-6 font-light text-center text-gray-600">
        <Link
          href="https://vercel.com/postgres"
          className="font-medium underline transition-colors underline-offset-4 hover:text-black"
        >
          Vercel Postgres
        </Link>{" "}
        demo with{" "}
        <Link
          href="https://prisma.io"
          className="font-medium underline transition-colors underline-offset-4 hover:text-black"
        >
          Prisma
        </Link>{" "}
        as the schema mnaager and{" "}
        <Link
          href="https://kysely.dev/"
          className="font-medium underline transition-colors underline-offset-4 hover:text-black"
        >
          Kysely
        </Link>{" "}
        as the db client, using{" "}
        <Link
          href="https://github.com/valtyr/prisma-kysely"
          className="font-medium underline transition-colors underline-offset-4 hover:text-black"
        >
          prisma-kysely
        </Link>{" "}
        to bridge the two.
      </p>

      <div className="flex justify-between w-full px-20 py-10 sm:absolute sm:bottom-0">
        <Link href="https://vercel.com">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
        </Link>
        <Link
          href="https://github.com/gannonh/postgres-prisma-kysely"
          className="flex items-center space-x-2"
        >
          <Image
            src="/github.svg"
            alt="GitHub Logo"
            width={24}
            height={24}
            priority
          />
          <p className="font-light">Source</p>
        </Link>
      </div>
    </main>
  );
}
