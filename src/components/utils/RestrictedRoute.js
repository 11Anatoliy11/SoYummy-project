import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth/auth-selectors';

export const RestrictedRoute = ({ component: Component, redirectTo }) => {
    const isLoggedIn = useSelector(authSelectors.getLoggedIn);
    console.log('isLoggedIN',isLoggedIn)
    // return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
    //  щоб був зараз доступ до сторінок "/welcome", "/register", "/signin" ок, але має бути
     return isLoggedIn ? <Navigate to={redirectTo}/> : <Component/>
};
