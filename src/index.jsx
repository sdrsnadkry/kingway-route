import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./navbar";
import Products  from "./pages/products";
import Qr from "./pages/qr";
import Chart from "./pages/chart";
import BarChart from "./pages/barChart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/home" element={<Home />} />
      <Route path="/share" element={<Qr />} />
      <Route path="/chart" element={<Chart />} />
      <Route path="/bar-chart" element={<BarChart />} />

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
