import Header from "@/components/layout/Header"
import Hero from "@/components/hero/Hero"
import Services from "@/components/services/Services"
import PopularRoutes from "@/components/routes/PopularRoutes"
import Fleet from "@/components/fleet/Fleet"
import Packages from "@/components/packages/Packages"
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs"
import Testimonials from "@/components/testimonials/Testimonials"
import FaqSection from "@/components/seo/FaqSection"
import CTA from "@/components/cta/CTA"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <PopularRoutes />
      <Fleet />
      <Packages />
      <WhyChooseUs />
      <Testimonials />
      <FaqSection />
      <CTA />
      <Footer />
    </>
  )
}
