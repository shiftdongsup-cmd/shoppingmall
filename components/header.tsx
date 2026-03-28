"use client"

import Link from "next/link"
import { Search, User, ShoppingBag, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 -ml-2"
              aria-label="메뉴 열기"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/new-arrivals" className="text-sm font-medium tracking-wide hover:text-accent transition-colors">
                신상품
              </Link>
              <Link href="#" className="text-sm font-medium tracking-wide hover:text-accent transition-colors">
                베스트
              </Link>
              <Link href="#" className="text-sm font-medium tracking-wide hover:text-accent transition-colors">
                카테고리
              </Link>
            </nav>

            {/* Logo */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <h1 className="font-serif text-2xl sm:text-3xl font-semibold tracking-widest">
                MAISON
              </h1>
            </Link>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:text-accent transition-colors" aria-label="검색">
                <Search className="h-5 w-5" />
              </button>
              <button className="hidden sm:block p-2 hover:text-accent transition-colors" aria-label="마이페이지">
                <User className="h-5 w-5" />
              </button>
              <button className="p-2 hover:text-accent transition-colors relative" aria-label="장바구니">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-medium rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <Link 
              href="/new-arrivals" 
              className="text-sm font-medium tracking-wide hover:text-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              신상품
            </Link>
            <Link 
              href="#" 
              className="text-sm font-medium tracking-wide hover:text-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              베스트
            </Link>
            <Link 
              href="#" 
              className="text-sm font-medium tracking-wide hover:text-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              카테고리
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
