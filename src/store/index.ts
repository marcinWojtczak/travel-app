import { configureStore } from '@reduxjs/toolkit';
import { TravelApi } from '@utils/api/fetch-travelAdvisor-data'; 

const store = configureStore({
  reducer: {
    [TravelApi.reducerPath]: TravelApi.reducer,
  },
  middleware: (getDefaultMiddleware: any) => 
    getDefaultMiddleware()
      .concat(TravelApi.middleware)
});

export default store
export type RootState = ReturnType<typeof store.getState>
