import Link from "next/link"
import { ArrowRight } from "lucide-react"

const heroCollections = [
  {
    id: "ss25",
    title: "SS25 · 라이트 에디트",
    subtitle: "Spring Summer 2025",
    description:
      "얇은 울과 린넨, 은은한 실루엣으로 완성한 봄·여름 데일리 라인. 출근부터 주말 브런치까지 자연스럽게 이어지는 컬러 팔레트입니다.",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=900&fit=crop",
    cta: "에디트 쇼핑하기",
    href: "/new-arrivals",
  },
  {
    id: "evening",
    title: "이브닝 캡슐",
    subtitle: "Evening Capsule",
    description:
      "메탈 악세서리와 구조적인 실루엣이 만나는 한정 캡슐. 작은 모임과 특별한 날을 위한 미니멀 드레스업을 제안합니다.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&h=900&fit=crop",
    cta: "캡슐 보기",
    href: "/new-arrivals",
  },
]

const capsuleCollections = [
  {
    id: "atelier",
    title: "아틀리에 베이직",
    line: "Atelier Essentials",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=1000&fit=crop",
    href: "/new-arrivals",
  },
  {
    id: "home",
    title: "메종 홈",
    line: "Maison Home",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&h=1000&fit=crop",
    href: "/new-arrivals",
  },
  {
    id: "object",
    title: "오브제 & 리빙",
    line: "Objects",
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=1000&fit=crop",
    href: "/new-arrivals",
  },
]

export function CollectionShowcase() {
  return (
    <div className="bg-background">
      {heroCollections.map((item, index) => (
        <section
          key={item.id}
          id={item.id}
          className="border-b border-border last:border-b-0"
        >
          <div
            className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
          >
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[min(100vh,720px)] bg-secondary overflow-hidden">
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24">
              <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase mb-4">{item.subtitle}</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-balance mb-6">{item.title}</h2>
              <p className="text-muted-foreground leading-relaxed max-w-md mb-10">{item.description}</p>
              <Link
                href={item.href}
                className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide border-b border-foreground pb-1 w-fit hover:text-accent hover:border-accent transition-colors"
              >
                {item.cta}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 sm:py-28 px-4 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
            <p className="text-sm tracking-[0.2em] text-muted-foreground mb-4 uppercase">Capsule</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-light">추천 컬렉션</h2>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              라인별로 엄선한 픽입니다. 각 컬렉션은 시즌과 입고 상황에 따라 업데이트됩니다.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {capsuleCollections.map((c) => (
              <Link
                key={c.id}
                href={c.href}
                id={c.id}
                className="group relative aspect-[3/4] overflow-hidden bg-secondary"
              >
                <img
                  src={c.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/25 group-hover:bg-foreground/35 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-card px-6">
                  <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase opacity-90 mb-2">{c.line}</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium">{c.title}</h3>
                  <span className="mt-4 text-xs tracking-wide opacity-90 group-hover:translate-y-0.5 transition-transform inline-flex items-center gap-1">
                    둘러보기
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-4">Latest</p>
          <h2 className="font-serif text-2xl sm:text-3xl font-light mb-4">새로 들어온 픽</h2>
          <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
            이번 주 신상품에서 컬렉션 무드에 맞는 아이템을 먼저 만나보세요.
          </p>
          <Link
            href="/new-arrivals"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wide hover:bg-primary/90 transition-all"
          >
            신상품으로 이동
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
