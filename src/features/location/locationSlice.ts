import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


 const googleApiKey = 'AIzaSyC9gBgsOK526RiisjBBOpCvXmslolP6_4Y'

export const fetchGeolocation = createAsyncThunk(
    'location/fetchGeolocation',
    async () => {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${googleApiKey}`)
        const countryData = await response.json()

        return {
            lat,
            lon,
            country: countryData
        }
    }
)

type LocationState = {
    lat: number | null;
    lon: number | null;
    country: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
  };

const initialState: LocationState = {
    lat: null,
    lon: null,
    country: null,
    status: 'idle',
}

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
         .addCase(fetchGeolocation.pending, (state: LocationState) => {
            state.status = 'loading'
         })
         .addCase(fetchGeolocation.fulfilled, (state: LocationState, action: PayloadAction<{ lat: number; lon: number; country: string | null }>) => {
            state.lat = action.payload.lat;
            state.lon = action.payload.lon;
            state.country = action.payload.country;
            state.status = 'succeeded';
         })
         .addCase(fetchGeolocation.rejected, (state: LocationState) => {
            state.status = 'failed'
         })
    }
})

export default locationSlice.reducer;