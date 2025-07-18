"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Карманный намазник + маленький жайнамаз в комплекте
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Полный комплект для намаза: компактный намазник и маленький жайнамаз. Всё необходимое в одной покупке
                по специальной цене.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById("product")?.scrollIntoView({ behavior: "smooth" })}
              >
                Узнать подробнее
                <ArrowDown className="w-5 h-5 ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg bg-transparent"
                onClick={() => window.open("https://wa.me/77715714747", "_blank")}
              >
                Задать вопрос
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">100%</div>
                <div className="text-sm text-gray-600">Качество</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">24/7</div>
                <div className="text-sm text-gray-600">Поддержка</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">🚚</div>
                <div className="text-sm text-gray-600">Доставка</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-3xl p-8">
              <Image
                src="/1.jpg"
                alt="Комплект: Карманный намазник + маленький Жайнамаз"
                width={400}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold transform rotate-12">
                НОВИНКА!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
