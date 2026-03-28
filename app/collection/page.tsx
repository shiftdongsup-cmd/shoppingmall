import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CollectionShowcase } from "@/components/collection-showcase"

export const metadata: Metadata = {
  title: "컬렉션 | MAISON",
  description: "시즌별로 엄선한 MAISON 컬렉션. 라이프스타일에 맞는 라인을 만나보세요.",
}

export default function CollectionPage() {
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
              <span className="text-foreground">컬렉션</span>
            </nav>
            <p className="text-sm tracking-[0.2em] text-muted-foreground mb-4 uppercase">Collections</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-balance">컬렉션</h1>
            <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
              시즌 에디트와 캡슐 라인으로 구성된 MAISON의 큐레이션입니다. 각 컬렉션은 테마와 무드에 맞춰 상품을 묶었습니다.
            </p>
          </div>
        </div>
        <CollectionShowcase />
      </div>
      <Footer />
    </main>
  )
}
