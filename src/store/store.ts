import { configureStore } from '@reduxjs/toolkit';
import { TravelApi } from '@utils/api/fetch-travelAdvisor-data'; 
import { TravelInfoApi } from '@utils/api/fetch-tarvelCountryInfo-data'; 
import locationReducer from '@features/location/locationSlice'

const store = configureStore({
  reducer: {
    [TravelApi.reducerPath]: TravelApi.reducer,
    [TravelInfoApi.reducerPath]: TravelInfoApi.reducer,
    location: locationReducer
  },
  middleware: (getDefaultMiddleware: any) => 
    getDefaultMiddleware()
      .concat(TravelApi.middleware)
      .concat(TravelInfoApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export default store