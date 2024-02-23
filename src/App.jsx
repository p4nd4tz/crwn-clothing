import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './pages/navbar.component';
import Home from './pages/home.component'
import SignIn from './pages/sign-in.component'
import Shop from './pages/shop.component';
import Checkout from './pages/checkout.component';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Home /> },
      { path: "sign-in", element: <SignIn /> },
      { path: "shop", element: <Shop /> },
      { path: "checkout", element: <Checkout /> },
    ]
  }
])

function App() {

  return (
    <RouterProvider router={routes} />
  )
}

export default App
