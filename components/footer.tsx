"use client"

import { Phone, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Н</span>
              </div>
              <span className="font-bold text-xl">MUSLIMA</span>
            </div>
            <p className="text-gray-400">
              Качественные карманные намазники для современных мусульманок. Всегда с вами, где бы вы ни находились.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">+7 771 571 47 47</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">WhatsApp</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">Доставка по всему Казахстану</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Информация</h3>
            <div className="space-y-2">
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">О нас</p>
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Доставка и оплата</p>
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Возврат товара</p>
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Отзывы</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Связаться с нами</h3>
            <p className="text-gray-400 text-sm">
              Есть вопросы? Напишите нам в WhatsApp, и мы ответим в течение 5 минут!
            </p>
            <Button
              className="bg-green-500 hover:bg-green-600 text-white w-full"
              onClick={() => window.open("https://wa.me/77715714747", "_blank")}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2024 Muslima. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
