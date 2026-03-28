import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PromoBanner() {
  return (
    <section className="py-20 sm:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Banner */}
          <div className="relative aspect-[4/5] sm:aspect-square overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=800&fit=crop"
              alt="Spring Collection"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/30" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-card p-8 text-center">
              <p className="text-xs tracking-[0.3em] mb-4 uppercase opacity-80">
                Special Offer
              </p>
              <h4 className="font-serif text-3xl sm:text-4xl font-light mb-4">
                봄 컬렉션
                <br />
                최대 30% 할인
              </h4>
              <Link
                href="#"
                className="group/link inline-flex items-center gap-2 text-sm font-medium tracking-wide border-b border-card pb-1 hover:opacity-80 transition-opacity"
              >
                지금 쇼핑하기
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Banner */}
          <div className="relative aspect-[4/5] sm:aspect-square overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&h=800&fit=crop"
              alt="Home Collection"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/30" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-card p-8 text-center">
              <p className="text-xs tracking-[0.3em] mb-4 uppercase opacity-80">
                New Arrivals
              </p>
              <h4 className="font-serif text-3xl sm:text-4xl font-light mb-4">
                홈 컬렉션
                <br />
                신상품 입고
              </h4>
              <Link
                href="#"
                className="group/link inline-flex items-center gap-2 text-sm font-medium tracking-wide border-b border-card pb-1 hover:opacity-80 transition-opacity"
              >
                컬렉션 보기
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
