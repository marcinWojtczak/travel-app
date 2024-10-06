import { configureStore } from '@reduxjs/toolkit';
import { TravelApi } from '@utils/api/fetch-travelAdvisor-data'; 
import { TravelInfoApi } from '../utils/api/fetch-tarvelInfo-data'; 

const store = configureStore({
  reducer: {
    [TravelApi.reducerPath]: TravelApi.reducer,
    [TravelInfoApi.reducerPath]: TravelInfoApi.reducer,
  },
  middleware: (getDefaultMiddleware: any) => 
    getDefaultMiddleware()
      .concat(TravelApi.middleware)
      .concat(TravelInfoApi.middleware)
});

export default store
export type RootState = ReturnType<typeof store.getState>
