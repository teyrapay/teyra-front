interface Props { status: string; }

const CONFIG: Record<string, { label: string; cls: string }> = {
  succeeded:        { label: 'Succeeded',   cls: 'bg-emerald-50 text-emerald-700 border border-emerald-200' },
  paid:             { label: 'Paid',        cls: 'bg-emerald-50 text-emerald-700 border border-emerald-200' },
  active:           { label: 'Active',      cls: 'bg-emerald-50 text-emerald-700 border border-emerald-200' },
  completed:        { label: 'Completed',   cls: 'bg-blue-50 text-blue-700 border border-blue-200' },
  sent:             { label: 'Sent',        cls: 'bg-blue-50 text-blue-700 border border-blue-200' },
  in_transit:       { label: 'In Transit',  cls: 'bg-blue-50 text-blue-700 border border-blue-200' },
  viewed:           { label: 'Viewed',      cls: 'bg-indigo-50 text-indigo-700 border border-indigo-200' },
  pending:          { label: 'Pending',     cls: 'bg-yellow-50 text-yellow-700 border border-yellow-200' },
  draft:            { label: 'Draft',       cls: 'bg-gray-50 text-gray-600 border border-gray-200' },
  failed:           { label: 'Failed',      cls: 'bg-red-50 text-red-700 border border-red-200' },
  cancelled:        { label: 'Cancelled',   cls: 'bg-red-50 text-red-700 border border-red-200' },
  failing:          { label: 'Failing',     cls: 'bg-red-50 text-red-700 border border-red-200' },
  refunded:         { label: 'Refunded',    cls: 'bg-purple-50 text-purple-700 border border-purple-200' },
  disputed:         { label: 'Disputed',    cls: 'bg-orange-50 text-orange-700 border border-orange-200' },
  overdue:          { label: 'Overdue',     cls: 'bg-orange-50 text-orange-700 border border-orange-200' },
  paused:           { label: 'Paused',      cls: 'bg-yellow-50 text-yellow-700 border border-yellow-200' },
  live:             { label: 'Live',        cls: 'bg-emerald-50 text-emerald-700 border border-emerald-200' },
  test:             { label: 'Test',        cls: 'bg-yellow-50 text-yellow-700 border border-yellow-200' },
};

export default function StatusBadge({ status }: Props) {
  const cfg = CONFIG[status] ?? { label: status, cls: 'bg-gray-100 text-gray-600 border border-gray-200' };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wide ${cfg.cls}`}>
      {cfg.label}
    </span>
  );
}
