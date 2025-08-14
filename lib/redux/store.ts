import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiService } from './services/apiService';
import dashboardReducer from './features/dashboardSlice';
import transactionsReducer from './features/transactionsSlice';

// Define the root reducer
const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  transactions: transactionsReducer,
  [apiService.reducerPath]: apiService.reducer,
});

// Define root state type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;


export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiService.middleware),
    preloadedState,
  });
};

// Create the store
export const store = setupStore();

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
