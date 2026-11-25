export const instant = false
import Link from "next/link";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="flex-1 bg-white dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 transition-colors">
      <div className="max-w-4xl w-full mx-auto px-10 py-16">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors mb-8"
        >
          <i className="bx bx-left-arrow-alt text-lg"></i>
          Back to Products
        </Link>

        <div className="p-8 sm:p-10 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900">
          <div className="flex items-center justify-between gap-4 mb-6">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-md bg-gray-200/70 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300">
              ID: #{id}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-600 dark:text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-600 dark:bg-green-400"></span>
              Available
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 flex items-center justify-center text-3xl">
              <i className="bx bx-package"></i>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Product #{id}
              </h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-zinc-400">
                Detailed information about this item.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-zinc-800 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium text-sm hover:opacity-85 transition"
            >
              Order / Contact Us
            </Link>
            <Link
              href="/products"
              className="px-6 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 font-medium text-sm hover:bg-gray-200 dark:hover:bg-zinc-800 transition"
            >
              All Products
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}