import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Navbar from "./navbar";

function App() {
  return (
    <Routes>
      <Route
        path="/app"
        element={
          <div>
            <h1>App</h1>
          </div>
        }
      />
      <Route path="/home" element={<Home />} />
      <Route
        path="/about"
        element={
          <div>
            <h1>About</h1>
          </div>
        }
      />
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
