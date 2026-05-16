import { type LucideIcon } from 'lucide-react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface Props {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
}

export default function StatCard({ title, value, change, changeLabel, icon: Icon, iconColor, iconBg }: Props) {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        {change !== undefined && (
          <div className={`flex items-center gap-1 text-xs font-semibold ${change >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
            {change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {Math.abs(change)}%
          </div>
        )}
      </div>
      <div className="font-syne text-2xl font-bold text-foreground mb-1">{value}</div>
      <div className="text-xs text-muted-foreground font-medium">{title}</div>
      {changeLabel && <div className="text-xs text-muted-foreground/60 mt-0.5">{changeLabel}</div>}
    </div>
  );
}
