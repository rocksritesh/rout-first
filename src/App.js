import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/About_us";
import ContactUs from "./components/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar /> <Home />
        </>
      ),
    },
    {
      path: "contact",
      element: (
        <>
          <Navbar />
          <ContactUs />
        </>
      ),
    },
    {
      path: "about-us",
      element: (
        <>
          <Navbar />
          <AboutUs />
        </>
      ),
    },
    {
      path: "our-products",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
