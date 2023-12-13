import { Routes, Route } from "react-router-dom";
import Home from "../home/home";
import About from "../about/about";
import Products from "../products/products";
import Help from "../help/help";
import MainLayout from "../layouts/main_layouts";

const Router = () => (
  
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/help" element={<Help />} />
    </Route>
  </Routes>
)
export default Router;