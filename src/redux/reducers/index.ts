// reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import vehiclesReducer from './vehicles';
import clickedMarkerReducer from './clickedMarker';
import userLocationReducer from './userLocation'

const rootReducer = combineReducers({
  vehicles: vehiclesReducer,
  clickedMarker: clickedMarkerReducer,
  userLocation: userLocationReducer
});

export default rootReducer;