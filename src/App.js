import React, { lazy, Suspense } from "react";
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

//lazy loading/ on demand loading
//while lazy loainding, react will suspend some time to load the component/js file
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
const AppLayout = () => {
  return (
    <>
      <Header />

      {/*  <About /> 
           <Body />
           <Contact />*/}
      <Outlet> </Outlet>
      <Footer />
    </>
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
        element: <Body />,
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
    ],
  },
  { path: "/about", element: <About /> },
]);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
