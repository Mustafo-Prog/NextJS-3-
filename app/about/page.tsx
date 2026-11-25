import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 transition-colors">
      <section className="max-w-7xl w-full mx-auto px-10 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          About Our Company
        </h1>
        <p className="mt-5 text-lg text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">
          We build simple, reliable tools to help businesses organize their products and connect with customers every day.
        </p>
      </section>

      <section className="max-w-7xl w-full mx-auto px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 text-gray-600 dark:text-zinc-400 leading-relaxed">
              We believe managing a catalog should not be complicated. Our goal is to provide a fast and clean workspace where teams can focus on what matters most.
            </p>
            <p className="mt-4 text-gray-600 dark:text-zinc-400 leading-relaxed">
              Started as a small project, our platform has grown into a trusted solution for modern teams looking for speed and clarity.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 text-center">
              <div className="text-3xl font-bold">2024</div>
              <div className="mt-1 text-sm text-gray-600 dark:text-zinc-400">Founded</div>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 text-center">
              <div className="text-3xl font-bold">10k+</div>
              <div className="mt-1 text-sm text-gray-600 dark:text-zinc-400">Users</div>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="mt-1 text-sm text-gray-600 dark:text-zinc-400">Products</div>
            </div>
            <div className="p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="mt-1 text-sm text-gray-600 dark:text-zinc-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl w-full mx-auto px-10 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          What We Value
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900">
            <i className="bx bx-check-shield text-3xl mb-4"></i>
            <h3 className="text-lg font-semibold">Quality First</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400">
              Every detail is carefully built to make sure the platform works smoothly.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900">
            <i className="bx bx-group text-3xl mb-4"></i>
            <h3 className="text-lg font-semibold">Customer Focus</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400">
              We listen to feedback and constantly improve based on real user needs.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900">
            <i className="bx bx-bulb text-3xl mb-4"></i>
            <h3 className="text-lg font-semibold">Simplicity</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400">
              No unnecessary complexity — just clear design and fast performance.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl w-full mx-auto px-10 py-16">
        <div className="p-12 rounded-2xl bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Want to learn more?</h2>
          <p className="mt-3 text-gray-600 dark:text-zinc-400">
            Browse our catalog or send us a message anytime.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/products"
              className="px-6 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium text-sm hover:opacity-85 transition"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 font-medium text-sm hover:bg-gray-200 dark:hover:bg-zinc-800 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}