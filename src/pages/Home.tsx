import Hero from "../components/home/Hero"
import Categories from "../components/home/Categories"
import Featured from "../components/home/Featured"
import Navbar from '../components/common/Navbar.tsx'
import Footer from "../components/common/Footer"

const Home = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50 to-white">
      <Navbar />
        <Hero />
        <Categories />
        <Featured />
      <Footer />
    </div>
  )
}

export default Home