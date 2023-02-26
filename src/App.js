import React from "react";
import ReactDom from "react-dom/client";
//import { Title } from "./components/Header"; // Named Import
//import * as Obj from "./components/Title"; Obj.Title or Obj.Header

import Header from "./components/Header"; // Default Import
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
