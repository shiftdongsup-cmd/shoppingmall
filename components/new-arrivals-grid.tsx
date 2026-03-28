"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { useMemo, useState } from "react"
import { Slider } from "@/components/ui/slider"

const newArrivals = [
  {
    id: "n1",
    name: "오버사이즈 울 코트",
    price: 328000,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&fit=crop",
    category: "의류",
    arrivedAt: "3.25 입고",
  },
  {
    id: "n2",
    name: "메탈 체인 네크리스",
    price: 78000,
    image: "https://images.unsplash.com/photo-1599643478518-a784eaa60c8b?w=400&h=500&fit=crop",
    category: "악세서리",
    arrivedAt: "3.24 입고",
  },
  {
    id: "n3",
    name: "머메이드 실루엣 스커트",
    price: 142000,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aa0b?w=400&h=500&fit=crop",
    category: "의류",
    arrivedAt: "3.24 입고",
  },
  {
    id: "n4",
    name: "핸드메이드 세라믹 볼",
    price: 52000,
    image: "https://images.unsplash.com/photo-1578749556568-bc2b40b68ed6?w=400&h=500&fit=crop",
    category: "홈 데코",
    arrivedAt: "3.23 입고",
  },
  {
    id: "n5",
    name: "캐시미어 블렌드 스카프",
    price: 98000,
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2dc1d?w=400&h=500&fit=crop",
    category: "악세서리",
    arrivedAt: "3.22 입고",
  },
  {
    id: "n6",
    name: "스트럭처드 숄더백",
    price: 289000,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop",
    category: "악세서리",
    arrivedAt: "3.22 입고",
  },
  {
    id: "n7",
    name: "오가닉 코튼 티셔츠",
    price: 59000,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
    category: "의류",
    arrivedAt: "3.21 입고",
  },
  {
    id: "n8",
    name: "우드 & 린넨 룸 스프레이",
    price: 48000,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=500&fit=crop",
    category: "홈 데코",
    arrivedAt: "3.20 입고",
  },
]

const SLIDER_STEP = 10000
const prices = newArrivals.map((p) => p.price)
const SLIDER_MIN = Math.floor(Math.min(...prices) / SLIDER_STEP) * SLIDER_STEP
const SLIDER_MAX = Math.ceil(Math.max(...prices) / SLIDER_STEP) * SLIDER_STEP

function formatPrice(price: number) {
  return new Intl.NumberFormat("ko-KR").format(price)
}

function NewArrivalCard({ product }: { product: (typeof newArrivals)[0] }) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 bg-foreground text-background text-[10px] font-semibold tracking-widest px-2 py-1">
          NEW
        </span>
        <button
          type="button"
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
          aria-label="위시리스트에 추가"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${isLiked ? "fill-accent text-accent" : ""}`}
          />
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            type="button"
            className="w-full py-3 bg-background text-foreground text-sm font-medium tracking-wide hover:bg-background/90 transition-colors"
          >
            장바구니 담기
          </button>
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground tracking-wide uppercase">
          {product.category}
        </p>
        <Link href="#" className="block">
          <h4 className="text-sm font-medium hover:text-accent transition-colors">{product.name}</h4>
        </Link>
        <p className="text-xs text-muted-foreground">{product.arrivedAt}</p>
        <p className="text-sm font-medium">{formatPrice(product.price)}원</p>
      </div>
    </div>
  )
}

export function NewArrivalsGrid() {
  const [range, setRange] = useState<[number, number]>([SLIDER_MIN, SLIDER_MAX])

  const filtered = useMemo(
    () => newArrivals.filter((p) => p.price >= range[0] && p.price <= range[1]),
    [range],
  )

  const isFullRange = range[0] === SLIDER_MIN && range[1] === SLIDER_MAX

  return (
    <section className="py-16 sm:py-24 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 pb-10 border-b border-border">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="lg:max-w-xl lg:flex-1">
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2">Filter</p>
              <h2 className="text-sm font-medium tracking-wide mb-4">가격대</h2>
              <p className="text-sm text-muted-foreground tabular-nums mb-6">
                {formatPrice(range[0])}원 — {formatPrice(range[1])}원
                <span className="ml-2 text-xs normal-case tracking-normal">
                  ({filtered.length}개 상품)
                </span>
              </p>
              <Slider
                min={SLIDER_MIN}
                max={SLIDER_MAX}
                step={SLIDER_STEP}
                value={[range[0], range[1]]}
                onValueChange={(v) => {
                  const next = v as [number, number]
                  if (next.length === 2) setRange([next[0], next[1]])
                }}
                aria-label="가격대 범위"
                className="w-full max-w-md"
              />
              <p className="mt-3 flex justify-between text-[11px] text-muted-foreground tabular-nums max-w-md">
                <span>{formatPrice(SLIDER_MIN)}원</span>
                <span>{formatPrice(SLIDER_MAX)}원</span>
              </p>
            </div>
            {!isFullRange && (
              <button
                type="button"
                onClick={() => setRange([SLIDER_MIN, SLIDER_MAX])}
                className="self-start text-xs font-medium tracking-wide border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors"
              >
                가격대 초기화
              </button>
            )}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-sm text-muted-foreground py-16">
            선택한 가격대에 해당하는 상품이 없습니다.
            <button
              type="button"
              onClick={() => setRange([SLIDER_MIN, SLIDER_MAX])}
              className="block mx-auto mt-4 text-foreground text-xs font-medium tracking-wide border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors"
            >
              전체 가격대 보기
            </button>
          </p>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-x-8">
            {filtered.map((product) => (
              <NewArrivalCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
