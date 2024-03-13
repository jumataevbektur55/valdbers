import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./conpanents/Header/index";
import Home from "./conpanents/Home/index";
import AddProduct from "./conpanents/AddProduct/index";
import Product from "./conpanents/Product/index";
import Basket from "./conpanents/Basket/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/product" element={<Product />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
