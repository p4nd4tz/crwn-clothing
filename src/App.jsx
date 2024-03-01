import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Categories from "./components/category/categories.component";
import Category from "./components/category/category.component";
import { useEffect, lazy } from "react";
import { onAuthStateChangeListner } from "./utils/firebase.utils";
import { setCurrentUser } from "./store/user/user.reducer";
import { useDispatch } from "react-redux";

const Navbar = lazy(() => import("./pages/navbar.component"));
const Home = lazy(() => import("./pages/home.component"));
const Authentication = lazy(() => import("./pages/authentication"));
const Shop = lazy(() => import("./pages/shop.component"));
const Checkout = lazy(() => import("./pages/checkout.component"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Home /> },
      { path: "auth", element: <Authentication /> },
      {
        path: "shop",
        element: <Shop />,
        children: [
          { index: true, element: <Categories /> },
          { path: ":category", element: <Category /> },
        ],
      },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListner((user) => {
      dispatch(setCurrentUser(user));
    });

    return () => unsubscribe;
  }, [dispatch]);

  return <RouterProvider router={routes} />;
}

export default App;
