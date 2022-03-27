import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart, Home, Login, Product, ProductList, Register } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/product_list/:categoty" element={<ProductList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
