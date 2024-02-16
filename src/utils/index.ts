import { Vehicle } from "static/types/vehicles";

const deg2rad = (deg: number): number => {
    return deg * (Math.PI / 180);
}

export const getDistanceInKm = (lat1: number, lon1: number, lat2: number, lon2: number): number  => {
    console.log("test fycjing distances",lat1,lon1, lat2, lon2 )
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return Math.round(distance);
}

export const getDistanceInMeters = (lat1: number, lon1: number, lat2: number, lon2: number): number  => {
    const R = 6371000; // Radius of the Earth in meters
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in meters
    // Round the distance to the nearest integer
    return Math.round(distance);
}

export const findClosestVehicle = (userLat: number, userLon: number, scooterMakerData: Vehicle[] ) => {
    if (scooterMakerData.length === 0) {
        return null; // Return null if the vehicles array is empty
    }

    let closestVehicle = scooterMakerData[0]; // Initialize with the first vehicle
    let minDistance = getDistanceInKm(userLat, userLon, closestVehicle.lat, closestVehicle.lng);
    let distance;
    // Iterate over the rest of the vehicles and update the closest vehicle if a closer one is found
    for (let i = 1; i < scooterMakerData.length; i++) {
         distance = getDistanceInKm(userLat, userLon, scooterMakerData[i].lat, scooterMakerData[i].lng);
        if (distance < minDistance) {
            minDistance = distance;
            closestVehicle = scooterMakerData[i];
        }
    }

    return {closestVehicle, distance};
}