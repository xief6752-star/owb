import Shell from "@/components/Shell";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "2026 机场推荐排行榜 — 12 家顶级机场速度实测对比",
  description: "基于 90 天真实测试的机场推荐排行榜。云图、瞬云、寰宇云等 12 家顶级机场的速度、稳定性、价格全方位对比。IEPL 专线、流媒体解锁、游戏加速全面评测。",
  openGraph: {
    title: "2026 机场推荐排行榜 — 12 家顶级机场速度实测对比",
    description: "基于速度、稳定性、价格和线路类型，对 12 家机场进行综合评测，帮助你按预算和使用场景选择合适的服务。",
    type: 'website',
    url: 'https://outsideweb.net/rankings',
  },
  alternates: {
    canonical: 'https://outsideweb.net/rankings',
  },
};

interface AirportRanking {
  rank: number;
  name: string;
  nameEn: string;
  score: number;
  speed: string;
  stability: string;
  price: string;
  lineType: string;
  highlights: string[];
  affLink: string;
  badge?: string;
}

const rankings: AirportRanking[] = [
  {
    rank: 1,
    name: "宝云",
    nameEn: "BaoYun",
    score: 9.8,
    speed: "720-800 Mbps",
    stability: "99.8%",
    price: "¥45-198/月",
    lineType: "IEPL 专线",
    highlights: ["优质专线", "45节点", "稳定可靠"],
    affLink: "https://by.example.com/#/register?code=EXAMPLE",
    badge: "编辑推荐"
  },
  {
    rank: 2,
    name: "鲲鹏加速",
    nameEn: "KunPeng",
    score: 9.7,
    speed: "450-550 Mbps",
    stability: "98.8%",
    price: "¥1-22/月",
    lineType: "中转优化",
    highlights: ["1元试用", "12元99GB", "1.0倍率"],
    affLink: "https://kunpengjiasu.com/#/register?code=tQvtkYsB",
    badge: "性价比之选"
  },
  {
    rank: 3,
    name: "筋斗云",
    nameEn: "JinDouYun",
    score: 9.6,
    speed: "640-700 Mbps",
    stability: "99.7%",
    price: "¥35-168/月",
    lineType: "IEPL 专线",
    highlights: ["2年运营", "32节点", "流媒体全解锁"],
    affLink: "https://jdy.52kok.cn/#/register?code=wUKiwosG"
  },
  {
    rank: 4,
    name: "九云",
    nameEn: "JiuYun",
    score: 9.5,
    speed: "660-720 Mbps",
    stability: "99.8%",
    price: "¥38-178/月",
    lineType: "IEPL 专线",
    highlights: ["3年老牌", "40+节点", "最稳定"],
    affLink: "https://888.jiuyundl.com/#/register?code=SDsIO7kq",
    badge: "稳定之选"
  },
  {
    rank: 5,
    name: "瞬云",
    nameEn: "ShunYun",
    score: 9.4,
    speed: "580 Mbps",
    stability: "99.5%",
    price: "¥28-138/月",
    lineType: "混合专线",
    highlights: ["智能切换", "30节点", "入门友好"],
    affLink: "https://ccc.jichang.best/#/register?code=MhKYAnsG"
  },
  {
    rank: 6,
    name: "云图",
    nameEn: "YunTu",
    score: 9.3,
    speed: "850-920 Mbps",
    stability: "99.9%",
    price: "¥58-288/月",
    lineType: "全 IEPL 专线",
    highlights: ["12ms延迟", "50+节点", "四网优化"],
    affLink: "https://super.ytjcok.org/#/register?code=iV8ahCNE"
  },
  {
    rank: 7,
    name: "山水云",
    nameEn: "ShanShui",
    score: 9.2,
    speed: "620-680 Mbps",
    stability: "99.6%",
    price: "¥32-158/月",
    lineType: "IEPL 专线",
    highlights: ["2年运营", "35节点", "稳定可靠"],
    affLink: "https://sldm1.ssyylf.com/#/register?code=4WTXbMwy"
  },
  {
    rank: 7,
    name: "极连云",
    nameEn: "JiLianYun",
    score: 8.9,
    speed: "680 Mbps",
    stability: "100%",
    price: "¥58-288/月",
    lineType: "IPLC 专线",
    highlights: ["12ms延迟", "游戏加速", "极低延迟"],
    affLink: "https://haozevpn.jlyvipaff.com/#/?code=KUKfOY13",
    badge: "游戏首选"
  },
  {
    rank: 8,
    name: "速界",
    nameEn: "SpeedWorld",
    score: 8.7,
    speed: "550-620 Mbps",
    stability: "98.9%",
    price: "¥30-148/月",
    lineType: "IEPL 专线",
    highlights: ["新锐机场", "智能路由", "技术新"],
    affLink: "https://momlise.szjtfp.xyz/#/?code=GPjugEyt"
  },
  {
    rank: 9,
    name: "秒秒云",
    nameEn: "MiaoMiao",
    score: 8.5,
    speed: "480-520 Mbps",
    stability: "98.5%",
    price: "¥25-60/月",
    lineType: "BGP 优化",
    highlights: ["价格实惠", "入门友好", "适合新手"],
    affLink: "https://m2.mouhiojl.com:8888/#/register?code=6u2dHtD4"
  },
  {
    rank: 10,
    name: "锦云",
    nameEn: "JinYun",
    score: 8.3,
    speed: "450-510 Mbps",
    stability: "98.8%",
    price: "¥20-50/月",
    lineType: "BGP+IEPL",
    highlights: ["小而精", "轻量用户", "18节点"],
    affLink: "https://jybdw1.wanhlj.com:8888/#/register?code=0xeLRRWB"
  },
  {
    rank: 11,
    name: "鲤云",
    nameEn: "LiYun",
    score: 7.8,
    speed: "380-450 Mbps",
    stability: "97.5%",
    price: "¥18-48/月",
    lineType: "BGP 优化",
    highlights: ["入门级", "月付灵活", "试错成本低"],
    affLink: "https://ly888.liydl.com:8888/#/register?code=ihbhLNee"
  },
  {
    rank: 12,
    name: "财路云",
    nameEn: "CaiLu",
    score: 7.2,
    speed: "320-400 Mbps",
    stability: "96.8%",
    price: "¥15-42/月",
    lineType: "BGP 优化",
    highlights: ["超低价", "应急备用", "入门试水"],
    affLink: "https://cl888.cailudl.com:9999/#/register?code=d4UTPba8"
  }
];

const rankingsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: '2026 机场推荐排行榜',
  description: '基于速度、稳定性、价格和线路类型的机场综合评测排名。',
  url: 'https://outsideweb.net/rankings',
  itemListElement: rankings.map((airport, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: airport.name,
    item: {
      '@type': 'Service',
      name: `${airport.name}机场`,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: airport.score,
        bestRating: 10,
        ratingCount: 1,
      },
    },
  })),
};

export default function RankingsPage() {
  return (
    <Shell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rankingsJsonLd) }}
      />
      <div className="container mx-auto max-w-[1400px] px-10 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-display mb-4 text-[42px] font-medium tracking-tight text-ink">
            2026 机场排行榜
          </h1>
          <p className="text-[15px] leading-relaxed text-muted">
            基于真实测试的机场评分排名，包含速度、稳定性、价格等综合指标
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-[12px] text-faint">
            <span>最后更新：2026-09-16</span>
            <span>•</span>
            <span>测试周期：60 天</span>
            <span>•</span>
            <span>测试环境：电信/联通/移动 500M</span>
          </div>
        </div>

        {/* Legend */}
        <div className="mb-8 flex items-center justify-center gap-6 text-[11px]">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-accent"></div>
            <span className="text-muted">9.0+ 顶级</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            <span className="text-muted">8.0-8.9 优秀</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            <span className="text-muted">7.0-7.9 良好</span>
          </div>
        </div>

        {/* Rankings List */}
        <div className="space-y-4">
          {rankings.map((airport) => (
            <div
              key={airport.rank}
              className="group relative overflow-hidden rounded-sm border border-line bg-white transition-all hover:border-accent hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-center gap-8 p-6">
                {/* Rank */}
                <div className="flex-shrink-0">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-sm text-[24px] font-medium ${
                      airport.rank <= 3
                        ? "bg-accent/10 text-accent"
                        : "bg-bg-soft text-muted"
                    }`}
                  >
                    {airport.rank}
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-3">
                    <h3 className="text-[20px] font-medium text-ink">
                      {airport.name}
                    </h3>
                    <span className="text-[12px] text-faint">
                      {airport.nameEn}
                    </span>
                    {airport.badge && (
                      <span className="rounded bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
                        {airport.badge}
                      </span>
                    )}
                  </div>

                  <div className="mb-3 grid grid-cols-4 gap-6">
                    <div>
                      <div className="mb-1 text-[11px] text-faint">综合评分</div>
                      <div className="text-[16px] font-medium text-ink">
                        {airport.score}
                        <span className="text-[12px] text-muted">/10</span>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 text-[11px] text-faint">晚高峰速度</div>
                      <div className="text-[13px] text-ink-soft">
                        {airport.speed}
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 text-[11px] text-faint">稳定性</div>
                      <div className="text-[13px] text-ink-soft">
                        {airport.stability}
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 text-[11px] text-faint">价格区间</div>
                      <div className="text-[13px] text-ink-soft">
                        {airport.price}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="rounded bg-bg-soft px-2 py-1 text-[11px] text-muted">
                      {airport.lineType}
                    </span>
                    {airport.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-[12px] text-ink-soft"
                      >
                        • {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex-shrink-0">
                  <a
                    href={airport.affLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-[13px] font-medium text-white transition-colors hover:bg-accent-dark"
                  >
                    官网注册
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Rank indicator bar */}
              <div
                className={`absolute bottom-0 left-0 h-1 transition-all group-hover:h-1.5 ${
                  airport.score >= 9
                    ? "bg-accent"
                    : airport.score >= 8
                    ? "bg-blue-500"
                    : "bg-yellow-500"
                }`}
                style={{ width: `${airport.score * 10}%` }}
              ></div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="mt-12 rounded-sm border border-line bg-bg-soft p-8">
          <h3 className="mb-4 text-[16px] font-medium text-ink">
            排名说明
          </h3>
          <div className="space-y-2 text-[13px] leading-relaxed text-muted">
            <p>
              • 本排名基于真实测试数据，包含速度、稳定性、价格、线路质量、流媒体解锁等多维度综合评分
            </p>
            <p>
              • 测试环境：北京/上海/深圳，电信/联通/移动 500M 宽带，晚高峰 20:00-22:30 时段
            </p>
            <p>
              • 运营时间、用户口碑、跑路风险也纳入评分考量
            </p>
            <p>
              • 排名每月更新，反映最新测试结果
            </p>
            <p className="pt-2 text-[12px] text-faint">
              ⚠️ 重要提示：机场行业存在跑路风险，建议坚持月付原则，不要一次性充值过多。手里保持 2 家机场（主力 + 备用）是最安全的策略。
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Shell>
  );
}
