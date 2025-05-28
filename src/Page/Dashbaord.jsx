import { useOktaAuth } from "@okta/okta-react";
import React, {  useEffect } from "react";

const Dashbaord = () => {
  const { oktaAuth, authState } = useOktaAuth();


  useEffect(() => {
    console.log("Auth State:", authState);
  }, []);
  const handleLogout = async () => {
    await oktaAuth.signOut();
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to the Dashboard
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          This is your dashboard. Manage your activities here.
        </p>
        {
            authState && authState.isAuthenticated ? (
              <div className="text-green-600 mb-4">
                Logged in as: {authState.idToken.claims.email}
              </div>
            ) : (
              <div className="text-red-600 mb-4">You are not logged in.</div>
            )
        }
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashbaord;
