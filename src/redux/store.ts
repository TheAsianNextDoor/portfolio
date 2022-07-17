import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { rtkQueryErrorLogger } from './middleware';

import type { PreloadedState } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  /** App State Reducers */
  /** API Reducers */
});

const middleware = [rtkQueryErrorLogger];

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middleware],
    preloadedState,
  });
};

setupListeners(setupStore().dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
