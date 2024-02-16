import { RootState } from '../configureStore';

export const selectVehicles = (state: RootState) => state.rootReducer.vehicles;
export const selectClickedMarker = (state: RootState) => state.rootReducer.clickedMarker;
export const selectUserLocation = (state: RootState) => state.rootReducer.userLocation;
