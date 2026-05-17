import { useState } from 'react';
import PageLayout from '@/components/landing/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, MessageCircle, Building2, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CHANNEL_ICONS = [Mail, MessageCircle, Building2];
const CHANNEL_COLORS = [
  'text-blue-600 bg-blue-500/10',
  'text-emerald-600 bg-emerald-500/10',
  'text-purple-600 bg-purple-500/10',
];

export default function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/email/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } catch {}
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <section className="relative bg-[hsl(222,47%,7%)] py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-100" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-primary/10 border border-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">{t.contact.badge}</span>
          <h1 className="font-syne text-5xl font-extrabold text-white mb-4">{t.contact.title}</h1>
          <p className="text-white/50 text-lg">{t.contact.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact channels */}
            <div className="space-y-5">
              {t.contact.channels.map((ch, i) => {
                const Icon = CHANNEL_ICONS[i]!;
                const color = CHANNEL_COLORS[i]!;
                return (
                  <div key={ch.title} className="bg-card border border-border rounded-2xl p-5">
                    <div className={`w-9 h-9 ${color} rounded-xl flex items-center justify-center mb-3`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-syne font-bold text-sm text-foreground mb-1">{ch.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2 whitespace-pre-line">{ch.desc}</p>
                    <p className="text-xs font-medium text-primary">{ch.contact}</p>
                  </div>
                );
              })}
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-10">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-4" />
                  <h3 className="font-syne text-xl font-bold text-foreground mb-2">{t.contact.successTitle}</h3>
                  <p className="text-muted-foreground">{t.contact.successDesc}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label>{t.contact.name}</Label>
                      <Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder={t.contact.namePh} required />
                    </div>
                    <div className="space-y-1.5">
                      <Label>{t.contact.email}</Label>
                      <Input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder={t.contact.emailPh} required />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label>{t.contact.company}</Label>
                    <Input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                      placeholder={t.contact.companyPh} />
                  </div>
                  <div className="space-y-1.5">
                    <Label>{t.contact.subject}</Label>
                    <Select value={form.subject} onValueChange={v => setForm({ ...form, subject: v })}>
                      <SelectTrigger><SelectValue placeholder={t.contact.subjectPh} /></SelectTrigger>
                      <SelectContent>
                        {t.contact.subjects.map(v => (
                          <SelectItem key={v} value={v}>{v}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label>{t.contact.message}</Label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder={t.contact.messagePh}
                      required rows={5}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-xl font-semibold" disabled={loading}>
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t.contact.sending}
                      </span>
                    ) : t.contact.cta}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
