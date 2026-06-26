import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Filter } from 'lucide-react';
import { products } from '@/lib/data';

export const metadata = {
  title: 'Products | Nexus',
  description: 'Explore our complete catalog of industrial solutions.',
};

export default function ProductsPage() {
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Products Catalog</h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              Browse our comprehensive range of high-performance industrial equipment and technologies.
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-white border border-slate-200 rounded-lg p-1 shadow-sm shrink-0">
            <span className="px-3 py-2 text-sm font-medium text-slate-500 flex items-center">
              <Filter className="h-4 w-4 mr-2" /> Filter:
            </span>
            <button className="px-4 py-2 text-sm font-medium bg-slate-100 text-slate-900 rounded-md">All</button>
            {categories.map(cat => (
              <button key={cat} className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors hidden sm:block">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 overflow-hidden flex flex-col">
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-0.5 text-xs font-semibold text-slate-900 shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                  <Link href={`/products/${product.id}`}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2 mb-4 flex-1">
                  {product.description}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="font-semibold text-slate-900 text-sm">Ask for quote</span>
                  <span className="text-blue-600 font-medium text-sm flex items-center group-hover:text-blue-700">
                    Details <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
