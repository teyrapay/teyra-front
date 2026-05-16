const CONFIG = {
  // Transaction
  succeeded: { label: 'Succeeded', cls: 'bg-green-500/10 text-green-600' },
  pending: { label: 'Pending', cls: 'bg-yellow-500/10 text-yellow-600' },
  failed: { label: 'Failed', cls: 'bg-red-500/10 text-red-600' },
  refunded: { label: 'Refunded', cls: 'bg-blue-500/10 text-blue-600' },
  disputed: { label: 'Disputed', cls: 'bg-orange-500/10 text-orange-600' },
  // Invoice
  draft: { label: 'Draft', cls: 'bg-muted text-muted-foreground' },
  sent: { label: 'Sent', cls: 'bg-blue-500/10 text-blue-600' },
  paid: { label: 'Paid', cls: 'bg-green-500/10 text-green-600' },
  overdue: { label: 'Overdue', cls: 'bg-red-500/10 text-red-600' },
  cancelled: { label: 'Cancelled', cls: 'bg-muted text-muted-foreground' },
  // Payout
  in_transit: { label: 'In Transit', cls: 'bg-purple-500/10 text-purple-600' },
};

export default function StatusBadge({ status }) {
  const cfg = CONFIG[status] || { label: status, cls: 'bg-muted text-muted-foreground' };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${cfg.cls}`}>
      {cfg.label}
    </span>
  );
}
