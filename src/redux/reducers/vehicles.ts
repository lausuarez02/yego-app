import { createAction, createReducer } from '@reduxjs/toolkit';
import { Vehicle, VehicleAction } from '../../../static/types/vehicles';

type VehiclesState = {
  vehicles: Vehicle[];
}

type setVehiclesPayload = {
  vehicles: Vehicle[];
}

const setVehicles = createAction<setVehiclesPayload>(VehicleAction.SET_VEHICLES);

const initialState: VehiclesState = {
  vehicles: [],
};

/* eslint-disable no-param-reassign */

const vehiclesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setVehicles, (state, action) => {
      state.vehicles = action.payload.vehicles;
    })
});


export default vehiclesReducer;
