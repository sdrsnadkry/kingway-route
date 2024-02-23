import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

import Qr from "./pages/qr";
import Home from "./pages/home";
import Chart from "./pages/chart";
import Login from "./pages/login";
import BarChart from "./pages/barChart";
import Products from "./pages/products";
import { loginAction } from "./redux/slice/authSlice";

function App() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const loggedIn = useSelector((state) => state.authReducer.loggedIn);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(loginAction());
      navigation("/home");
    } else {
      navigation("/");
    }
  }, []);

  return (
    <Routes>
      {loggedIn ? (
        <>
          <Route path="/products" element={<Products />} />
          <Route path="/home" element={<Home />} />
          <Route path="/share" element={<Qr />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/bar-chart" element={<BarChart />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Login />} />
        </>
      )}

      {/* <Route
        path="*"
        element={
          <div>
            <h1>404</h1>
            <h1>Page not found</h1>
          </div>
        }
      /> */}
    </Routes>
  );
}

export default App;
