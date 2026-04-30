export default function Footer() {
  const footerLinks = {
    Company: ['Our Story', 'The Collective', 'Join Us', 'Careers', 'Press Kit'],
    Services: ['Film Production', 'Commercial', 'Documentary', 'Music Videos', 'Color Grading'],
    Tools: ['Project Storyboard', 'Smart Critiques', 'Immersion Capsule', 'Workshops', 'Resources'],
  };

  const socialLinks = [
    { name: 'Instagram', href: '#', label: 'Instagram' },
    { name: 'LinkedIn', href: '#', label: 'LinkedIn' },
    { name: 'Twitter', href: '#', label: 'Twitter' },
    { name: 'YouTube', href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-black border-t border-gray-900 pt-16 md:pt-20 pb-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <h3
              className="text-4xl md:text-5xl font-medium mb-4"
              style={{ color: '#E1E0CC' }}
            >
              Prisma
            </h3>
            <p className="text-gray-400 text-sm md:text-base mb-6 max-w-sm">
              A worldwide network of visual artists, filmmakers and storytellers creating work that
              inspires and resonates.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-[#212121] hover:bg-primary rounded-full w-10 h-10 flex items-center justify-center transition-all group"
                >
                  <span className="text-primary group-hover:text-black text-xs font-medium transition-colors">
                    {social.name.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-primary text-sm font-medium mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-primary text-sm transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-900 pt-12 mb-12">
          <div className="max-w-2xl">
            <h4 className="text-xl md:text-2xl font-medium mb-3" style={{ color: '#E1E0CC' }}>
              Stay in the loop
            </h4>
            <p className="text-gray-400 text-sm mb-6">
              Get updates on our latest projects, workshops, and creative insights from the Prisma collective.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#212121] border border-gray-800 rounded-full px-5 py-3 text-sm text-primary placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-black font-medium px-6 py-3 rounded-full text-sm transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Prisma Creative Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
