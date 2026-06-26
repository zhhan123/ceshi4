'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '@/lib/data';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialProductId = searchParams?.get('product') || '';
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call for static deployment
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // In a real app, you would post to Formspree, Cloudflare Worker, etc.
    // e.g. fetch('https://formspree.io/f/your_form_id', { method: 'POST', body: new FormData(e.currentTarget) })
    
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h4 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Sent Successfully</h4>
        <p className="text-slate-600 max-w-md mx-auto">
          Thank you for reaching out. Our sales team has received your request and will get back to you within 24 business hours.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full rounded-xl border-slate-300 border bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full rounded-xl border-slate-300 border bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-xl border-slate-300 border bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
            placeholder="john@company.com"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="w-full rounded-xl border-slate-300 border bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
            placeholder="Acme Corp"
          />
        </div>
      </div>

      <div>
        <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-2">Product of Interest</label>
        <select
          id="product"
          name="product"
          defaultValue={initialProductId}
          className="w-full rounded-xl border-slate-300 border bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors appearance-none"
        >
          <option value="">General Inquiry</option>
          {products.map(p => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message or Requirements</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border-slate-300 border bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
          placeholder="Please describe your specific needs, estimated volume, or technical requirements..."
        ></textarea>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
          {status !== 'submitting' && <Send className="ml-2 h-5 w-5" />}
        </button>
      </div>
    </form>
  );
}
