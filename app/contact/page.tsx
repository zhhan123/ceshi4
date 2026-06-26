import { Suspense } from 'react';
import ContactForm from './ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact & Inquiry | Nexus',
  description: 'Request a quote or contact our sales team.',
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Let's Talk Business
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Request a quote, ask about our products, or get in touch with our enterprise sales team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6 border-b pb-4">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mt-1 shrink-0" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-900">Email</p>
                    <p className="text-sm text-slate-600 mt-1">sales@nexus-industrial.com</p>
                    <p className="text-sm text-slate-600">support@nexus-industrial.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mt-1 shrink-0" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-900">Phone</p>
                    <p className="text-sm text-slate-600 mt-1">+1 (800) 123-4567</p>
                    <p className="text-sm text-slate-500 mt-1">Mon-Fri 9am to 6pm EST</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 shrink-0" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-900">Headquarters</p>
                    <p className="text-sm text-slate-600 mt-1">
                      100 Innovation Drive<br />
                      Tech Park, CA 94043<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-900 p-8 rounded-2xl text-white shadow-sm">
              <h3 className="text-lg font-bold mb-2">Cloudflare Ready</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                This site is fully statically generated. You can hook this form up to Cloudflare Pages Functions, Formspree, or your own backend API for processing inquiries.
              </p>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send an Inquiry</h3>
              <Suspense fallback={<div className="h-64 flex items-center justify-center text-slate-500">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
