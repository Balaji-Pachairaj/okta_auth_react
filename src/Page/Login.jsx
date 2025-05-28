import { useOktaAuth } from "@okta/okta-react";
import React from "react";

const Login = () => {
  const { oktaAuth, authState } = useOktaAuth();

  const handleLogin = async () => {
    await oktaAuth.signInWithRedirect({
      originalUri: "/dashboard",
      extraParams: {
        // This tells Okta to open the signup tab
        showSignUp: true,
      },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        {!authState && <div>Loading ... please wait </div>}

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Login with Okta
        </button>
      </div>
    </div>
  );
};

export default Login;
