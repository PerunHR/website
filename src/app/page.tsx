export default function Home() {
  return (
    <main className="min-h-screen bg-primary-dark">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Perun<span className="text-accent-red">HR</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">
          Expert Staffing Solutions for Modern Businesses
        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-accent-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="px-8 py-3 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-primary-dark transition-colors"
          >
            Our Services
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-deep-blue">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Our <span className="text-gold">Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Recruitment', desc: 'Find the perfect candidates for your team' },
              { title: 'HR Consulting', desc: 'Strategic HR solutions tailored to your needs' },
              { title: 'Staffing', desc: 'Flexible workforce solutions for any scale' },
            ].map((service, i) => (
              <div key={i} className="p-6 bg-primary-dark rounded-xl border border-gold/20 hover:border-gold/50 transition-colors">
                <h3 className="text-xl font-bold text-gold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get in <span className="text-accent-red">Touch</span>
          </h2>
          <p className="text-gray-300 mb-8">
            Ready to transform your workforce? Contact us today.
          </p>
          <a
            href="mailto:contact@perunhr.com"
            className="inline-block px-8 py-3 bg-gold text-primary-dark font-bold rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} PerunHR. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
