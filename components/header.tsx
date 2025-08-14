"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Menu, X, Globe, LayoutDashboard, CreditCard, ArrowLeftRight, Receipt, Settings } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/get-started", icon: Globe, label: "Get Started" },
    { href: "/", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/accounts", icon: CreditCard, label: "Accounts" },
    { href: "/transfers", icon: ArrowLeftRight, label: "Transfers" },
    { href: "/transactions", icon: Receipt, label: "Transactions" },
    { href: "/settings", icon: Settings, label: "Settings" },
  ]

  return (
    <>
      <header className="bg-[#ffffff] border-b border-[#e4e4e7] px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile hamburger menu and logo */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#71717a] hover:bg-[#fafafa] rounded-lg"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="flex items-center gap-2">
              <img 
                src="/Logo (1).svg" 
                alt="FundR Logo" 
                className="w-8 h-8"
              />
              <span className="font-bold text-xl text-[#2e2e2e]">FundR</span>
            </div>
          </div>

          {/* Desktop right side */}
          <div className="flex items-center justify-end gap-4 ml-auto">
            <button className="p-2 text-[#71717a] hover:bg-[#fafafa] rounded-lg">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 bg-[#0cbc8b] rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">GA</span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-64 bg-[#ffffff] border-r border-[#e4e4e7] z-50">
            {/* Mobile menu header */}
            <div className="p-6 border-b border-[#e4e4e7]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img 
                    src="/Logo (1).svg" 
                    alt="FundR Logo" 
                    className="w-8 h-8"
                  />
                  <span className="font-bold text-xl text-[#2e2e2e]">FundR</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-[#71717a] hover:bg-[#fafafa] rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mobile navigation */}
            <nav className="px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                      isActive ? "bg-[#3976e8] text-white" : "text-[#71717a] hover:bg-[#fafafa]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
