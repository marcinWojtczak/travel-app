import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const travelAdvisorHeaders = {
  'x-rapidAPI-key': '3105332e11msh264d437b14b7e68p1e62d8jsnb3ffd57a961a',
  'x-rapidAPI-host': 'travel-advisor.p.rapidapi.com',
}

const baseUrl = 'https://travel-advisor.p.rapidapi.com';

const createRequest = (url: string) => ({ url, headers: travelAdvisorHeaders})


export const TravelApi = createApi({
  reducerPath: 'travelApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAttractions: builder.query({
      query: (coordinates, limit=10) => createRequest(`/attractions/list-in-boundary?bl_latitude=${coordinates.sw.lat}&tr_latitude=${coordinates.ne.lat}&bl_longitude=${coordinates.sw.lng}&tr_longitude=${coordinates.ne.lng}&limit=${limit}`),
    }),
  }),
});


export const { useGetAttractionsQuery } = TravelApi;
