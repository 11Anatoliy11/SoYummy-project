// import { Route, Routes } from 'react-router';
// import { Navigate } from 'react-router';
// import SharedLayout from 'pages/SharedLayout/SharedLayout';
// import { PublicRoute, RestrictedRoute } from './utils';
// import { lazy } from 'react';
// import { NotFound } from './NotFound/NotFound';
// import CategoriesLayout from 'pages/CategoriesLayout/CategoriesLayout';
import RecipePage from 'pages/RecipePage/RecipePage';

// const MainPage = lazy(() => import('pages/MainPage/MainPage'));
// const SigninPage = lazy(() => import('pages/SigninPage/SigninPage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
// const CategoryPage = lazy(() => import('pages/CategoryPage/CategoryPage'));
// const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
// const AddRecipesPage = lazy(() =>
//   import('pages/AddRecipesPage/AddRecipesPage')
// );
// const MyRecipesPage = lazy(() => import('pages/MyRecipesPage/MyRecipesPage'));
// const FavoritePage = lazy(() => import('pages/FavoritePage/FavoritePage'));
// const ShoppingListPage = lazy(() =>
//   import('pages/ShoppingListPage/ShoppingListPage')
// );
// const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));

export const App = () => {
  return (
    <div>
      <RecipePage />
    </div>
  );
};
