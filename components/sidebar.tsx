"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe, LayoutDashboard, CreditCard, ArrowLeftRight,Coins,Rows3, Receipt, Settings, Wallet } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/get-started", icon: Globe, label: "Get Started" },
    { href: "/", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/accounts", icon: Wallet, label: "Accounts" },
    { href: "/transfers", icon: Coins, label: "Transfers" },
    { href: "/transactions", icon: Rows3, label: "Transactions" },
    { href: "/settings", icon: Settings, label: "Settings" },
  ]

  return (
    <div className="w-64 bg-[#ffffff] border-r border-[#e4e4e7]">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <img 
            src="/Logo (1).svg" 
            alt="FundR Logo" 
            className="w-100 h-8"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
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
  )
}
