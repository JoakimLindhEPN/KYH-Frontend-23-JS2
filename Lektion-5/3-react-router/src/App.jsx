import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import NotFound from './pages/NotFound'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/shop' element={<Shop /> } />
          <Route path='/details/:id' element={ <ProductDetails /> }/>

          <Route path='*' element={ <NotFound /> }/>
        </Routes>
      </div>
    </Router>
  )
}
export default App