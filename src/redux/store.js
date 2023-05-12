import { configureStore } from '@reduxjs/toolkit';
import favoriteRecipesReducer from './favoriteRecipes/favoriteRecipesSlice';

import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

export const store = configureStore({
    reducer: {
        favoriteRecipes: favoriteRecipesReducer,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
