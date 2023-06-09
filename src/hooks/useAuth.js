import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  const user = useSelector(authSelectors.getUser);
  const isRegistered = useSelector(authSelectors.getIsRegistered);
  const subscribeMessage = useSelector(authSelectors.getSubscribeMessage);
  return { isRefreshing, isLoggedIn, user, isRegistered, subscribeMessage };
};
