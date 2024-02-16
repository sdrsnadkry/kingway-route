import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./navbar";
import Products  from "./pages/products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/home" element={<Home />} />

      <Route
        path="*"
        element={
          <div>
            <h1>404</h1>
            <h1>Page not found</h1>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
