import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { products } from '@/lib/data';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24 sm:py-32 flex items-center min-h-[600px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/industrial/1920/1080"
            alt="Industrial Background"
            fill
            className="object-cover opacity-30"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center lg:text-left flex flex-col lg:flex-row items-center">
          <div className="lg:w-2/3 xl:w-1/2">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              Engineering the <span className="text-blue-400">Future</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300 mx-auto lg:mx-0">
              Discover cutting-edge industrial equipment, advanced automation systems, and high-performance technologies built for the modern enterprise.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                View Catalog
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/20"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6 border border-blue-100 shadow-sm">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Premium Quality</h3>
              <p className="mt-4 text-slate-600 max-w-xs">All products undergo rigorous testing to meet the highest industrial standards.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6 border border-blue-100 shadow-sm">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">High Performance</h3>
              <p className="mt-4 text-slate-600 max-w-xs">Engineered for maximum efficiency and reliability in demanding environments.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6 border border-blue-100 shadow-sm">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Global Logistics</h3>
              <p className="mt-4 text-slate-600 max-w-xs">We deliver our solutions to enterprises worldwide with secure and fast shipping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Featured Products</h2>
              <p className="mt-4 text-lg text-slate-600">Explore our most popular industrial solutions.</p>
            </div>
            <Link href="/products" className="hidden sm:flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 overflow-hidden flex flex-col">
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-0.5 text-xs font-semibold text-slate-900 shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    <Link href={`/products/${product.id}`}>
                      <span className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-slate-600 line-clamp-2 mb-6 flex-1">
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
          
          <div className="mt-10 sm:hidden flex justify-center">
            <Link href="/products" className="inline-flex items-center justify-center rounded-md bg-white border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors w-full">
              View all products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
