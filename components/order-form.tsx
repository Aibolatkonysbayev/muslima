"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, User, MessageCircle } from "lucide-react"

export function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.phone) {
      alert("Пожалуйста, заполните имя и телефон")
      return
    }

    const message = `Новый заказ комплекта!
Товар: Карманный намазник + Жайнамаз (14 990 ₸)
Имя: ${formData.name}
Телефон: ${formData.phone}
${formData.message ? `Сообщение: ${formData.message}` : ""}`

    window.open(`https://wa.me/77715714747?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section id="order" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Заказать комплект</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Заполните форму, и мы свяжемся с вами в WhatsApp для подтверждения заказа комплекта за 14 990 ₸
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-900">Быстрый заказ</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-medium">
                    Ваше имя *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Введите ваше имя"
                      className="pl-10 py-3 text-base"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-medium">
                    Номер телефона *
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="pl-10 py-3 text-base"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base font-medium">
                    Дополнительные пожелания
                  </Label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Textarea
                      id="message"
                      placeholder="Укажите предпочтительное время доставки или другие пожелания..."
                      className="pl-10 py-3 text-base min-h-[100px]"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-semibold"
                >
                  Отправить заказ в WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="bg-emerald-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Как происходит заказ?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <p className="text-gray-700">Заполните форму с вашими данными</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <p className="text-gray-700">Мы свяжемся с вами в WhatsApp</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <p className="text-gray-700">Подтвердим детали и доставку</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <p className="text-gray-700">Доставим ваш заказ</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🎁 Специальное предложение!</h3>
              <p className="text-gray-700 mb-4">
                При заказе от 10 товаров - скидка.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
