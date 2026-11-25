export default function ContactPage() {
  return (
    <main className="bg-white dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 transition-colors">
      <section className="max-w-7xl w-full mx-auto px-10 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Contact Us
        </h1>
        <p className="mt-5 text-lg text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Have a question or want to work with us? Send us a message and we will get back to you soon.
        </p>
      </section>

      <section className="max-w-7xl w-full mx-auto px-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <div className="p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 flex items-start gap-4">
              <i className="bx bx-envelope text-2xl mt-1"></i>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-zinc-400">
                  support@company.com
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 flex items-start gap-4">
              <i className="bx bx-phone text-2xl mt-1"></i>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-zinc-400">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 flex items-start gap-4">
              <i className="bx bx-map text-2xl mt-1"></i>
              <div>
                <h3 className="font-semibold">Office</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-zinc-400">
                  123 Business Street, Suite 100
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 flex items-start gap-4">
              <i className="bx bx-time text-2xl mt-1"></i>
              <div>
                <h3 className="font-semibold">Working Hours</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-zinc-400">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          <form className="p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message here..."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium text-sm hover:opacity-85 transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}