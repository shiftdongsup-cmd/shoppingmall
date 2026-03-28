"use client"

import { useState } from "react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Newsletter signup logic
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="py-20 sm:py-32 px-4 bg-secondary">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm tracking-[0.2em] text-muted-foreground mb-4 uppercase">
          Newsletter
        </p>
        <h3 className="font-serif text-3xl sm:text-4xl font-light mb-6">
          특별한 소식을 가장 먼저
        </h3>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          신상품 출시, 시즌 할인, 스타일링 팁까지
          <br className="hidden sm:block" />
          MAISON의 특별한 소식을 이메일로 받아보세요.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일 주소를 입력하세요"
            className="flex-1 px-4 py-3 bg-background border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
          >
            구독하기
          </button>
        </form>

        <p className="text-xs text-muted-foreground mt-6">
          구독 신청 시 개인정보처리방침에 동의하는 것으로 간주됩니다.
        </p>
      </div>
    </section>
  )
}
