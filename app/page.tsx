import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { OrderForm } from "@/components/order-form"
import { Footer } from "@/components/footer"
import { ProductSection } from "@/components/product-section"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      <Hero />
      <Features />
      <ProductSection />
      <Testimonials />
      <OrderForm />
      <Footer />
    </div>
  )
}
