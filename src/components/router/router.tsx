import { Routes, Route } from "react-router-dom";
import Home from "../home/home";
import About from "../about/about";
import Products from "../products/products";
import Help from "../help/help";
import MainLayout from "../layouts/main_layouts";
import Product from "../products/product/product";
import NotFound from "../not_found/not_found";

const Router = () => (
  
  <Routes>
    <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<Product />}/>
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
)
export default Router;