import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, CheckCircle2, Send } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: 'general', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.entities.ContactInquiry.create({ ...form, status: 'new' });
    setLoading(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-12">
        <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
        <h3 className="font-syne text-xl font-700 text-foreground mb-2">Message sent!</h3>
        <p className="text-muted-foreground text-sm">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Input placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
          required className="h-11 rounded-xl" />
        <Input type="email" placeholder="Email address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
          required className="h-11 rounded-xl" />
      </div>
      <Input placeholder="Company (optional)" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
        className="h-11 rounded-xl" />
      <Select onValueChange={v => setForm({ ...form, subject: v })} defaultValue="general">
        <SelectTrigger className="h-11 rounded-xl">
          <SelectValue placeholder="Subject" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="general">General Inquiry</SelectItem>
          <SelectItem value="sales">Sales</SelectItem>
          <SelectItem value="partnership">Partnership</SelectItem>
          <SelectItem value="technical">Technical Support</SelectItem>
          <SelectItem value="press">Press</SelectItem>
        </SelectContent>
      </Select>
      <Textarea placeholder="Tell us about your needs..." value={form.message}
        onChange={e => setForm({ ...form, message: e.target.value })}
        required className="min-h-28 rounded-xl resize-none" />
      <Button type="submit" disabled={loading} className="w-full h-11 bg-primary hover:bg-primary/90 font-semibold rounded-xl">
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Send className="w-4 h-4 mr-2" /> Send Message</>}
      </Button>
    </form>
  );
}
