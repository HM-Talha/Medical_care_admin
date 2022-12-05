import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateOutlet() {
    const auth = localStorage.getItem('email');
    console.log(auth);
    return auth ? <Outlet /> : <Navigate to="/login" />;
}