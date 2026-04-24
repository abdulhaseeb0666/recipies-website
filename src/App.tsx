import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CategoriesPage from './pages/CategoriesPage'
import Chefs from './pages/Chefs'

const App = () => {


  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/chefs" element={<Chefs  />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
