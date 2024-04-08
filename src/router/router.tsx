import { createBrowserRouter } from "react-router-dom";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import PDF from "../pages/pdf/PDF";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/pdf",
    element: <PDF />,
  },
]);

export default router;
