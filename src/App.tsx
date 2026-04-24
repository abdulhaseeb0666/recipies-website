import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CategoriesPage from './pages/CategoriesPage'
import Chefs from './pages/Chefs'
import AboutPage from './pages/About'

const App = () => {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App