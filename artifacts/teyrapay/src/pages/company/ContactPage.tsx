import { useState } from 'react';
import PageLayout from '@/components/landing/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, MessageCircle, Building2, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <section className="relative bg-[hsl(222,47%,7%)] py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-100" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-primary/10 border border-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">Company · Contact</span>
          <h1 className="font-syne text-5xl font-extrabold text-white mb-4">Get in touch</h1>
          <p className="text-white/50 text-lg">Whether you have a sales question or need technical support, we're here to help.</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact options */}
            <div className="space-y-5">
              {[
                { icon: Mail, title: 'Email us', desc: 'For general enquiries and support.', contact: 'hello@teyrapay.com', color: 'text-blue-600 bg-blue-500/10' },
                { icon: MessageCircle, title: 'Sales', desc: 'Talk to our sales team about pricing, contracts, and Enterprise.', contact: 'sales@teyrapay.com', color: 'text-emerald-600 bg-emerald-500/10' },
                { icon: Building2, title: 'Office', desc: 'King Fahd Road, Riyadh\nSaudi Arabia 12345', contact: '+966 11 234 5678', color: 'text-purple-600 bg-purple-500/10' },
              ].map(item => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-card border border-border rounded-2xl p-5">
                    <div className={`w-9 h-9 ${item.color} rounded-xl flex items-center justify-center mb-3`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-syne font-bold text-sm text-foreground mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2 whitespace-pre-line">{item.desc}</p>
                    <p className="text-xs font-medium text-primary">{item.contact}</p>
                  </div>
                );
              })}
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-10">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-4" />
                  <h3 className="font-syne text-xl font-bold text-foreground mb-2">Message received!</h3>
                  <p className="text-muted-foreground">We'll get back to you within 1 business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label>Full Name</Label>
                      <Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Ahmed Al-Rashid" required />
                    </div>
                    <div className="space-y-1.5">
                      <Label>Work Email</Label>
                      <Input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="ahmed@company.com" required />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Company</Label>
                    <Input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Company name (optional)" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Subject</Label>
                    <Select value={form.subject} onValueChange={v => setForm({ ...form, subject: v })}>
                      <SelectTrigger><SelectValue placeholder="Select a topic..." /></SelectTrigger>
                      <SelectContent>
                        {['Sales enquiry', 'Technical support', 'Partnership', 'Compliance question', 'Press / Media', 'Other'].map(v => (
                          <SelectItem key={v} value={v}>{v}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Message</Label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us how we can help..."
                      required rows={5}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-xl font-semibold">Send Message</Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
