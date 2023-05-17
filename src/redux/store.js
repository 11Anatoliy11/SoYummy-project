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
import { ownRecipesReducer } from './ownRecipes/own-slice';
import { shopRecipesReducer } from './shoppingRecipes/shopping-slice';

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
  whitelist: ["user","isLoggedIn"],
};
const recipePersistConfig = {
  key: 'recipeCommon',
  storage,
  // whitelist: []
}
const favoritePersistConfig = {
  key: 'favoriteRecipes',
  storage,
  // whitelist: []
};

const ownPersistConfig = {
  key: 'ownRecipes',
  storage,
  // whitelist: []
};
const shoppingPersistConfig = {
  key: 'shoppingRecipes',
  storage,
  // whitelist: []
};
const searchPersistConfig = {
  key: 'searchRecipes',
  storage,
  // whitelist: []
};


export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    recipeCommon:persistReducer(recipePersistConfig,recipeReducer),
    ownRecipes: persistReducer(ownPersistConfig,ownRecipesReducer ),
    favoriteRecipes: persistReducer(favoritePersistConfig,favoriteRecipesReducer),
    search: persistReducer(searchPersistConfig,searchReducer),
    shoppingRecipes: persistReducer(shoppingPersistConfig,shopRecipesReducer)
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);