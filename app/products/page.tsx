"use cache";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
}

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products");
  return res.json();
}

export default async function ProductPage() {
  const products: Product[] = await getProducts();

  return (
    <main className="flex-1 bg-white dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 transition-colors">
      <div className="max-w-7xl w-full mx-auto px-10 py-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Products
            </h1>
            <p className="mt-2 text-gray-600 dark:text-zinc-400">
              Browse all available items in our catalog.
            </p>
          </div>
          <Link
            href="/create"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium text-sm hover:opacity-85 transition w-fit"
          >
            <i className="bx bx-plus text-lg"></i>
            Add Product
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="group p-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 hover:border-black dark:hover:border-zinc-600 transition-all flex flex-col justify-between gap-6"
            >
              <div>
                <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-md bg-gray-200/70 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400">
                  #{product.id}
                </span>
                <h2 className="mt-4 text-xl font-semibold group-hover:underline">
                  {product.title}
                </h2>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-zinc-800 flex items-center justify-between">
                <span className="text-lg font-bold">${product.price}</span>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                  Details
                  <i className="bx bx-right-arrow-alt text-lg"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}


