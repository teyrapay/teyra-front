import PageLayout from '@/components/landing/PageLayout';
import { Shield, Lock, Server, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const REQUIREMENTS_EN = [
  { num: '1', title: 'Secure network', desc: 'Firewall and network segmentation isolate cardholder data from all other network segments and the internet.' },
  { num: '2', title: 'Protect cardholder data', desc: 'Cardholder data is tokenized via VGS before reaching TeyraPay servers. Raw PANs never touch our infrastructure.' },
  { num: '3', title: 'Vulnerability management', desc: 'Daily automated scans, monthly internal penetration tests, and annual third-party pen tests by a QSA-certified firm.' },
  { num: '4', title: 'Access control', desc: 'Role-based access control, MFA on all administrative interfaces, and least-privilege principles throughout.' },
  { num: '5', title: 'Monitoring and testing', desc: 'Centralized log aggregation, SIEM alerts, and automated anomaly detection on all cardholder data access.' },
  { num: '6', title: 'Information security policy', desc: 'Formal information security policy reviewed annually, with mandatory security training for all employees.' },
];

const REQUIREMENTS_AR = [
  { num: '1', title: 'شبكة آمنة', desc: 'تعزل جدران الحماية وتجزئة الشبكة بيانات حامل البطاقة عن جميع قطاعات الشبكة الأخرى والإنترنت.' },
  { num: '2', title: 'حماية بيانات حامل البطاقة', desc: 'يتم ترميز بيانات حامل البطاقة عبر VGS قبل الوصول إلى خوادم TeyraPay. لا تلمس أرقام البطاقات الخام بنيتنا التحتية أبداً.' },
  { num: '3', title: 'إدارة الثغرات الأمنية', desc: 'فحوصات يومية آلية واختبارات اختراق داخلية شهرية واختبارات سنوية من طرف ثالث معتمد من QSA.' },
  { num: '4', title: 'التحكم في الوصول', desc: 'التحكم في الوصول المستند إلى الأدوار والمصادقة الثنائية على جميع واجهات الإدارة ومبادئ الحد الأدنى من الامتيازات.' },
  { num: '5', title: 'المراقبة والاختبار', desc: 'تجميع مركزي للسجلات وتنبيهات SIEM وكشف تلقائي للشذوذات على جميع عمليات الوصول لبيانات حامل البطاقة.' },
  { num: '6', title: 'سياسة أمن المعلومات', desc: 'سياسة رسمية لأمن المعلومات تُراجع سنوياً مع تدريب إلزامي على الأمن لجميع الموظفين.' },
];

export default function PciPage() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const REQUIREMENTS = isAr ? REQUIREMENTS_AR : REQUIREMENTS_EN;

  const highlights = isAr
    ? [
        { icon: Shield, title: 'PCI-DSS المستوى 1', desc: 'مُتحقق سنوياً من قِبل مقيّم أمني مؤهل (QSA). يشمل جميع متطلبات PCI-DSS الـ12.', color: 'text-blue-600 bg-blue-500/10' },
        { icon: Lock, title: 'ترميز VGS', desc: 'يتم ترميز بيانات البطاقة قبل الوصول إلى TeyraPay. لا نخزن أو نعالج أو نرسل أرقام البطاقات الخام أبداً.', color: 'text-purple-600 bg-purple-500/10' },
        { icon: Server, title: 'TLS 1.3', desc: 'جميع البيانات أثناء النقل مشفرة بـTLS 1.3 مع مجموعات تشفير AES-256. تم تعطيل TLS 1.0 و1.1.', color: 'text-emerald-600 bg-emerald-500/10' },
      ]
    : [
        { icon: Shield, title: 'PCI-DSS Level 1', desc: 'Validated annually by a QSA (Qualified Security Assessor). Covers all 12 PCI-DSS requirements.', color: 'text-blue-600 bg-blue-500/10' },
        { icon: Lock, title: 'VGS Tokenization', desc: 'Card data is tokenized before reaching TeyraPay. We never store, process, or transmit raw PANs.', color: 'text-purple-600 bg-purple-500/10' },
        { icon: Server, title: 'TLS 1.3', desc: 'All data in transit is encrypted using TLS 1.3 with AES-256 cipher suites. TLS 1.0 and 1.1 are disabled.', color: 'text-emerald-600 bg-emerald-500/10' },
      ];

  return (
    <PageLayout>
      <section className="relative bg-[hsl(222,47%,7%)] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-100" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-primary/10 border border-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            {isAr ? 'قانوني · امتثال PCI' : 'Legal · PCI Compliance'}
          </span>
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            <CheckCircle2 className="w-4 h-4" />
            {isAr ? 'معتمد PCI-DSS المستوى 1' : 'PCI-DSS Level 1 Certified'}
          </div>
          <h1 className="font-syne text-4xl md:text-5xl font-extrabold text-white mb-4">
            {isAr ? 'امتثال PCI-DSS' : 'PCI-DSS Compliance'}
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            {isAr
              ? 'تحافظ TeyraPay على امتثال PCI-DSS المستوى 1 — أعلى معيار في صناعة الدفع — يتم التحقق منه سنوياً من قِبل مقيّم أمني مستقل مؤهل.'
              : "TeyraPay maintains PCI-DSS Level 1 compliance — the highest standard in the payment industry — validated annually by an independent Qualified Security Assessor."}
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {highlights.map(item => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-syne font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div>
            <h2 className="font-syne text-2xl font-bold text-foreground mb-6">
              {isAr ? 'أهداف PCI-DSS الستة — كيف نلبيها' : 'The 6 PCI-DSS Goals — How We Meet Them'}
            </h2>
            <div className="space-y-4">
              {REQUIREMENTS.map(r => (
                <div key={r.num} className="flex gap-4 bg-card border border-border rounded-2xl p-5">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-sm font-bold">{r.num}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground mb-1">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <h2 className="font-syne text-xl font-bold text-foreground mb-3">
              {isAr ? 'نطاق PCI للتاجر' : 'Merchant PCI scope'}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {isAr
                ? 'من خلال استخدام صفحة الدفع المستضافة أو مكتبة الترميز JavaScript من TeyraPay، يمكن للتجار تقليص نطاق PCI-DSS بشكل كبير. لا تمر بيانات البطاقة عبر خوادمك — تنتقل مباشرة من متصفح العميل إلى خزينة VGS الخاصة بـTeyraPay. في معظم الحالات، يؤهل التجار الذين يستخدمون حلولنا المستضافة لأبسط مستوى تقييم PCI (SAQ A).'
                : "By using TeyraPay's hosted checkout or JavaScript tokenization library, merchants can significantly reduce their PCI-DSS scope. Card data never passes through your servers — it goes directly from the customer's browser to TeyraPay's VGS vault. In most cases, merchants using our hosted solutions qualify for the simplest PCI assessment level (SAQ A)."}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {isAr
                ? <>نوفر خطاب امتثال وأحدث AOC (شهادة الامتثال) للتجار عند الطلب. تواصل مع <span className="text-primary">compliance@teyrapay.com</span> للحصول على الوثائق.</>
                : <>We provide a Letter of Compliance and our most recent AOC (Attestation of Compliance) to merchants on request. Contact <span className="text-primary">compliance@teyrapay.com</span> for documentation.</>}
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
