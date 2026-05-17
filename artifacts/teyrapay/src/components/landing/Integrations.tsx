import { useLanguage } from '@/contexts/LanguageContext';
import {
  VisaIcon, MastercardIcon, MadaIcon, KnetIcon,
  ApplePayIcon, GooglePayIcon, BenefitIcon, AmexIcon,
  CheckoutComIcon, PayTabsIcon, TapIcon, MamoIcon, NetworkIntIcon,
} from '@/components/icons/PaymentIcons';

type PspKey = 'Checkout.com' | 'PayTabs' | 'Tap Payments' | 'Mamo Pay' | 'Network Int.';

const PSP_DATA: { name: PspKey; badge: 'primary' | 'secondary' | 'active'; color: string }[] = [
  { name: 'Checkout.com', badge: 'primary', color: 'text-blue-600 bg-blue-50 border-blue-200' },
  { name: 'PayTabs', badge: 'secondary', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  { name: 'Tap Payments', badge: 'active', color: 'text-purple-600 bg-purple-50 border-purple-200' },
  { name: 'Mamo Pay', badge: 'active', color: 'text-pink-600 bg-pink-50 border-pink-200' },
  { name: 'Network Int.', badge: 'active', color: 'text-orange-600 bg-orange-50 border-orange-200' },
];

const PSP_ICONS = {
  'Checkout.com': CheckoutComIcon,
  PayTabs: PayTabsIcon,
  'Tap Payments': TapIcon,
  'Mamo Pay': MamoIcon,
  'Network Int.': NetworkIntIcon,
};

type MethodKey = 'Visa' | 'Mastercard' | 'Mada' | 'KNET' | 'Apple Pay' | 'Google Pay' | 'Benefit' | 'Amex';

const METHOD_ICONS: { name: MethodKey; Icon: React.FC<{ className?: string }> }[] = [
  { name: 'Visa', Icon: VisaIcon },
  { name: 'Mastercard', Icon: MastercardIcon },
  { name: 'Mada', Icon: MadaIcon },
  { name: 'KNET', Icon: KnetIcon },
  { name: 'Apple Pay', Icon: ApplePayIcon },
  { name: 'Google Pay', Icon: GooglePayIcon },
  { name: 'Benefit', Icon: BenefitIcon },
  { name: 'Amex', Icon: AmexIcon },
];

export default function Integrations() {
  const { t } = useLanguage();

  return (
    <section id="integrations" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">{t.integrations.badge}</span>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-foreground">
            {t.integrations.headline}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            {t.integrations.subtitle}
          </p>
        </div>

        {/* PSP Cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {PSP_DATA.map(psp => {
            const Icon = PSP_ICONS[psp.name];
            return (
              <div key={psp.name}
                className="flex items-center gap-3 bg-card border border-border rounded-2xl px-5 py-4 hover:shadow-md hover:border-primary/20 transition-all">
                <Icon className="h-9 w-9 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground text-sm">{psp.name}</div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${psp.color}`}>
                    {t.integrations.pspBadges[psp.badge]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Payment Methods */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">
            {t.integrations.methodsLabel}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {METHOD_ICONS.map(({ name, Icon }) => (
              <div key={name}
                className="flex items-center justify-center bg-white border border-border rounded-xl px-5 py-3 hover:border-primary/30 hover:shadow-md transition-all min-w-[100px]">
                <Icon className="h-7" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
