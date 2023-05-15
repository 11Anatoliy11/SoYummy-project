import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import favoriteRecipesReducer from './favoriteRecipes/favoriteRecipesSlice';

import { searchReducer } from './search/searchSlice';
import { authReducer } from './auth/auth-slice';
import { recipeReducer } from './recipes/recipe-slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ["user"],
};
const recipePresistConfig = {
  key: 'recipes',
  storage,
  // whitelist: []
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    recipes: persistReducer(recipePresistConfig, recipeReducer),
    favoriteRecipes: favoriteRecipesReducer,
    search: searchReducer
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);