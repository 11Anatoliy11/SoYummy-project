import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router';
import SharedLayout from 'pages/SharedLayout/SharedLayout';
import { PublicRoute, RestrictedRoute } from './utils';
import { lazy } from 'react';
import { NotFound } from './NotFound/NotFound';
import CategoriesLayout from 'pages/CategoriesLayout/CategoriesLayout';

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

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="/main" />} />
        <Route
          path="main"
          element={
            <RestrictedRoute component={MainPage} redirectTo={'/welcome'} />
          }
        />
        <Route
          path="categories"
          element={
            <>
              <Navigate to="/categories/beef" replace />
              <RestrictedRoute
                component={CategoriesLayout}
                redirectTo={'/welcome'}
              />
            </>
          }
        >
          <Route
            path=":categoryName"
            element={
              <RestrictedRoute
                component={CategoryPage}
                redirectTo={'/welcome'}
              />
            }
          />
        </Route>
        <Route
          path="add"
          element={
            <RestrictedRoute
              component={AddRecipesPage}
              redirectTo={'/welcome'}
            />
          }
        />
        <Route
          path="my"
          element={
            <RestrictedRoute
              component={MyRecipesPage}
              redirectTo={'/welcome'}
            />
          }
        />
        <Route
          path="favorite"
          element={
            <RestrictedRoute component={FavoritePage} redirectTo={'/welcome'} />
          }
        />
        <Route
          path="shopping-list"
          element={
            <RestrictedRoute
              component={ShoppingListPage}
              redirectTo={'/welcome'}
            />
          }
        />
        <Route
          path="search"
          element={
            <RestrictedRoute component={SearchPage} redirectTo={'/welcome'} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route
        path="/welcome"
        element={<PublicRoute component={WelcomePage} redirectTo={'/main'} />}
      />
      <Route
        path="/signin"
        element={<PublicRoute component={SigninPage} redirectTo={'/main'} />}
      />
      <Route
        path="/register"
        element={<PublicRoute component={RegisterPage} redirectTo={'/main'} />}
      />
    </Routes>
  );
};
