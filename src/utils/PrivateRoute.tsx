import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }: any) {
      const isAuthenticated = localStorage.getItem('loginResponse');
      return isAuthenticated ? children : <Navigate to={"/login"} />;
}
export default PrivateRoute;