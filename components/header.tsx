"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">М</span>
          </div>
          <span className="font-bold text-xl text-gray-800">MUSLIMA</span>
        </button>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#product" className="text-gray-600 hover:text-emerald-600 transition-colors">
            О товаре
          </a>
          <a href="#order" className="text-gray-600 hover:text-emerald-600 transition-colors">
            Заказать
          </a>
          <a href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors">
            Контакты
          </a>
        </nav>

        <Button
          className="bg-green-500 hover:bg-green-600 text-white"
          onClick={() => window.open("https://wa.me/77715714747", "_blank")}
        >
          <Phone className="w-4 h-4 mr-2" />
          WhatsApp
        </Button>
      </div>
    </header>
  )
}
