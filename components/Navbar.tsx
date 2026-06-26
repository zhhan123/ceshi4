'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PackageSearch, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <PackageSearch className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold tracking-tight text-slate-900">Nexus</span>
        </Link>
        <div className="hidden md:flex md:items-center md:space-x-8">
          <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Home</Link>
          <Link href="/products" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Products</Link>
          <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">About</Link>
          <Link href="/contact" className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600">
            Contact Us
          </Link>
        </div>
        <div className="flex md:hidden">
          <button 
            type="button" 
            className="text-slate-600 hover:text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-white"
          >
            <div className="flex flex-col space-y-4 px-4 py-6">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600 hover:text-slate-900">Home</Link>
              <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600 hover:text-slate-900">Products</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600 hover:text-slate-900">About</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="inline-flex h-10 w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-500">
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
