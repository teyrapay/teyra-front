import PageLayout from '@/components/landing/PageLayout';

const SECTIONS = [
  { title: '1. Acceptance of Terms', content: 'By registering for or using the TeyraPay platform ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you are using the Services on behalf of a business entity, you represent that you have authority to bind that entity. These Terms constitute a legally binding agreement between you ("Merchant") and TeyraPay Financial Technology Co. ("TeyraPay").' },
  { title: '2. Account Registration and KYC/KYB', content: 'To access the Services, you must complete our Know Your Business (KYB) verification process and provide accurate, current, and complete information. TeyraPay reserves the right to suspend or terminate accounts that fail verification or are found to have provided false information. You are responsible for maintaining the confidentiality of your API keys and access credentials.' },
  { title: '3. Permitted Use', content: 'The Services may only be used for lawful business purposes. You may not use TeyraPay to process payments for prohibited business categories including but not limited to: adult content, gambling, unlicensed financial services, cryptocurrency exchanges without appropriate licensing, counterfeit goods, or any activity that violates applicable law in Saudi Arabia, UAE, or your jurisdiction of operation.' },
  { title: '4. Fees and Settlement', content: 'TeyraPay charges processing fees as set out in your Merchant Agreement. Fees are deducted from settlement amounts before remittance to your bank account. TeyraPay reserves the right to maintain a rolling reserve of up to 10% of processed volume for up to 90 days in cases of elevated chargeback risk. Settlement is typically made within 2–7 business days depending on your plan and bank.' },
  { title: '5. Chargebacks and Disputes', content: 'You are responsible for all chargebacks and related fees. TeyraPay will notify you promptly of any chargeback. You must respond to chargeback evidence requests within 7 calendar days. TeyraPay reserves the right to debit your settlement account or rolling reserve for chargeback amounts, fees, and penalties. Accounts with chargeback rates exceeding 1% may be subject to additional monitoring, reserves, or termination.' },
  { title: '6. Data and Security', content: 'You must comply with PCI-DSS standards applicable to your integration type. You must never store raw card numbers, CVV codes, or full magnetic stripe data on your systems. TeyraPay provides tokenization services to assist with PCI compliance. Any security breach affecting cardholder data must be reported to TeyraPay within 24 hours of discovery.' },
  { title: '7. Limitation of Liability', content: 'To the maximum extent permitted by applicable law, TeyraPay\'s total liability for any claims arising from these Terms shall not exceed the total fees paid by you to TeyraPay in the 3 months preceding the claim. TeyraPay shall not be liable for indirect, incidental, special, or consequential damages, loss of profits, or loss of data even if advised of the possibility of such damages.' },
  { title: '8. Termination', content: 'Either party may terminate these Terms on 30 days\' written notice. TeyraPay may terminate immediately if you breach these Terms, become insolvent, or if continued operation poses a legal, regulatory, or reputational risk. Upon termination, TeyraPay will remit any outstanding settlement balance (less any reserves and fees) within 90 days.' },
  { title: '9. Governing Law', content: 'These Terms are governed by the laws of the Kingdom of Saudi Arabia. Any disputes shall be subject to the exclusive jurisdiction of the courts of Riyadh, Saudi Arabia. For international merchants, TeyraPay may, at its discretion, offer binding arbitration as an alternative dispute resolution mechanism.' },
];

export default function TermsPage() {
  return (
    <PageLayout>
      <section className="relative bg-[hsl(222,47%,7%)] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-100" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="inline-block bg-primary/10 border border-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">Legal · Terms of Service</span>
          <h1 className="font-syne text-4xl md:text-5xl font-extrabold text-white mb-4">Terms of Service</h1>
          <p className="text-white/50">Effective date: January 1, 2026 · Last updated: May 1, 2026</p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          {SECTIONS.map(s => (
            <div key={s.title}>
              <h2 className="font-syne font-bold text-xl text-foreground mb-3">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.content}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
