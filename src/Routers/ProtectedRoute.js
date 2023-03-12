import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/signin'></Navigate>
};

export default ProtectedRoute;