import { CheckCircle, Heart, Shield, Zap } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-emerald-600" />,
      title: "Ультра-компактный",
      description: "Помещается даже в самую маленькую сумочку или карман",
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      title: "Качественные материалы",
      description: "Изготовлен из прочных и приятных на ощупь материалов",
    },
    {
      icon: <Heart className="w-8 h-8 text-emerald-600" />,
      title: "Красивый дизайн",
      description: "Элегантный внешний вид подойдет к любому стилю",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-emerald-600" />,
      title: "Легко использовать",
      description: "Быстро разворачивается и складывается обратно",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Почему выбирают наши намазники?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы создали идеальное решение для современных мусульманок, которые ценят удобство и качество
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-emerald-50 transition-colors">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
