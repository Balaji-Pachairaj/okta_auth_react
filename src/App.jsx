import "./App.css";
import {
  createBrowserRouter,
  Outlet,
  Router,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Page/Login";
import { LoginCallback, Security } from "@okta/okta-react";
import OktaAuth from "@okta/okta-auth-js";
import oktaConfig from "./oktaConfig";
import Dashbaord from "./Page/Dashbaord";
import ProtectedRoute from "./Components/ProtectedRoute";

const oktaAuth = new OktaAuth(oktaConfig);

// Wrap in a component to use `useNavigate`
function SecurityWrapper({ children }) {
  const navigate = useNavigate();

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    navigate(originalUri || "/");
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Outlet />
    </Security>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <SecurityWrapper></SecurityWrapper>,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/login/callback", element: <LoginCallback /> },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashbaord />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
