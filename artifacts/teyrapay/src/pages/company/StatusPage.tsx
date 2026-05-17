import PageLayout from '@/components/landing/PageLayout';
import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SERVICES_EN = [
  { name: 'Payment Processing', status: 'operational', latency: '48ms' },
  { name: 'Checkout Pages', status: 'operational', latency: '120ms' },
  { name: 'API (REST)', status: 'operational', latency: '22ms' },
  { name: 'Webhook Delivery', status: 'operational', latency: '—' },
  { name: 'Merchant Dashboard', status: 'operational', latency: '95ms' },
  { name: 'Payout Processing', status: 'operational', latency: '—' },
  { name: 'Payment Links', status: 'operational', latency: '65ms' },
  { name: 'Fraud Engine', status: 'degraded', latency: '380ms' },
  { name: 'Reporting', status: 'operational', latency: '210ms' },
];

const SERVICES_AR = [
  { name: 'معالجة المدفوعات', status: 'operational', latency: '48ms' },
  { name: 'صفحات الدفع', status: 'operational', latency: '120ms' },
  { name: 'API (REST)', status: 'operational', latency: '22ms' },
  { name: 'توصيل الويب هوك', status: 'operational', latency: '—' },
  { name: 'لوحة التجار', status: 'operational', latency: '95ms' },
  { name: 'معالجة المدفوعات', status: 'operational', latency: '—' },
  { name: 'روابط الدفع', status: 'operational', latency: '65ms' },
  { name: 'محرك مكافحة الاحتيال', status: 'degraded', latency: '380ms' },
  { name: 'التقارير', status: 'operational', latency: '210ms' },
];

const UPTIME = [
  { month: 'Apr 2026', monthAr: 'أبريل 2026', uptime: '99.98%' },
  { month: 'Mar 2026', monthAr: 'مارس 2026', uptime: '100%' },
  { month: 'Feb 2026', monthAr: 'فبراير 2026', uptime: '99.95%' },
  { month: 'Jan 2026', monthAr: 'يناير 2026', uptime: '100%' },
];

function StatusIcon({ status }: { status: string }) {
  if (status === 'operational') return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
  if (status === 'degraded') return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
  return <XCircle className="w-4 h-4 text-red-500" />;
}

export default function StatusPage() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const SERVICES = isAr ? SERVICES_AR : SERVICES_EN;
  const hasDegraded = SERVICES.some(s => s.status === 'degraded');

  const txt = {
    badge: isAr ? 'الشركة · الحالة' : 'Company · Status',
    disruption: isAr ? 'انقطاع جزئي في الخدمة' : 'Partial service disruption',
    allOk: isAr ? 'جميع الأنظمة تعمل' : 'All systems operational',
    title: isAr ? 'حالة النظام' : 'System Status',
    servicesTitle: isAr ? 'حالة الخدمات' : 'Service Status',
    operational: isAr ? 'يعمل' : 'Operational',
    degraded: isAr ? 'أداء منخفض' : 'Degraded',
    latency: isAr ? 'زمن الاستجابة' : 'Latency',
    incidentsTitle: isAr ? 'الحوادث الأخيرة' : 'Recent Incidents',
    uptimeTitle: isAr ? 'توفر النظام' : 'Uptime History',
    incidents: isAr
      ? [
          { date: '12 مايو 2026', title: 'زمن استجابة مرتفع في محرك مكافحة الاحتيال', status: 'قيد المراقبة', desc: 'نحقق في أوقات استجابة مرتفعة في خدمة تقييم الاحتيال. معالجة المدفوعات غير متأثرة. الوقت المتوقع للحل الكامل: ساعتان.' },
          { date: '2 مايو 2026', title: 'تأخيرات جزئية في توصيل الويب هوك', status: 'محلول', desc: 'تسببت مشكلة في معالجة قائمة الانتظار في تأخيرات تصل إلى 15 دقيقة لبعض التجار. تم توصيل جميع الأحداث. السبب الجذري: عتبة تحجيم تلقائي مُكوَّنة بشكل خاطئ.' },
        ]
      : [
          { date: 'May 12, 2026', title: 'Elevated fraud engine latency', status: 'Monitoring', desc: 'We are investigating elevated response times in the fraud scoring service. Payment processing is unaffected. ETA to full resolution: 2 hours.' },
          { date: 'May 2, 2026', title: 'Partial webhook delivery delays', status: 'Resolved', desc: 'A queue processing issue caused webhook delivery delays of up to 15 minutes for some merchants. All queued events were delivered. Root cause: misconfigured autoscaler threshold.' },
        ],
  };

  return (
    <PageLayout>
      <section className="relative bg-[hsl(222,47%,7%)] py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-100" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-primary/10 border border-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">{txt.badge}</span>
          <div className={`inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full mb-6 ${
            hasDegraded ? 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-400' : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
          }`}>
            {hasDegraded ? <AlertTriangle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
            {hasDegraded ? txt.disruption : txt.allOk}
          </div>
          <h1 className="font-syne text-5xl font-extrabold text-white mb-4">{txt.title}</h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-syne text-xl font-bold text-foreground mb-6">{txt.servicesTitle}</h2>
          <div className="bg-card border border-border rounded-2xl overflow-hidden divide-y divide-border">
            {SERVICES.map(s => (
              <div key={s.name} className="flex items-center justify-between px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <StatusIcon status={s.status} />
                  <span className="text-sm text-foreground font-medium">{s.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-medium ${s.status === 'operational' ? 'text-emerald-500' : 'text-yellow-500'}`}>
                    {s.status === 'operational' ? txt.operational : txt.degraded}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono w-14 text-right">{s.latency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-syne text-xl font-bold text-foreground mb-6">{txt.incidentsTitle}</h2>
          <div className="space-y-4">
            {txt.incidents.map(i => (
              <div key={i.title} className="bg-card border border-border rounded-2xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">{i.date}</span>
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${i.status === 'Monitoring' || i.status === 'قيد المراقبة' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
                    {i.status}
                  </span>
                </div>
                <h3 className="font-syne font-bold text-sm text-foreground mb-2">{i.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-syne text-xl font-bold text-foreground mb-6">{txt.uptimeTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {UPTIME.map(u => (
              <div key={u.month} className="bg-card border border-border rounded-2xl p-4 text-center">
                <div className="font-syne text-lg font-bold text-emerald-500 mb-1">{u.uptime}</div>
                <div className="text-xs text-muted-foreground">{isAr ? u.monthAr : u.month}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
