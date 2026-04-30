import Hero from './Hero';
import About from './About';
import Features from './Features';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Team from './Team';
import CTA from './CTA';
import Footer from './Footer';

export default function PrismaLanding() {
  return (
    <div className="bg-black">
      <Hero />
      <About />
      <Features />
      <Portfolio />
      <Testimonials />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}
