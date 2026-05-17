import PageLayout from '@/components/landing/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

const POSTS_EN = [
  { tag: 'Product', title: 'Introducing TeyraPay: Payment infrastructure built for MENA', date: 'May 10, 2026', read: '5 min read', excerpt: "Today we're officially announcing TeyraPay — a new payment platform purpose-built for merchants in Saudi Arabia, UAE, Kuwait, and beyond." },
  { tag: 'Engineering', title: 'How we built multi-PSP intelligent routing at TeyraPay', date: 'May 5, 2026', read: '8 min read', excerpt: 'A deep dive into the architecture behind our payment routing engine, how we make routing decisions in under 50ms, and the fallback logic that keeps success rates above 99%.' },
  { tag: 'Compliance', title: "A merchant's guide to SAMA payment regulations in 2026", date: 'Apr 28, 2026', read: '6 min read', excerpt: 'SAMA has updated its payment regulations for licensed fintechs. Here\'s what it means for merchants accepting payments in Saudi Arabia and how TeyraPay keeps you compliant.' },
  { tag: 'Growth', title: 'How to reduce checkout abandonment by 20% in MENA', date: 'Apr 20, 2026', read: '7 min read', excerpt: 'We analyzed 1 million checkout sessions across our merchant base. Here are the five changes that consistently improve conversion rates for MENA shoppers.' },
  { tag: 'Product', title: 'Payment links: the fastest way to get paid without a website', date: 'Apr 14, 2026', read: '4 min read', excerpt: 'Freelancers, consultants, and small businesses across the region are using TeyraPay payment links to collect money in minutes — no website required.' },
  { tag: 'Engineering', title: 'Webhook reliability: how we achieve 99.97% delivery at scale', date: 'Apr 7, 2026', read: '9 min read', excerpt: 'A look at our webhook delivery system — exponential backoff, signature verification, event replay, and the monitoring stack that keeps it all running.' },
];

const POSTS_AR = [
  { tag: 'منتج', title: 'نقدم TeyraPay: بنية تحتية للمدفوعات مبنية لمنطقة الشرق الأوسط', date: '10 مايو 2026', read: '5 دقائق', excerpt: 'اليوم نعلن رسمياً عن TeyraPay — منصة دفع جديدة مبنية خصيصاً للتجار في المملكة العربية السعودية والإمارات والكويت وما بعدها.' },
  { tag: 'هندسة', title: 'كيف بنينا التوجيه الذكي متعدد مزودي الخدمة في TeyraPay', date: '5 مايو 2026', read: '8 دقائق', excerpt: 'غوص عميق في بنية محرك توجيه المدفوعات لدينا، وكيف نتخذ قرارات التوجيه في أقل من 50ms، ومنطق التراجع الذي يبقي معدلات النجاح فوق 99%.' },
  { tag: 'امتثال', title: 'دليل التاجر للوائح مدفوعات SAMA في 2026', date: '28 أبريل 2026', read: '6 دقائق', excerpt: 'حدّثت SAMA لوائح المدفوعات للشركات التقنية المالية المرخصة. إليك ما يعنيه ذلك للتجار الذين يقبلون المدفوعات في المملكة وكيف تحافظ TeyraPay على امتثالك.' },
  { tag: 'نمو', title: 'كيف تقلل معدل التخلي عن الدفع بنسبة 20% في منطقة الشرق الأوسط', date: '20 أبريل 2026', read: '7 دقائق', excerpt: 'حللنا مليون جلسة دفع عبر قاعدة تجارنا. إليك التغييرات الخمسة التي تحسن باستمرار معدلات التحويل للمتسوقين في المنطقة.' },
  { tag: 'منتج', title: 'روابط الدفع: أسرع طريقة للحصول على أموالك دون موقع إلكتروني', date: '14 أبريل 2026', read: '4 دقائق', excerpt: 'يستخدم المستقلون والمستشارون والشركات الصغيرة في المنطقة روابط الدفع من TeyraPay لجمع الأموال في دقائق — دون الحاجة لموقع إلكتروني.' },
  { tag: 'هندسة', title: 'موثوقية الويب هوك: كيف نحقق توصيل 99.97% على نطاق واسع', date: '7 أبريل 2026', read: '9 دقائق', excerpt: 'نظرة على نظام توصيل الويب هوك لدينا — التراجع الأسي والتحقق من التوقيع وإعادة تشغيل الأحداث ومجموعة المراقبة التي تبقي كل شيء يعمل.' },
];

const TAG_COLORS: Record<string, string> = {
  Product: 'bg-blue-50 text-blue-700 border-blue-200',
  Engineering: 'bg-purple-50 text-purple-700 border-purple-200',
  Compliance: 'bg-orange-50 text-orange-700 border-orange-200',
  Growth: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  منتج: 'bg-blue-50 text-blue-700 border-blue-200',
  هندسة: 'bg-purple-50 text-purple-700 border-purple-200',
  امتثال: 'bg-orange-50 text-orange-700 border-orange-200',
  نمو: 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

export default function BlogPage() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const POSTS = isAr ? POSTS_AR : POSTS_EN;

  return (
    <PageLayout>
      <section className="relative bg-[hsl(222,47%,7%)] py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-100" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-primary/10 border border-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            {isAr ? 'الشركة · المدونة' : 'Company · Blog'}
          </span>
          <h1 className="font-syne text-5xl md:text-6xl font-extrabold text-white mb-4">
            {isAr ? 'مدونة TeyraPay' : 'TeyraPay Blog'}
          </h1>
          <p className="text-white/50 text-lg">
            {isAr ? 'تحديثات المنتج والتعمق الهندسي ورؤى المدفوعات من الفريق.' : 'Product updates, engineering deep dives, and payments insights from the team.'}
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map(post => (
              <article key={post.title}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer group flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-[11px] font-semibold border px-2 py-0.5 rounded-full ${TAG_COLORS[post.tag] ?? 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                    {post.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.read}</span>
                </div>
                <h2 className="font-syne font-bold text-foreground text-base leading-snug mb-3 group-hover:text-primary transition-colors flex-1">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="text-xs text-muted-foreground">{post.date}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
