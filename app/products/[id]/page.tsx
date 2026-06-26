import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Package, Shield, Zap } from 'lucide-react';
import { products } from '@/lib/data';

// This function enables static generation for all products
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/products" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-100 border border-slate-200">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover object-center"
              priority
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <div className="mb-2 flex items-center">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 ring-1 ring-inset ring-blue-600/20">
                {product.category}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {product.longDescription}
            </p>

            <div className="mb-10">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-700">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-blue-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 py-6 border-y border-slate-100 mb-8 bg-slate-50/50 -mx-4 px-4 sm:mx-0 sm:px-6 rounded-2xl">
              <div className="flex-1">
                <p className="text-sm text-slate-500 mb-1">Pricing</p>
                <p className="text-2xl font-bold text-slate-900">Custom Quote</p>
              </div>
              <div className="w-full sm:w-auto">
                <Link
                  href={`/contact?product=${product.id}`}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition-all"
                >
                  Request Inquiry
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-100">
                <Shield className="h-6 w-6 text-slate-400 mb-2" />
                <span className="text-xs font-medium text-slate-600">2 Year Warranty</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-100">
                <Package className="h-6 w-6 text-slate-400 mb-2" />
                <span className="text-xs font-medium text-slate-600">Secure Shipping</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-100">
                <Zap className="h-6 w-6 text-slate-400 mb-2" />
                <span className="text-xs font-medium text-slate-600">Fast Setup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
