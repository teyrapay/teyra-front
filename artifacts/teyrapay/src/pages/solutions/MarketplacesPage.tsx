import { Users, ArrowRightLeft, Shield, Banknote, Globe, BarChart3 } from 'lucide-react';
import MarketingTemplate from '@/components/landing/MarketingTemplate';
import { useLanguage } from '@/contexts/LanguageContext';

const ICONS = [Users, ArrowRightLeft, Shield, Banknote, Globe, BarChart3];

const content = {
  en: {
    badge: 'Solutions · Marketplaces',
    headline: "Multi-party payments\nfor platforms and marketplaces",
    subheadline: "Collect from buyers, split with sellers, hold in escrow, and pay out on schedule — all through one API. Built for MENA marketplaces that need compliant money movement.",
    highlights: ['Split payments', 'Escrow support', 'Seller payouts', 'KYC per seller'],
    features: [
      { title: 'Seller onboarding', desc: "Each seller completes a streamlined KYC/KYB flow powered by TeyraPay. You set the requirements; we collect and verify the documents." },
      { title: 'Payment splitting', desc: "Automatically split each payment between your platform fee and the seller's payout. Configurable percentages or fixed amounts per transaction." },
      { title: 'Escrow & release', desc: "Hold funds in escrow until you trigger a release — after order delivery, dispute resolution, or a custom event via API." },
      { title: 'Automated seller payouts', desc: "Pay sellers on your schedule — daily, weekly, or per transaction. Direct bank transfer to accounts across MENA, with full audit trail." },
      { title: 'Multi-currency settlement', desc: "Buyers pay in their currency, sellers receive in theirs. TeyraPay handles FX and the settlement across SAR, AED, KWD, and more." },
      { title: 'Platform revenue analytics', desc: "Track GMV, platform take rate, seller earnings, and dispute rates in a dedicated analytics dashboard." },
    ],
  },
  ar: {
    badge: 'الحلول · الأسواق الإلكترونية',
    headline: "مدفوعات متعددة الأطراف\nللمنصات والأسواق",
    subheadline: "اجمع من المشترين وزّع على البائعين واحتفظ في ضمان وادفع بالجدول — كل ذلك عبر API واحد. مبني للأسواق في المنطقة التي تحتاج لتحريك أموال متوافق.",
    highlights: ['تقسيم المدفوعات', 'دعم الضمان', 'مدفوعات البائعين', 'KYC لكل بائع'],
    features: [
      { title: 'تأهيل البائعين', desc: 'يكمل كل بائع تدفق KYC/KYB المبسط. أنت تحدد المتطلبات؛ نحن نجمع المستندات ونتحقق منها.' },
      { title: 'تقسيم المدفوعات', desc: 'قسّم كل دفعة تلقائياً بين رسوم منصتك ومدفوعات البائع. نسب مئوية قابلة للضبط أو مبالغ ثابتة لكل معاملة.' },
      { title: 'الضمان والإصدار', desc: 'احتفظ بالأموال في ضمان حتى تطلق الإصدار — بعد تسليم الطلب أو حل النزاع أو حدث مخصص عبر API.' },
      { title: 'مدفوعات البائعين الآلية', desc: 'ادفع للبائعين وفق جدولك — يومياً أو أسبوعياً أو لكل معاملة. تحويل بنكي مباشر لحسابات في جميع أنحاء المنطقة.' },
      { title: 'تسوية متعددة العملات', desc: 'يدفع المشترون بعملتهم ويستلم البائعون بعملتهم. TeyraPay تتولى الصرف والتسوية عبر SAR وAED وKWD والمزيد.' },
      { title: 'تحليلات إيرادات المنصة', desc: 'تتبع إجمالي المبيعات ونسبة المنصة وأرباح البائعين ومعدلات النزاع في لوحة تحليلات مخصصة.' },
    ],
  },
} as const;

export default function MarketplacesPage() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <MarketingTemplate
      badge={c.badge} headline={c.headline} subheadline={c.subheadline}
      highlights={[...c.highlights]}
      features={c.features.map((f, i) => ({ ...f, icon: ICONS[i] }))}
    />
  );
}
