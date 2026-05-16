import { TrendingUp, TrendingDown } from 'lucide-react';

export default function StatCard({ title, value, change, changeLabel, icon: Icon, iconColor, iconBg, prefix = '' }) {
  const isPositive = change >= 0;
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        {change !== undefined && (
          <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
            isPositive ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-500'
          }`}>
            {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {Math.abs(change)}%
          </div>
        )}
      </div>
      <div className="text-2xl font-syne font-700 text-foreground mb-1">{prefix}{value}</div>
      <div className="text-sm text-muted-foreground">{title}</div>
      {changeLabel && <div className="text-xs text-muted-foreground mt-1">{changeLabel}</div>}
    </div>
  );
}
