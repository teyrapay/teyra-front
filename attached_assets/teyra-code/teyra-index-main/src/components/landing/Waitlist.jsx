import { motion } from 'framer-motion';
import WaitlistForm from './WaitlistForm';

export default function Waitlist() {
  return (
    <section id="waitlist" className="py-28 bg-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Early Access
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-700 text-white mb-4">
            Join the waitlist
          </h2>
          <p className="text-white/50 text-lg mb-10 leading-relaxed">
            We're onboarding a select group of merchants and fintech partners. 
            Apply now and we'll reach out within 48 hours.
          </p>
          <WaitlistForm />
        </motion.div>
      </div>
    </section>
  );
}
