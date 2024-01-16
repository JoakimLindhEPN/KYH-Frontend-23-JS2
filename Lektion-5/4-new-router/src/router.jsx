import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import axios from 'axios'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import AuthLayout from './layouts/AuthLayout'
import ShopLayout from './layouts/ShopLayout'
import About from './pages/About'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import ShopError from './pages/ShopError'

const loadProducts = async () => {
  const res = await axios.get('https://fakestoreapi.com/products')
  if(!res.status == 200) throw new Error('could not get the products')
  return res.data
}

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
      
//       {
//         path: "/",
//         element: <ShopLayout />,
//         children: [
//           {
//             index: true,
//             element: <Home />
//           },
//           {
//             path: "about",
//             element: <About />
//           },
//           {
//             path: "shop",
//             element: <Shop />,
//             loader: loadProducts,
//             errorElement: <ShopError />,
            
//           },
//           {
//             path: "details/:id",
//             element: <ProductDetails />
//           }
//         ]
//       },
//       {
//         path: "/auth",
//         element: <AuthLayout />,
//         children: [
//           {
//             path: "register",
//             element: <Register />
//           },
//           {
//             path: "login",
//             element: <Login />
//           },
//         ]
//       },

//     ]
//   }
// ])

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "shop",
        element: <Shop />,        
      },
      {
        path: "details/:id",
        element: <ProductDetails />
      }
    ]
  }
])