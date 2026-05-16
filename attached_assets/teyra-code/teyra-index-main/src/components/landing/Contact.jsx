import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from './ContactForm';

const INFO = [
  { icon: Mail, label: 'Email', value: 'hello@orpeaks.com' },
  { icon: Phone, label: 'Phone', value: '+966 11 XXX XXXX' },
  { icon: MapPin, label: 'Headquarters', value: 'Riyadh, Saudi Arabia' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
              Contact
            </span>
            <h2 className="font-syne text-4xl md:text-5xl font-700 text-foreground mb-4">
              Let's talk payments
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Whether you're exploring a partnership, have a technical question, 
              or want to see a live demo — we're here.
            </p>
            <div className="space-y-5">
              {INFO.map(item => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-medium">{item.label}</div>
                      <div className="text-sm font-medium text-foreground">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-8">
            <h3 className="font-syne text-xl font-700 text-foreground mb-6">Send us a message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
