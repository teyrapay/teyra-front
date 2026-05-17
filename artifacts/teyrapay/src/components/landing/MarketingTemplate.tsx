import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/landing/PageLayout';
import { type LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Feature { title: string; desc: string; icon?: LucideIcon }
interface MarketingTemplateProps {
  badge: string;
  headline: string;
  subheadline: string;
  ctaText?: string;
  ctaHref?: string;
  features?: Feature[];
  highlights?: string[];
  body?: React.ReactNode;
}

export default function MarketingTemplate({
  badge, headline, subheadline, ctaText, ctaHref = '/get-started',
  features, highlights, body,
}: MarketingTemplateProps) {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  const defaultCta = isAr ? 'احصل على وصول مبكر' : 'Get Early Access';
  const viewDocs = isAr ? 'عرض التوثيق' : 'View Documentation';
  const readyTitle = isAr ? 'هل أنت مستعد للبدء؟' : 'Ready to get started?';
  const readyDesc = isAr ? 'انضم إلى مئات التجار في منطقة الشرق الأوسط الذين يستخدمون TeyraPay.' : 'Join hundreds of MENA merchants already using TeyraPay.';
  const startFree = isAr ? 'ابدأ مجاناً' : 'Start for Free';

  return (
    <PageLayout>
      <section className="relative bg-[hsl(222,47%,7%)] py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-100" />
        <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-primary/10 border border-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            {badge}
          </span>
          <h1 className="font-syne text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 whitespace-pre-line">
            {headline}
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-xl px-8 font-semibold shadow-xl shadow-primary/20"
              onClick={() => window.location.href = ctaHref}>
              {ctaText ?? defaultCta} <ArrowRight className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
            </Button>
            <Button size="lg" variant="outline"
              className="rounded-xl px-8 font-semibold border-white/15 text-white/70 hover:text-white hover:bg-white/[0.06]"
              onClick={() => window.location.href = '/docs'}>
              {viewDocs}
            </Button>
          </div>
        </div>
      </section>

      {highlights && (
        <section className="bg-background border-y border-border py-10">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {highlights.map(h => (
                <div key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {features && (
        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(f => {
                const Icon = f.icon;
                return (
                  <div key={f.title}
                    className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all group">
                    {Icon && (
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    )}
                    <h3 className="font-syne font-bold text-base text-foreground mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {body}

      <section className="py-24 bg-[hsl(222,47%,7%)]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-syne text-3xl md:text-4xl font-bold text-white mb-4">{readyTitle}</h2>
          <p className="text-white/40 mb-8">{readyDesc}</p>
          <Button size="lg" className="rounded-xl px-10 font-semibold shadow-xl shadow-primary/20"
            onClick={() => window.location.href = '/get-started'}>
            {startFree} <ArrowRight className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
