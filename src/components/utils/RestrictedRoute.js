import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo }) => {
    const isLoggedIn = true;
    return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
    //  щоб був зараз доступ до сторінок "/welcome", "/register", "/signin" ок, але має бути
    //  isLoggedIn ? <Navigate to={redirectTo} : <Component/>
};
