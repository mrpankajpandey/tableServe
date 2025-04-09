import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import Error from './components/Error'
import Register from './components/Register'
import UserNavbar from './components/UserNavbar'
import Menu from './components/Menu'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /><Services /><About /><Contact /><Footer /></>
    },
    {
      path: "/services",
      element: <><Navbar /><Services/><Footer /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About/><Footer /></>
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact/><Footer /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login/><Footer /></>
    },
    {
      path: "/register",
      element: <><Navbar /><Register/><Footer /></>
    },
    {
      path:"/user",
      element:<><UserNavbar/><Menu/><Footer/></>
    },
    {
      path:"*",
      element:<><Error/></>
    },
    {
      path:"/product",
      element:<><UserNavbar/><Product/><Footer/></>
    }

  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
    
  )
}

export default App
