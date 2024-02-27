import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./pages/navbar.component";
import Home from "./pages/home.component";
import Spinner from './components/spinner.component'
import SignIn from "./pages/sign-in.component";
import Shop from "./pages/shop.component";
import Checkout from "./pages/checkout.component";
import Categories from "./components/category/categories.component";
import Category from "./components/category/category.component";
import { useEffect } from "react";
import { onAuthStateChangeListner } from "./utils/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Home /> },
      // { index: true, element: <Spinner />},
      { path: "sign-in", element: <SignIn /> },
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
