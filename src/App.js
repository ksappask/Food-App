import React, { lazy, Suspense, useState } from "react";
import ReactDom from "react-dom/client";
//import { Title } from "./components/Header"; // Named Import
//import * as Obj from "./components/Title"; Obj.Title or Obj.Header

import Header from "./components/Header"; // Default Import
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utlis/UserContext";
import { Provider } from "react-redux";
import store from "./utlis/store";
import Cart from "./components/Cart";
//lazy loading/ on demand loading
//while lazy loainding, react will suspend some time to load the component/js file
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Akash Krishnan",
    email: "akash@gmail.com",
  });
  //<UserContext.Provider value={{ user: user, setUser: setUser }}>
  //</UserContext.Provider>
  //store =  => (this store) name is important, redux only knows that {store} not this store
  return (
    <Provider store={store}>
      <Header />
      <Outlet> </Outlet>
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />, //Props - User
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
  { path: "/about", element: <About /> },
]);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
