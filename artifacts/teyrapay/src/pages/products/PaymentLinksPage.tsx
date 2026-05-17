import { Link2, QrCode, Share2, BarChart3, Clock, Globe } from 'lucide-react';
import MarketingTemplate from '@/components/landing/MarketingTemplate';
import { useLanguage } from '@/contexts/LanguageContext';

const ICONS = [Link2, QrCode, Share2, BarChart3, Clock, Globe];

const content = {
  en: {
    badge: 'Product · Payment Links',
    headline: "Share a link. Get paid.\nNo code, no setup.",
    subheadline: "Create a payment page in seconds and share it via WhatsApp, email, or social media. Perfect for freelancers, service businesses, and one-time collections.",
    highlights: ['Create in 30 seconds', 'Share via WhatsApp', 'QR code included', 'Expiry dates supported'],
    features: [
      { title: 'Instant link generation', desc: "Name it, set the amount (or let customers choose), add an expiry date. Your payment page is live in under a minute." },
      { title: 'QR code included', desc: "Every payment link comes with a QR code ready to print, embed, or display at your counter — zero extra steps." },
      { title: 'Share anywhere', desc: "Send via WhatsApp, SMS, email, or Instagram. The link opens a fully hosted, mobile-optimized checkout page." },
      { title: 'Track conversions', desc: "See how many people viewed your link, how many paid, and the total collected — all in real time from your dashboard." },
      { title: 'Expiry & one-time use', desc: "Set links to expire after a date or after a single use. Great for invoices, event tickets, and time-limited offers." },
      { title: 'Multi-currency', desc: "Set the currency to SAR, AED, KWD, USD, and more. TeyraPay handles FX display automatically." },
    ],
  },
  ar: {
    badge: 'المنتج · روابط الدفع',
    headline: "شارك رابطاً. احصل\nعلى أموالك.",
    subheadline: "أنشئ صفحة دفع في ثوانٍ وشاركها عبر WhatsApp أو البريد الإلكتروني أو وسائل التواصل الاجتماعي. مثالية للمستقلين والأعمال الخدمية والتحصيلات لمرة واحدة.",
    highlights: ['إنشاء في 30 ثانية', 'مشاركة عبر WhatsApp', 'QR code مرفق', 'دعم تواريخ الانتهاء'],
    features: [
      { title: 'إنشاء رابط فوري', desc: 'سمّه وحدد المبلغ وأضف تاريخ انتهاء. صفحة الدفع جاهزة في أقل من دقيقة.' },
      { title: 'QR code مرفق', desc: 'كل رابط دفع يأتي مع QR code جاهز للطباعة أو التضمين أو العرض على منضدتك.' },
      { title: 'مشاركة في كل مكان', desc: 'أرسل عبر WhatsApp أو SMS أو البريد الإلكتروني أو Instagram. يفتح الرابط صفحة دفع مستضافة محسّنة للجوال.' },
      { title: 'تتبع التحويلات', desc: 'اعرف كم شخصاً زار رابطك وكم دفع والإجمالي المُحصَّل — كل ذلك في الوقت الفعلي.' },
      { title: 'انتهاء الصلاحية والاستخدام لمرة واحدة', desc: 'حدد انتهاء صلاحية الروابط بعد تاريخ معين أو بعد استخدام واحد. مثالي للفواتير وتذاكر الفعاليات.' },
      { title: 'متعدد العملات', desc: 'حدد العملة بـ SAR أو AED أو KWD أو USD والمزيد. TeyraPay تتعامل مع الصرف تلقائياً.' },
    ],
  },
} as const;

export default function PaymentLinksPage() {
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
