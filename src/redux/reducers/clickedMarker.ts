import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ClickedMarkerState {
  name: string | null;
  battery: number | null;
  location: number | null
}

const initialState: ClickedMarkerState = {
  name: null,
  battery: null,
  location: null
};

const clickedMarkerSlice = createSlice({
  name: 'clickedMarker',
  initialState,
  reducers: {
    setClickedMarker: (state, action: PayloadAction<{ name: string; battery: number; location: number }>) => {
      state.name = action.payload.name;
      state.battery = action.payload.battery;
      state.location = action.payload.location;
    },
  },
});

export const { setClickedMarker } = clickedMarkerSlice.actions;
export default clickedMarkerSlice.reducer;