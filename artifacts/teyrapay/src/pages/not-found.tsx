import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';

export default function NotFound() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[hsl(222,47%,7%)]">
      <div className="text-center px-6">
        <div className="font-syne text-[120px] font-extrabold text-primary/20 leading-none mb-4">404</div>
        <h1 className="font-syne text-3xl font-bold text-white mb-3">
          {isAr ? 'الصفحة غير موجودة' : 'Page not found'}
        </h1>
        <p className="text-white/40 mb-8 max-w-sm mx-auto leading-relaxed">
          {isAr ? 'يبدو أن هذه الصفحة غير موجودة أو تم نقلها.' : "The page you're looking for doesn't exist or has been moved."}
        </p>
        <Link href="/"
          className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors">
          {isAr ? '← العودة للرئيسية' : '← Back to home'}
        </Link>
      </div>
    </div>
  );
}
