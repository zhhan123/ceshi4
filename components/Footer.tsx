export default function Footer() {
  return (
    <footer className="bg-slate-50 py-12 border-t mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <span className="text-xl font-bold tracking-tight text-slate-900">Nexus</span>
            <p className="mt-4 text-sm text-slate-600">
              Providing cutting-edge industrial solutions and technologies for the modern enterprise.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Products</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href="/products" className="hover:text-blue-600 transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Aerospace</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Automation</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Computing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href="/about" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">News</a></li>
              <li><a href="/contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Nexus Inc. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-4 justify-center">
            {/* Social Links could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
