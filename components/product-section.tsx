"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, CheckCircle } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function ProductSection() {
  const handleOrder = () => {
    const message = `Здравствуйте! Хочу заказать комплект: Карманный намазник + Жайнамаз за 14990 тенге`
    window.open(`https://wa.me/77715714747?text=${encodeURIComponent(message)}`, "_blank")
  }

  const features = [
    "Карманный намазник в разложенном виде",
    "Маленький Жайнамаз (коврик для намаза)",
    "Компактная упаковка - помещается в сумочку",
    
  ]

  const carouselImages = ["/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/6.jpg"]
  const [current, setCurrent] = useState(0)

  const prevImage = () => setCurrent((current - 1 + carouselImages.length) % carouselImages.length)
  const nextImage = () => setCurrent((current + 1) % carouselImages.length)

  return (
    <section id="product" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Полный комплект для намаза</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Всё необходимое в одной покупке по специальной цене</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-3xl p-8">
              <Image
                src={carouselImages[current]}
                alt={`Фото ${current + 2}`}
                width={400}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="flex justify-between mt-4">
                <button
                  onClick={prevImage}
                  className="bg-emerald-600 text-white px-4 py-2 rounded-l-xl"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="bg-emerald-600 text-white px-4 py-2 rounded-r-xl"
                >
                  →
                </button>
              </div>
              <Badge className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold transform rotate-12">
                КОМПЛЕКТ!
              </Badge>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Карманный намазник + Жайнамаз</h3>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-bold text-emerald-600">14 990 ₸</span>
                <span className="text-2xl text-gray-400 line-through">19 990 ₸</span>
                <Badge className="bg-red-500 text-white">Скидка 25%</Badge>
              </div>

              <p className="text-lg text-gray-600 mb-6">
                Идеальный комплект для современной мусульманки! Карманный намазник с жайнамазом поместится в любую сумочку и
                 обеспечит комфорт во время молитвы вне дома.
      
              </p>
            </div>

            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Что входит в комплект:</h4>
                <div className="grid gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-xl font-semibold"
                onClick={handleOrder}
              >
                <ShoppingCart className="w-6 h-6 mr-3" />
                Заказать комплект за 14 990 ₸
              </Button>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-center text-gray-700">
                  <strong>🎁 Специальное предложение!</strong> При заказе от 10 штук - скидка!
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center pt-6 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-emerald-600">✓</div>
                <div className="text-sm text-gray-600">Гарантия качества</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-600">🚚</div>
                <div className="text-sm text-gray-600">Быстрая доставка</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-600">💬</div>
                <div className="text-sm text-gray-600">Поддержка 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
