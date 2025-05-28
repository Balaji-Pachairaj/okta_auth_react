// ProtectedRoute.jsx
import { useOktaAuth } from '@okta/okta-react';
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const { authState } = useOktaAuth();
  const location = useLocation();

  if (!authState || authState.isPending) return <div>Loading...</div>;

  if (!authState.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}