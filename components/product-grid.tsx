"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "실크 블렌드 블라우스",
    price: 89000,
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=500&fit=crop",
    category: "의류"
  },
  {
    id: 2,
    name: "미니멀 골드 이어링",
    price: 45000,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop",
    category: "악세서리"
  },
  {
    id: 3,
    name: "린넨 와이드 팬츠",
    price: 128000,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
    category: "의류"
  },
  {
    id: 4,
    name: "캐시미어 니트",
    price: 198000,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop",
    category: "의류"
  },
  {
    id: 5,
    name: "세라믹 화병",
    price: 67000,
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=500&fit=crop",
    category: "홈 데코"
  },
  {
    id: 6,
    name: "레더 토트백",
    price: 259000,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=500&fit=crop",
    category: "악세서리"
  },
  {
    id: 7,
    name: "코튼 원피스",
    price: 156000,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
    category: "의류"
  },
  {
    id: 8,
    name: "아로마 캔들",
    price: 42000,
    image: "https://images.unsplash.com/photo-1602607434547-23e356a23fd9?w=400&h=500&fit=crop",
    category: "홈 데코"
  }
]

function formatPrice(price: number) {
  return new Intl.NumberFormat('ko-KR').format(price)
}

function ProductCard({ product }: { product: typeof products[0] }) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
          aria-label="위시리스트에 추가"
        >
          <Heart 
            className={`h-4 w-4 transition-colors ${isLiked ? 'fill-accent text-accent' : ''}`}
          />
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-full py-3 bg-background text-foreground text-sm font-medium tracking-wide hover:bg-background/90 transition-colors">
            장바구니 담기
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <p className="text-xs text-muted-foreground tracking-wide uppercase">
          {product.category}
        </p>
        <Link href="#" className="block">
          <h4 className="text-sm font-medium hover:text-accent transition-colors">
            {product.name}
          </h4>
        </Link>
        <p className="text-sm font-medium">
          {formatPrice(product.price)}원
        </p>
      </div>
    </div>
  )
}

export function ProductGrid() {
  return (
    <section className="py-20 sm:py-32 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-sm tracking-[0.2em] text-muted-foreground mb-4 uppercase">
              Best Sellers
            </p>
            <h3 className="font-serif text-3xl sm:text-4xl font-light">
              베스트 상품
            </h3>
          </div>
          
          <Link
            href="#"
            className="text-sm font-medium tracking-wide border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors self-start sm:self-auto"
          >
            전체 보기
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
