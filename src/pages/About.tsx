import CTA from "../components/about/CTA"
import Featured from "../components/about/Featured"
import Hero from "../components/about/Hero"
import Mission from "../components/about/Mission"
import Stats from "../components/about/Stats Section"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/Navbar"

const About = () => {
  return (
    <div className="bg-linear-to-b from-orange-50 to-white min-h-screen">
      <Navbar />
      <Hero />
      <Mission />
      <Featured />
      <Stats />
      <CTA />
      <Footer />
    </div>
  )
}

export default About