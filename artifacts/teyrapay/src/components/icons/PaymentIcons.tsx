// SVG brand icons for payment methods and PSPs

export function VisaIcon({ className = 'h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 20" className={className} aria-label="Visa">
      <text x="2" y="16" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="18" fill="#1A1F71" letterSpacing="-0.5">VISA</text>
    </svg>
  );
}

export function MastercardIcon({ className = 'h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 38 24" className={className} aria-label="Mastercard">
      <circle cx="15" cy="12" r="10" fill="#EB001B" />
      <circle cx="23" cy="12" r="10" fill="#F79E1B" />
      <path d="M19 4.8a10 10 0 0 1 0 14.4A10 10 0 0 1 19 4.8z" fill="#FF5F00" />
    </svg>
  );
}

export function MadaIcon({ className = 'h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 24" className={className} aria-label="mada">
      <rect x="0" y="0" width="60" height="24" rx="4" fill="#04A777" />
      <text x="8" y="17" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="13" fill="white">mada</text>
    </svg>
  );
}

export function KnetIcon({ className = 'h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 24" className={className} aria-label="KNET">
      <rect x="0" y="0" width="60" height="24" rx="4" fill="#003082" />
      <text x="8" y="17" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="13" fill="white">KNET</text>
    </svg>
  );
}

export function ApplePayIcon({ className = 'h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 70 24" className={className} aria-label="Apple Pay">
      <rect x="0" y="0" width="70" height="24" rx="4" fill="#000" />
      <svg x="7" y="3" width="11" height="14" viewBox="0 0 814 1000">
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.8-155.5-114.8C46.7 718.6 0 549.8 0 390.3c0-194.3 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" fill="white"/>
      </svg>
      <text x="23" y="17" fontFamily="-apple-system, Arial, sans-serif" fontWeight="600" fontSize="12" fill="white">Pay</text>
    </svg>
  );
}

export function GooglePayIcon({ className = 'h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 70 24" className={className} aria-label="Google Pay">
      <rect x="0" y="0" width="70" height="24" rx="4" fill="#fff" stroke="#e0e0e0" strokeWidth="1" />
      <text x="7" y="17" fontFamily="'Product Sans', Arial, sans-serif" fontWeight="500" fontSize="13">
        <tspan fill="#4285F4">G</tspan>
        <tspan fill="#34A853">o</tspan>
        <tspan fill="#FBBC05">o</tspan>
        <tspan fill="#EA4335">g</tspan>
        <tspan fill="#4285F4">le </tspan>
        <tspan fill="#3C4043">Pay</tspan>
      </text>
    </svg>
  );
}

export function BenefitIcon({ className = 'h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 24" className={className} aria-label="Benefit">
      <rect x="0" y="0" width="72" height="24" rx="4" fill="#6B21A8" />
      <text x="8" y="17" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="12" fill="white">Benefit</text>
    </svg>
  );
}

export function AmexIcon({ className = 'h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 24" className={className} aria-label="American Express">
      <rect x="0" y="0" width="60" height="24" rx="4" fill="#2E77BC" />
      <text x="5" y="17" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="11" fill="white">AMEX</text>
    </svg>
  );
}

// PSP logo icons
export function CheckoutComIcon({ className = 'h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-label="Checkout.com">
      <rect width="36" height="36" rx="8" fill="#0B0B0F" />
      <text x="8" y="24" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" fill="#00C2FF">C</text>
    </svg>
  );
}

export function PayTabsIcon({ className = 'h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-label="PayTabs">
      <rect width="36" height="36" rx="8" fill="#00B67A" />
      <text x="8" y="25" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" fill="white">P</text>
    </svg>
  );
}

export function TapIcon({ className = 'h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-label="Tap Payments">
      <rect width="36" height="36" rx="8" fill="#2B2B2B" />
      <text x="8" y="25" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" fill="#E8D5A3">T</text>
    </svg>
  );
}

export function MamoIcon({ className = 'h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-label="Mamo Pay">
      <rect width="36" height="36" rx="8" fill="#FF3CAC" />
      <text x="7" y="25" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" fill="white">M</text>
    </svg>
  );
}

export function NetworkIntIcon({ className = 'h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-label="Network International">
      <rect width="36" height="36" rx="8" fill="#F97316" />
      <text x="10" y="25" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" fill="white">N</text>
    </svg>
  );
}

export const PAYMENT_METHOD_ICONS: Record<string, React.FC<{ className?: string }>> = {
  Visa: VisaIcon,
  Mastercard: MastercardIcon,
  Mada: MadaIcon,
  KNET: KnetIcon,
  'Apple Pay': ApplePayIcon,
  'Google Pay': GooglePayIcon,
  Benefit: BenefitIcon,
  Amex: AmexIcon,
};

export const PSP_ICONS: Record<string, React.FC<{ className?: string }>> = {
  'Checkout.com': CheckoutComIcon,
  PayTabs: PayTabsIcon,
  'Tap Payments': TapIcon,
  'Mamo Pay': MamoIcon,
  'Network Int.': NetworkIntIcon,
};
