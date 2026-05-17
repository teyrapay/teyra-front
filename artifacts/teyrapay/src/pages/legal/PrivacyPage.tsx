import PageLayout from '@/components/landing/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

const SECTIONS = [
  { title: '1. Information We Collect', content: `We collect information you provide directly to us when you register for a TeyraPay account, complete our KYC/KYB verification process, or communicate with us. This includes:\n\n• Identity information: full legal name, date of birth, passport or national ID number\n• Contact information: email address, phone number, mailing address\n• Business information: trade name, commercial registration number, industry type, estimated monthly volume\n• Financial information: bank account details for settlement, beneficial ownership information\n• Technical information: IP address, browser type, device identifiers, and usage logs collected automatically through cookies and similar technologies` },
  { title: '2. How We Use Your Information', content: `TeyraPay processes your personal data for the following purposes:\n\n• Account management and identity verification (legal basis: contractual necessity)\n• Payment processing and fraud prevention (legal basis: contractual necessity and legitimate interest)\n• Compliance with AML/CFT obligations including transaction monitoring (legal basis: legal obligation)\n• Customer support and service communications (legal basis: contractual necessity)\n• Analytics to improve our platform (legal basis: legitimate interest)\n• Marketing communications, where you have consented (legal basis: consent)` },
  { title: '3. Data Sharing', content: `We share your information only in the following circumstances:\n\n• With payment service providers (PSPs) as necessary to process transactions (e.g., Checkout.com, PayTabs, Tap)\n• With identity verification providers (e.g., Persona, Onfido) for KYC processing\n• With financial intelligence units and regulators as required by law\n• With our carefully vetted sub-processors who assist in delivering our services, under strict data processing agreements\n• In connection with a merger, acquisition, or sale of all or substantially all of our assets` },
  { title: '4. Data Retention', content: `We retain personal data for as long as necessary to provide our services and comply with legal obligations. Transaction records are retained for a minimum of 5 years as required by SAMA regulations and AML law. Account data is retained for the duration of the business relationship plus 5 years thereafter. You may request deletion of personal data that we are not legally required to retain.` },
  { title: '5. Your Rights', content: `Depending on your jurisdiction, you may have the following rights regarding your personal data:\n\n• Right of access: obtain a copy of your personal data\n• Right of rectification: correct inaccurate data\n• Right of erasure: request deletion (subject to legal retention requirements)\n• Right of portability: receive your data in a structured, machine-readable format\n• Right to object: object to processing based on legitimate interests\n\nTo exercise these rights, contact us at privacy@teyrapay.com` },
  { title: '6. Security', content: `TeyraPay implements industry-standard security measures to protect your data, including AES-256 encryption at rest, TLS 1.3 in transit, tokenization of sensitive payment data via VGS (Very Good Security), annual penetration testing by independent third parties, and SOC 2 Type II certification. We also maintain a PCI-DSS Level 1 compliant environment for cardholder data.` },
  { title: '7. Contact', content: `For privacy-related questions or to exercise your rights, please contact our Data Protection Officer at:\n\nprivacy@teyrapay.com\n\nTeyraPay Financial Technology Co.\nKing Fahd Road, Riyadh\nSaudi Arabia 12345\n\nThis Privacy Policy was last updated on May 1, 2026.` },
];

export default function PrivacyPage() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  return (
    <PageLayout>
      <section className="relative bg-[hsl(222,47%,7%)] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-100" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="inline-block bg-primary/10 border border-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            {isAr ? 'قانوني · سياسة الخصوصية' : 'Legal · Privacy Policy'}
          </span>
          <h1 className="font-syne text-4xl md:text-5xl font-extrabold text-white mb-4">
            {isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </h1>
          <p className="text-white/50">
            {isAr ? 'تاريخ النفاذ: 1 مايو 2026 · آخر تحديث: 1 مايو 2026' : 'Effective date: May 1, 2026 · Last updated: May 1, 2026'}
          </p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          <p className="text-muted-foreground leading-relaxed">
            {isAr
              ? 'تلتزم TeyraPay لتقنية المالية ("TeyraPay" أو "نحن") بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها والإفصاح عنها وحمايتها عند استخدام منصة الدفع والخدمات ذات الصلة.'
              : 'TeyraPay Financial Technology Co. ("TeyraPay", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our payment platform and related services.'}
          </p>
          {SECTIONS.map(s => (
            <div key={s.title}>
              <h2 className="font-syne font-bold text-xl text-foreground mb-3">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">{s.content}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
