import Link from "next/link"

const categories = [
  {
    name: "의류",
    subtitle: "Clothing",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop",
    href: "#"
  },
  {
    name: "악세서리",
    subtitle: "Accessories", 
    image: "https://images.unsplash.com/photo-1611923134239-b9be5816e23c?w=600&h=800&fit=crop",
    href: "#"
  },
  {
    name: "홈 데코",
    subtitle: "Home Decor",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&h=800&fit=crop",
    href: "#"
  }
]

export function CategorySection() {
  return (
    <section className="py-20 sm:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] text-muted-foreground mb-4 uppercase">
            Categories
          </p>
          <h3 className="font-serif text-3xl sm:text-4xl font-light">
            카테고리별 쇼핑
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative aspect-[3/4] overflow-hidden bg-secondary"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-card">
                <span className="text-xs tracking-[0.3em] mb-2 uppercase opacity-80">
                  {category.subtitle}
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl font-medium">
                  {category.name}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
