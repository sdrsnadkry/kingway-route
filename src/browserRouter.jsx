import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./navbar";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    children: [
      {
        path: "team",
        element: (
          <div>
            <Navbar />
            <h1>Team</h1>
          </div>
        ),
      },
      {
        path: "contact",
        element: (
          <div>
            <Navbar />

            <h1>Contact</h1>
          </div>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <div>
        <h1>Login</h1>
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div>
        <h1>Register</h1>
      </div>
    ),
  },

  {
    path: "*",
    element: (
      <div>
        <h1>404</h1>
        <h1>Page not found</h1>
      </div>
    ),
  },
]);

function RouteMain() {
  return <RouterProvider router={router} />;
}

export default RouteMain;
