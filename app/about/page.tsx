import Image from 'next/image';

export const metadata = {
  title: 'About Us | Nexus',
  description: 'Learn more about our mission and history.',
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-6">
            Pioneering the Future of Industry
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            At Nexus, we are dedicated to providing enterprise-grade industrial solutions that drive efficiency, automation, and progress across the globe.
          </p>
        </div>

        <div className="relative h-[400px] w-full rounded-3xl overflow-hidden mb-20 bg-slate-100">
          <Image
            src="https://picsum.photos/seed/factory/1920/1080"
            alt="Nexus Factory Facility"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We believe that the next industrial revolution will be powered by intelligent, connected hardware. Our mission is to accelerate this transition by building reliable, scalable, and highly performant technologies.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded in 2026, Nexus has rapidly grown into a global leader in industrial automation, aerospace components, and edge computing infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100">
              <div className="text-4xl font-extrabold text-blue-600 mb-2">50+</div>
              <div className="text-sm font-medium text-slate-600">Countries Served</div>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100">
              <div className="text-4xl font-extrabold text-blue-600 mb-2">10k+</div>
              <div className="text-sm font-medium text-slate-600">Active Deployments</div>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100">
              <div className="text-4xl font-extrabold text-blue-600 mb-2">24/7</div>
              <div className="text-sm font-medium text-slate-600">Enterprise Support</div>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100">
              <div className="text-4xl font-extrabold text-blue-600 mb-2">0%</div>
              <div className="text-sm font-medium text-slate-600">Carbon Footprint Goal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
