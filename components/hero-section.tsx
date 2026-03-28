import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-sm tracking-[0.3em] text-muted-foreground mb-6 uppercase">
          New Season Collection
        </p>
        
        <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-light leading-tight mb-8 text-balance">
          일상을 특별하게,
          <br />
          <span className="font-medium italic">당신만의 스타일</span>
        </h2>
        
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          세련된 감각으로 엄선한 프리미엄 컬렉션을 만나보세요.
          <br className="hidden sm:block" />
          당신의 라이프스타일을 완성합니다.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wide hover:bg-primary/90 transition-all"
          >
            컬렉션 보기
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            브랜드 스토리
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-border" />
      </div>
    </section>
  )
}
