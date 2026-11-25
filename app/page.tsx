import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 transition-colors">
      <section className="max-w-7xl w-full mx-auto px-10 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Manage your products easily
        </h1>
        <p className="mt-5 text-lg text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">
          A simple and fast platform to view your catalog, add new items, and stay connected with clients.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/products"
            className="px-6 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium text-sm hover:opacity-85 transition"
          >
            View Products
          </Link>
          <Link
            href="/create"
            className="px-6 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 font-medium text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
          >
            Add New
          </Link>
        </div>
      </section>

      <section className="max-w-7xl w-full mx-auto px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900">
            <i className="bx bx-bolt-circle text-3xl mb-4"></i>
            <h3 className="text-lg font-semibold">Fast & Simple</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400">
              Clean interface without clutter. Find what you need in a couple of clicks.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900">
            <i className="bx bx-package text-3xl mb-4"></i>
            <h3 className="text-lg font-semibold">Product Catalog</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400">
              Keep all your items organized in one place and add new ones anytime.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900">
            <i className="bx bx-support text-3xl mb-4"></i>
            <h3 className="text-lg font-semibold">Always in Touch</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400">
              Have questions? Reach out through our contact page and we will help.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl w-full mx-auto px-10 py-20">
        <div className="p-12 rounded-2xl bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Ready to start?</h2>
          <p className="mt-3 text-gray-600 dark:text-zinc-400">
            Create your first product or contact our team today.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 px-6 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium text-sm hover:opacity-85 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}