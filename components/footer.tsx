import Link from "next/link"

const footerLinks = {
  shop: {
    title: "쇼핑하기",
    links: [
      { name: "신상품", href: "/new-arrivals" },
      { name: "베스트", href: "#" },
      { name: "의류", href: "#" },
      { name: "악세서리", href: "#" },
      { name: "홈 데코", href: "#" }
    ]
  },
  support: {
    title: "고객지원",
    links: [
      { name: "주문/배송 조회", href: "#" },
      { name: "교환/반품", href: "#" },
      { name: "자주 묻는 질문", href: "#" },
      { name: "1:1 문의", href: "#" }
    ]
  },
  about: {
    title: "About",
    links: [
      { name: "브랜드 스토리", href: "#" },
      { name: "매장 안내", href: "#" },
      { name: "채용 안내", href: "#" },
      { name: "제휴 문의", href: "#" }
    ]
  }
}

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "KakaoTalk", href: "#" }
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-semibold tracking-widest">
                MAISON
              </span>
            </Link>
            <p className="text-sm leading-relaxed opacity-80">
              일상을 특별하게 만드는
              <br />
              프리미엄 라이프스타일 브랜드
            </p>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-medium tracking-wide mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-60 order-2 sm:order-1">
            © 2024 MAISON. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 order-1 sm:order-2">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-xs tracking-wide opacity-70 hover:opacity-100 transition-opacity"
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
