import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo }) => {
    const isLoggedIn = true;
    return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
};
