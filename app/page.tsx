import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategorySection } from "@/components/category-section"
import { ProductGrid } from "@/components/product-grid"
import { PromoBanner } from "@/components/promo-banner"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CategorySection />
      <ProductGrid />
      <PromoBanner />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
