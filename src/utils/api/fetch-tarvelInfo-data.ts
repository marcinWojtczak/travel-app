import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";;

const travelInfoHeaders = {
    'x-rapidapi-key': '3105332e11msh264d437b14b7e68p1e62d8jsnb3ffd57a961a',
    'x-rapidapi-host': 'travel-info-api.p.rapidapi.com'
}

const baseUrl = 'https://travel-info-api.p.rapidapi.com'

const createRequest = (url: string) => ({url, headers: travelInfoHeaders })

export const TravelInfoApi = createApi({
    reducerPath: 'travelInfo',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCountyDetails: builder.query({
            query: (country: string) => createRequest(`/country?country=${country}`)
        })
    })
})

export const { useGetCountyDetailsQuery } = TravelInfoApi;