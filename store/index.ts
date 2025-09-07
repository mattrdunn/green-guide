import { configureStore } from '@reduxjs/toolkit';
import { greenGuideApi } from './api/templateApi';

export const store = configureStore({
    reducer: {
        [greenGuideApi.reducerPath]: greenGuideApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(greenGuideApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
