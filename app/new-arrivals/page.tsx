import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewArrivalsGrid } from "@/components/new-arrivals-grid"

export const metadata: Metadata = {
  title: "신상품 | MAISON",
  description: "이번 주 새로 들어온 프리미엄 컬렉션을 만나보세요.",
}

export default function NewArrivalsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <div className="border-b border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <nav className="text-xs text-muted-foreground tracking-wide mb-6">
              <Link href="/" className="hover:text-foreground transition-colors">
                홈
              </Link>
              <span className="mx-2" aria-hidden>
                /
              </span>
              <span className="text-foreground">신상품</span>
            </nav>
            <p className="text-sm tracking-[0.2em] text-muted-foreground mb-4 uppercase">New Arrivals</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-balance">
              신상품
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
              매주 업데이트되는 엄선된 신규 입고 상품입니다. 입고일 순으로 확인하실 수 있습니다.
            </p>
          </div>
        </div>
        <NewArrivalsGrid />
      </div>
      <Footer />
    </main>
  )
}
