import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import AuthLayout from './layouts/AuthLayout'
import ShopLayout from './layouts/ShopLayout'
import About from './pages/About'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import { router } from './router'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<RootLayout />}>
//       <Route path='/' element={<ShopLayout />}>
//         <Route index element={<Home />} />
//         <Route path='about' element={<About />} />
//         <Route path='shop' element={<Shop />} />
//         <Route path='details/:id' element={<ProductDetails />} />
//       </Route>

//       <Route path='/auth' element={<AuthLayout />}>
//           <Route path='register' element={<Register />} />
//           <Route path='login' element={<Login />} />
//       </Route>
//     </Route>
//   )
// )



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
