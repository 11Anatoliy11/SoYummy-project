import { useSelector } from 'react-redux';
import {
  getLoggedIn,
  getUser,
  getIsRefreshing,
  getIsRegistered,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const user = useSelector(getUser);
  const isRegistered = useSelector(getIsRegistered);
  return { isRefreshing, isLoggedIn, user, isRegistered };
};
