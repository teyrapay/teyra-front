import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Integrations from '@/components/landing/Integrations';
import Pricing from '@/components/landing/Pricing';
import Testimonials from '@/components/landing/Testimonials';
import Developers from '@/components/landing/Developers';
import Waitlist from '@/components/landing/Waitlist';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Integrations />
      <Pricing />
      <Testimonials />
      <Developers />
      <Waitlist />
      <Contact />
      <Footer />
    </div>
  );
}
