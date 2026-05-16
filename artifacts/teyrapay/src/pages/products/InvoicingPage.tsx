import { FileText, Send, Download, Clock, Bell, CreditCard } from 'lucide-react';
import MarketingTemplate from '@/components/landing/MarketingTemplate';

export default function InvoicingPage() {
  return (
    <MarketingTemplate
      badge="Product · Invoicing"
      headline="Professional invoices that\nalmost send themselves"
      subheadline="Create branded invoices, send them in one click, and let TeyraPay chase payments automatically. Supports VAT, multi-currency, and PDF export out of the box."
      highlights={['VAT compliant', 'PDF export', 'Auto-reminders', 'Online payment link']}
      features={[
        { icon: FileText, title: 'Branded PDF invoices', desc: 'Your logo, business details, and VAT number — automatically formatted to ZATCA and regional tax requirements.' },
        { icon: Send, title: 'One-click sending', desc: 'Send invoices directly from TeyraPay via email. Customers see a professional email with a Pay Now button.' },
        { icon: Clock, title: 'Automatic reminders', desc: 'Set reminder schedules (3 days before, on due date, 7 days after). We send them so you don\'t have to follow up manually.' },
        { icon: Bell, title: 'Real-time status tracking', desc: 'Know when the invoice was opened, viewed, and paid. Statuses update live: Draft → Sent → Viewed → Paid.' },
        { icon: Download, title: 'Bulk PDF export', desc: 'Export all invoices for a period as a ZIP of PDFs or a single CSV for your accountant.' },
        { icon: CreditCard, title: 'Embedded payment link', desc: 'Every invoice includes a secure Pay Now link that accepts all MENA payment methods — no extra setup.' },
      ]}
    />
  );
}
