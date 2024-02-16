import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserLocationState = {
    lat:number,
    long: number
}

const initialState: UserLocationState = {
    lat: null,
    long: null
};

const userLocationSlice = createSlice({
  name: 'userLocation',
  initialState,
  reducers: {
    setUserLocation: (state, action: PayloadAction<{ lat: number; long: number }>) => {
      state.lat = action.payload.lat;
      state.long = action.payload.long;
    },
  },
});

export const { setUserLocation } = userLocationSlice.actions;
export default userLocationSlice.reducer;