import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/home'
import Navbar from './components/navbar'
import Footer from './components/footer'
import SignIn from './pages/SignIn'
import Product from './pages/Product'
import Products from './pages/Products'

function App() {

  return (
    <>
      <Navbar />
      <h1>Buenas tardes</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iniciar-sesion" element={<SignIn />} />
          <Route path="/productos/:id" element={<Product />} />
          <Route path="/productos" element={<Products />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
