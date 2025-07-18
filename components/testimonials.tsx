"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Почему выбирают MUSLIMA?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы создаем качественные товары для современных мусульманок
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <Quote className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Качество материалов</h3>
              <p className="text-gray-600">Используем только проверенные материалы, приятные на ощупь и долговечные</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <Quote className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Удобство использования</h3>
              <p className="text-gray-600">
                Компактный размер позволяет всегда иметь намазник с собой, где бы вы ни находились
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <Quote className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Быстрая поддержка</h3>
              <p className="text-gray-600">Отвечаем на все вопросы в WhatsApp и помогаем с выбором в любое время</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
