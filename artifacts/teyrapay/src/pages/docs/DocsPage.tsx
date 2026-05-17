import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import {
  Zap, Search, ChevronRight, Copy, Check, Menu, X,
  BookOpen, Terminal, Webhook, Key, Code2, CreditCard,
  Users, RefreshCw, FileText, Shield, Layers
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// ─── Sidebar nav structure ────────────────────────────────────────────────────
const SIDEBAR = [
  {
    group: 'Getting Started',
    groupAr: 'البدء السريع',
    items: [
      { label: 'Introduction', labelAr: 'المقدمة', id: 'intro', icon: BookOpen },
      { label: 'Quickstart', labelAr: 'البدء الأول', id: 'quickstart', icon: Terminal, active: true },
      { label: 'Authentication', labelAr: 'المصادقة', id: 'auth', icon: Key },
      { label: 'SDKs & Libraries', labelAr: 'حزم SDK', id: 'sdks', icon: Code2 },
    ],
  },
  {
    group: 'Payments',
    groupAr: 'المدفوعات',
    items: [
      { label: 'Create a Payment', labelAr: 'إنشاء مدفوعة', id: 'create-payment', icon: CreditCard },
      { label: 'Payment Methods', labelAr: 'طرق الدفع', id: 'payment-methods', icon: Layers },
      { label: 'Refunds', labelAr: 'الاستردادات', id: 'refunds', icon: RefreshCw },
      { label: 'Webhooks', labelAr: 'الويب هوك', id: 'webhooks', icon: Webhook },
    ],
  },
  {
    group: 'Products',
    groupAr: 'المنتجات',
    items: [
      { label: 'Payment Links', labelAr: 'روابط الدفع', id: 'payment-links', icon: FileText },
      { label: 'Invoices', labelAr: 'الفواتير', id: 'invoices', icon: FileText },
      { label: 'Subscriptions', labelAr: 'الاشتراكات', id: 'subscriptions', icon: RefreshCw },
    ],
  },
  {
    group: 'Management',
    groupAr: 'الإدارة',
    items: [
      { label: 'Customers', labelAr: 'العملاء', id: 'customers', icon: Users },
      { label: 'Payouts', labelAr: 'المدفوعات الصادرة', id: 'payouts', icon: CreditCard },
      { label: 'Compliance & KYC', labelAr: 'الامتثال وKYC', id: 'kyc', icon: Shield },
    ],
  },
];

// ─── Code snippets per language per step ──────────────────────────────────────
const LANG_LABELS = ['Node.js', 'Python', 'PHP', 'cURL'];

const STEPS: {
  id: string;
  title: string;
  desc: string;
  code: Record<string, { filename: string; content: string }>;
}[] = [
  {
    id: 'install',
    title: 'Install the SDK',
    desc: 'Add the TeyraPay SDK to your project using your package manager.',
    code: {
      'Node.js': {
        filename: 'terminal',
        content: `npm install @teyrapay/node
# or with yarn
yarn add @teyrapay/node
# or with pnpm
pnpm add @teyrapay/node`,
      },
      Python: {
        filename: 'terminal',
        content: `pip install teyrapay
# or with poetry
poetry add teyrapay`,
      },
      PHP: {
        filename: 'terminal',
        content: `composer require teyrapay/teyrapay-php`,
      },
      cURL: {
        filename: 'terminal',
        content: `# No installation required for cURL
# Make sure curl is installed:
curl --version`,
      },
    },
  },
  {
    id: 'init',
    title: 'Initialize the client',
    desc: 'Import the SDK and initialize it with your secret API key. Keep this key secure — never expose it on the client side.',
    code: {
      'Node.js': {
        filename: 'lib/teyrapay.js',
        content: `import TeyraPay from '@teyrapay/node';

const teyrapay = new TeyraPay(process.env.TEYRAPAY_SECRET_KEY);

export default teyrapay;`,
      },
      Python: {
        filename: 'lib/teyrapay.py',
        content: `import teyrapay
import os

teyrapay.api_key = os.environ.get("TEYRAPAY_SECRET_KEY")`,
      },
      PHP: {
        filename: 'lib/teyrapay.php',
        content: `<?php
require_once 'vendor/autoload.php';

\\TeyraPay\\TeyraPay::setApiKey(getenv('TEYRAPAY_SECRET_KEY'));`,
      },
      cURL: {
        filename: '.env',
        content: `TEYRAPAY_SECRET_KEY=sk_test_...

# Export for shell use:
export TEYRAPAY_SECRET_KEY=sk_test_...`,
      },
    },
  },
  {
    id: 'create',
    title: 'Create a payment',
    desc: 'Create a payment intent and redirect the customer to the hosted checkout URL. Specify amount in the smallest currency unit (halalas for SAR, fils for AED).',
    code: {
      'Node.js': {
        filename: 'routes/checkout.js',
        content: `import teyrapay from '../lib/teyrapay.js';

export async function createCheckout(req, res) {
  const payment = await teyrapay.payments.create({
    amount: 4500,          // SAR 45.00 (in halalas)
    currency: 'SAR',
    customer_email: req.body.email,
    description: \`Order #\${req.body.orderId}\`,
    metadata: {
      order_id: req.body.orderId,
      user_id: req.user.id,
    },
    success_url: 'https://yourstore.com/success',
    cancel_url: 'https://yourstore.com/cart',
  });

  res.redirect(payment.checkout_url);
}`,
      },
      Python: {
        filename: 'views/checkout.py',
        content: `import teyrapay
from flask import redirect, request

def create_checkout():
    payment = teyrapay.Payment.create(
        amount=4500,       # SAR 45.00 (in halalas)
        currency="SAR",
        customer_email=request.form["email"],
        description=f"Order #{request.form['order_id']}",
        metadata={
            "order_id": request.form["order_id"],
        },
        success_url="https://yourstore.com/success",
        cancel_url="https://yourstore.com/cart",
    )
    return redirect(payment.checkout_url)`,
      },
      PHP: {
        filename: 'checkout.php',
        content: `<?php
$payment = \\TeyraPay\\Payment::create([
  'amount'         => 4500,      // SAR 45.00 (in halalas)
  'currency'       => 'SAR',
  'customer_email' => $_POST['email'],
  'description'    => 'Order #' . $_POST['order_id'],
  'metadata'       => [
    'order_id' => $_POST['order_id'],
  ],
  'success_url'    => 'https://yourstore.com/success',
  'cancel_url'     => 'https://yourstore.com/cart',
]);

header('Location: ' . $payment->checkout_url);`,
      },
      cURL: {
        filename: 'terminal',
        content: `curl https://api.teyrapay.com/v1/payments \\
  -H "Authorization: Bearer $TEYRAPAY_SECRET_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 4500,
    "currency": "SAR",
    "customer_email": "customer@example.com",
    "description": "Order #4892",
    "success_url": "https://yourstore.com/success",
    "cancel_url": "https://yourstore.com/cart"
  }'`,
      },
    },
  },
  {
    id: 'webhook',
    title: 'Handle the webhook',
    desc: 'TeyraPay sends a payment.succeeded event to your webhook endpoint once the payment is confirmed. Always verify the signature before processing.',
    code: {
      'Node.js': {
        filename: 'routes/webhook.js',
        content: `import teyrapay from '../lib/teyrapay.js';
import express from 'express';

const router = express.Router();

router.post('/webhook',
  express.raw({ type: 'application/json' }),
  async (req, res) => {
    const sig = req.headers['teyrapay-signature'];

    let event;
    try {
      event = teyrapay.webhooks.constructEvent(
        req.body,
        sig,
        process.env.TEYRAPAY_WEBHOOK_SECRET,
      );
    } catch (err) {
      return res.status(400).send(\`Webhook error: \${err.message}\`);
    }

    if (event.type === 'payment.succeeded') {
      const payment = event.data.object;
      await fulfillOrder(payment.metadata.order_id);
    }

    res.json({ received: true });
  },
);`,
      },
      Python: {
        filename: 'routes/webhook.py',
        content: `import teyrapay
import os
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    payload = request.data
    sig = request.headers.get('teyrapay-signature')

    try:
        event = teyrapay.Webhook.construct_event(
            payload, sig,
            os.environ['TEYRAPAY_WEBHOOK_SECRET']
        )
    except ValueError:
        return jsonify(error='Invalid payload'), 400
    except teyrapay.error.SignatureVerificationError:
        return jsonify(error='Invalid signature'), 400

    if event['type'] == 'payment.succeeded':
        payment = event['data']['object']
        fulfill_order(payment['metadata']['order_id'])

    return jsonify(received=True)`,
      },
      PHP: {
        filename: 'webhook.php',
        content: `<?php
$payload = @file_get_contents('php://input');
$sig     = $_SERVER['HTTP_TEYRAPAY_SIGNATURE'] ?? '';

try {
    $event = \\TeyraPay\\Webhook::constructEvent(
        $payload,
        $sig,
        getenv('TEYRAPAY_WEBHOOK_SECRET')
    );
} catch (\\Exception $e) {
    http_response_code(400);
    exit("Webhook error: {$e->getMessage()}");
}

if ($event->type === 'payment.succeeded') {
    $payment = $event->data->object;
    fulfillOrder($payment->metadata->order_id);
}

echo json_encode(['received' => true]);`,
      },
      cURL: {
        filename: 'terminal',
        content: `# Test your webhook with the TeyraPay CLI
teyrapay listen --forward-to localhost:3000/webhook

# Or trigger a test event manually:
curl https://api.teyrapay.com/v1/webhook_endpoints/test \\
  -H "Authorization: Bearer $TEYRAPAY_SECRET_KEY" \\
  -d '{"type": "payment.succeeded"}'`,
      },
    },
  },
  {
    id: 'go-live',
    title: 'Go live',
    desc: 'Switch from test to live keys, verify your webhook endpoint in the dashboard, and you are ready to accept real payments.',
    code: {
      'Node.js': {
        filename: '.env.production',
        content: `# Replace test keys with live keys
TEYRAPAY_SECRET_KEY=sk_live_...
TEYRAPAY_PUBLISHABLE_KEY=pk_live_...
TEYRAPAY_WEBHOOK_SECRET=whsec_live_...

# Verify with a health check:
# curl https://api.teyrapay.com/v1/ping \\
#   -H "Authorization: Bearer $TEYRAPAY_SECRET_KEY"`,
      },
      Python: {
        filename: '.env.production',
        content: `# Replace test keys with live keys
TEYRAPAY_SECRET_KEY=sk_live_...
TEYRAPAY_PUBLISHABLE_KEY=pk_live_...
TEYRAPAY_WEBHOOK_SECRET=whsec_live_...`,
      },
      PHP: {
        filename: '.env.production',
        content: `TEYRAPAY_SECRET_KEY=sk_live_...
TEYRAPAY_PUBLISHABLE_KEY=pk_live_...
TEYRAPAY_WEBHOOK_SECRET=whsec_live_...`,
      },
      cURL: {
        filename: 'terminal',
        content: `# Ping the live API to confirm your key works:
curl https://api.teyrapay.com/v1/ping \\
  -H "Authorization: Bearer sk_live_..."

# Response:
# { "status": "ok", "env": "live", "merchant": "mer_..." }`,
      },
    },
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/70 transition-colors px-2 py-1 rounded hover:bg-white/[0.06]">
      {copied ? <><Check className="w-3.5 h-3.5 text-emerald-400" /><span className="text-emerald-400">Copied</span></> : <><Copy className="w-3.5 h-3.5" />Copy</>}
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function DocsPage() {
  const [, setLocation] = useLocation();
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const [activeLang, setActiveLang] = useState('Node.js');
  const [activeStep, setActiveStep] = useState('install');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState('');
  const codeRef = useRef<HTMLDivElement>(null);

  const currentStep = STEPS.find(s => s.id === activeStep) ?? STEPS[0];
  const currentCode = currentStep.code[activeLang];

  // Scroll code panel to top when step changes
  useEffect(() => {
    codeRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeStep]);

  return (
    <div className="min-h-screen bg-[hsl(222,47%,6%)] flex flex-col">
      {/* ── Top nav ── */}
      <nav className="sticky top-0 z-50 h-14 border-b border-white/[0.07] bg-[hsl(222,47%,7%)]/95 backdrop-blur-md flex items-center px-4 gap-4">
        <button className="lg:hidden text-white/50 hover:text-white mr-1" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-syne font-bold text-white text-base">TeyraPay</span>
          <span className="text-white/20 text-sm font-normal ml-1">Docs</span>
        </Link>
        <div className="flex-1 max-w-sm mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={isAr ? 'ابحث في التوثيق...' : 'Search documentation...'}
              className="w-full bg-white/[0.05] border border-white/[0.08] rounded-lg pl-9 pr-4 py-1.5 text-sm text-white/60 placeholder:text-white/20 focus:outline-none focus:border-primary/40 focus:bg-white/[0.07] transition-colors"
            />
          </div>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <Link href="/api-keys" className="hidden sm:flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors">
            <Key className="w-3.5 h-3.5" />
            {isAr ? 'مفاتيح API' : 'API Keys'}
          </Link>
          <Link href="/get-started">
            <button className="bg-primary hover:bg-primary/90 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-colors">
              {isAr ? 'ابدأ الآن' : 'Get Started'}
            </button>
          </Link>
        </div>
      </nav>

      <div className="flex flex-1 min-h-0">
        {/* ── Sidebar ── */}
        <aside className={`
          fixed lg:sticky top-14 z-40 h-[calc(100vh-3.5rem)] w-60 flex-shrink-0
          bg-[hsl(222,47%,6%)] border-r border-white/[0.06] overflow-y-auto
          transition-transform duration-200
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="px-4 py-6 space-y-6">
            {SIDEBAR.map(section => (
              <div key={section.group}>
                <p className="text-[10px] font-bold text-white/25 uppercase tracking-widest mb-2 px-2">{isAr ? section.groupAr : section.group}</p>
                <ul className="space-y-0.5">
                  {section.items.map(item => {
                    const Icon = item.icon;
                    const isActive = item.id === 'quickstart' || activeStep === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => {
                            if (STEPS.find(s => s.id === item.id)) setActiveStep(item.id);
                            setSidebarOpen(false);
                          }}
                          className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-sm transition-colors text-left ${
                            item.id === activeStep
                              ? 'bg-primary/10 text-primary font-medium'
                              : 'text-white/40 hover:text-white/70 hover:bg-white/[0.04]'
                          }`}>
                          <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                          {isAr ? (item as { labelAr?: string }).labelAr ?? item.label : item.label}
                          {item.id === activeStep && <ChevronRight className="w-3 h-3 ml-auto text-primary/60" />}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Sidebar overlay on mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* ── Main: split quickstart ── */}
        <div className="flex-1 flex min-h-0 min-w-0">
          {/* Steps panel */}
          <div className="w-full lg:w-[42%] flex-shrink-0 overflow-y-auto">
            {/* Header */}
            <div className="px-8 pt-10 pb-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs text-white/30 mb-3">
                <span>Getting Started</span>
                <ChevronRight className="w-3 h-3" />
                <span className="text-white/60">Quickstart</span>
              </div>
              <h1 className="font-syne text-2xl font-bold text-white mb-2">Quickstart</h1>
              <p className="text-sm text-white/45 leading-relaxed">
                Integrate TeyraPay and accept your first payment in under 10 minutes.
                Follow the steps below — the code panel updates automatically.
              </p>

              {/* Language switcher */}
              <div className="flex items-center gap-2 mt-5">
                <span className="text-xs text-white/30 font-medium">Language:</span>
                <div className="flex items-center gap-0.5 p-1 bg-white/[0.05] rounded-lg">
                  {LANG_LABELS.map(lang => (
                    <button
                      key={lang}
                      onClick={() => setActiveLang(lang)}
                      className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                        activeLang === lang
                          ? 'bg-white/15 text-white shadow-sm'
                          : 'text-white/35 hover:text-white/60'
                      }`}>
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step list */}
            <div>
              {STEPS.map((step, i) => {
                const isActive = activeStep === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`w-full text-left border-l-[3px] transition-all px-8 py-6 border-b border-white/[0.04] ${
                      isActive
                        ? 'border-l-primary bg-primary/[0.06]'
                        : 'border-l-transparent hover:bg-white/[0.02] hover:border-l-white/20'
                    }`}>
                    <div className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 transition-colors ${
                        isActive ? 'bg-primary text-white' : 'bg-white/[0.08] text-white/35'
                      }`}>
                        {i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-sm font-semibold mb-1 transition-colors ${isActive ? 'text-white' : 'text-white/55'}`}>
                          {step.title}
                        </h3>
                        {isActive && (
                          <p className="text-xs text-white/40 leading-relaxed">{step.desc}</p>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Next steps */}
            <div className="px-8 py-10">
              <h2 className="font-syne text-base font-bold text-white mb-4">Next steps</h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { title: 'Payment Methods', desc: 'Add Mada, Apple Pay, KNET and more', href: '/api' },
                  { title: 'Webhooks', desc: 'Listen to real-time payment events', href: '/api' },
                  { title: 'Subscriptions', desc: 'Set up recurring billing', href: '/subscriptions-page' },
                  { title: 'Go to Dashboard', desc: 'Manage your payments and settings', href: '/dashboard' },
                ].map(ns => (
                  <a key={ns.title} href={ns.href}
                    className="flex items-center gap-3 p-3.5 bg-white/[0.03] border border-white/[0.07] rounded-xl hover:bg-white/[0.06] hover:border-primary/20 transition-all group">
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{ns.title}</div>
                      <div className="text-xs text-white/30">{ns.desc}</div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-white/20 group-hover:text-primary transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Code panel */}
          <div className="hidden lg:flex flex-col flex-1 min-w-0 border-l border-white/[0.06] sticky top-14 h-[calc(100vh-3.5rem)]">
            {/* Code header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.07] bg-[hsl(222,47%,5%)] flex-shrink-0">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              </div>
              <span className="text-white/30 text-xs font-mono">{currentCode.filename}</span>
              <CopyButton text={currentCode.content} />
            </div>

            {/* Step title in code panel */}
            <div className="px-5 py-3 border-b border-white/[0.05] bg-[hsl(222,47%,5%)] flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white text-[9px] font-bold">{STEPS.findIndex(s => s.id === activeStep) + 1}</span>
                </div>
                <span className="text-white/60 text-xs font-medium">{currentStep.title}</span>
              </div>
            </div>

            {/* Code content */}
            <div ref={codeRef} className="flex-1 overflow-auto bg-[hsl(222,47%,5%)]">
              <pre className="p-6 text-sm font-mono leading-relaxed text-white/75 min-h-full">
                <code>{currentCode.content}</code>
              </pre>
            </div>

            {/* API response preview for the create step */}
            {activeStep === 'create' && (
              <div className="border-t border-white/[0.07] flex-shrink-0">
                <div className="flex items-center justify-between px-5 py-2.5 bg-[hsl(222,47%,4%)]">
                  <span className="text-[10px] font-mono text-white/25 uppercase tracking-wider">API Response</span>
                  <span className="text-[10px] text-emerald-400 font-semibold">200 OK</span>
                </div>
                <pre className="px-5 py-4 text-xs font-mono text-white/50 bg-[hsl(222,47%,4%)] overflow-x-auto">
                  <code>{`{
  "id": "pay_1a2b3c4d5e6f",
  "status": "pending",
  "amount": 4500,
  "currency": "SAR",
  "checkout_url": "https://checkout.teyrapay.com/pay/cs_..."
}`}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
