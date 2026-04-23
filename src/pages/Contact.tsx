import Footer from "../components/common/Footer"
import Navbar from "../components/common/Navbar"
import FAQ from "../components/contact/FAQ"
import Form from "../components/contact/Form"
import Hero from "../components/contact/Hero"
import Info from "../components/contact/Info"

const Contact = () => {
  

  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50 to-white">
      <Navbar />
      <Hero />
      {/* Main Section */}
      <div className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-2 gap-10">
        <Form />
        <Info />
      </div>
      <FAQ />
      <Footer />
    </div>
  )
}

export default Contact