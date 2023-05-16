import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router';
import SharedLayout from 'pages/SharedLayout/SharedLayout';
import { PrivateRoute, RestrictedRoute } from '../utils';
import { Suspense, lazy, useEffect } from 'react';
import { NotFound } from '../NotFound/NotFound';
import CategoriesLayout from 'pages/CategoriesLayout/CategoriesLayout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/auth-operations';
import { ToastContainer } from 'react-toastify';
import { Loader } from 'components/Common';
import { useAuth } from 'hooks/useAuth';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const SigninPage = lazy(() => import('pages/SigninPage/SigninPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const CategoryPage = lazy(() => import('pages/CategoryPage/CategoryPage'));
const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const AddRecipesPage = lazy(() =>
  import('pages/AddRecipesPage/AddRecipesPage')
);
const MyRecipesPage = lazy(() => import('pages/MyRecipesPage/MyRecipesPage'));
const FavoritePage = lazy(() => import('pages/FavoritePage/FavoritePage'));
const ShoppingListPage = lazy(() =>
  import('pages/ShoppingListPage/ShoppingListPage')
);
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
const RecipePage = lazy(() => import('pages/RecipePage/RecipePage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) return;
    console.log('refresh');
    dispatch(refreshUser());
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate to="/main" />} />
          <Route
            path="/main"
            element={
              <PrivateRoute component={MainPage} redirectTo={'/welcome'} />
            }
          />
          <Route path="categories" element={<CategoriesLayout />}>
            <Route path="" element={<Navigate to="/categories/beef" />} />
            <Route
              path=":categoryName"
              element={
                <PrivateRoute
                  component={CategoryPage}
                  redirectTo={'/welcome'}
                />
              }
            />
          </Route>
          <Route
            path="add"
            element={
              <PrivateRoute
                component={AddRecipesPage}
                redirectTo={'/welcome'}
              />
            }
          />
          <Route
            path="my"
            element={
              <PrivateRoute component={MyRecipesPage} redirectTo={'/welcome'} />
            }
          />
          <Route
            path="favorite"
            element={
              <PrivateRoute component={FavoritePage} redirectTo={'/welcome'} />
            }
          />
          <Route
            path="recipe/:recipeId"
            element={
              <PrivateRoute component={RecipePage} redirectTo={'/welcome'} />
            }
          />
          <Route
            path="shopping-list"
            element={
              <PrivateRoute
                component={ShoppingListPage}
                redirectTo={'/welcome'}
              />
            }
          />
          <Route
            path="search"
            element={
              <PrivateRoute component={SearchPage} redirectTo={'/welcome'} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route
          path="/welcome"
          element={
            <RestrictedRoute component={WelcomePage} redirectTo={'/main'} />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute component={SigninPage} redirectTo={'/main'} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo={'/main'} />
          }
        />
      </Routes>
      <ToastContainer
        position="top-center"
        reverseOrder={false}
        autoClose={2000}
      />
    </Suspense>
  );
};
