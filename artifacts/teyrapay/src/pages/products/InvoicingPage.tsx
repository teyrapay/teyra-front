import { FileText, Send, Download, Clock, Bell, CreditCard } from 'lucide-react';
import MarketingTemplate from '@/components/landing/MarketingTemplate';
import { useLanguage } from '@/contexts/LanguageContext';

const ICONS = [FileText, Send, Clock, Bell, Download, CreditCard];

const content = {
  en: {
    badge: 'Product · Invoicing',
    headline: "Professional invoices that\nalmost send themselves",
    subheadline: "Create branded invoices, send them in one click, and let TeyraPay chase payments automatically. Supports VAT, multi-currency, and PDF export out of the box.",
    highlights: ['VAT compliant', 'PDF export', 'Auto-reminders', 'Online payment link'],
    features: [
      { title: 'Branded PDF invoices', desc: "Your logo, business details, and VAT number — automatically formatted to ZATCA and regional tax requirements." },
      { title: 'One-click sending', desc: "Send invoices directly from TeyraPay via email. Customers see a professional email with a Pay Now button." },
      { title: 'Automatic reminders', desc: "Set reminder schedules (3 days before, on due date, 7 days after). We send them so you don't have to follow up manually." },
      { title: 'Real-time status tracking', desc: "Know when the invoice was opened, viewed, and paid. Statuses update live: Draft → Sent → Viewed → Paid." },
      { title: 'Bulk PDF export', desc: "Export all invoices for a period as a ZIP of PDFs or a single CSV for your accountant." },
      { title: 'Embedded payment link', desc: "Every invoice includes a secure Pay Now link that accepts all MENA payment methods — no extra setup." },
    ],
  },
  ar: {
    badge: 'المنتج · الفواتير',
    headline: "فواتير احترافية\nتكاد ترسل نفسها",
    subheadline: "أنشئ فواتير بالعلامة التجارية وأرسلها بنقرة واحدة ودع TeyraPay تتابع المدفوعات تلقائياً. تدعم ضريبة القيمة المضافة وتعدد العملات وتصدير PDF.",
    highlights: ['متوافق مع ضريبة القيمة المضافة', 'تصدير PDF', 'تذكيرات تلقائية', 'رابط دفع إلكتروني'],
    features: [
      { title: 'فواتير PDF بالعلامة التجارية', desc: 'شعارك وبيانات عملك ورقم الضريبة — بتنسيق تلقائي وفق متطلبات ZATCA والضرائب الإقليمية.' },
      { title: 'إرسال بنقرة واحدة', desc: 'أرسل الفواتير مباشرة من TeyraPay عبر البريد الإلكتروني. يرى العملاء بريداً احترافياً مع زر "ادفع الآن".' },
      { title: 'تذكيرات تلقائية', desc: 'حدد جداول التذكير (قبل 3 أيام، في تاريخ الاستحقاق، بعد 7 أيام). نرسلها نيابةً عنك.' },
      { title: 'تتبع الحالة في الوقت الفعلي', desc: 'اعرف متى فُتحت الفاتورة وشُوهدت ودُفعت. تتحدث الحالات مباشرة: مسودة → أُرسلت → شُوهدت → دُفعت.' },
      { title: 'تصدير PDF بالجملة', desc: 'صدّر جميع فواتير فترة معينة كملف ZIP أو CSV واحد لمحاسبك.' },
      { title: 'رابط دفع مدمج', desc: 'كل فاتورة تتضمن رابط "ادفع الآن" آمن يقبل جميع طرق الدفع في المنطقة — بدون أي إعداد إضافي.' },
    ],
  },
} as const;

export default function InvoicingPage() {
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
