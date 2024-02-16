import React, { useEffect,useState } from 'react';
import {
  StyleSheet, TouchableOpacity
} from 'react-native';
//components
import MapboxGL, {MarkerView} from '@rnmapbox/maps';
import Icon from '../Icon';
//utils
import MapHandler from './Map.handler';
import { getDistanceInMeters } from 'src/utils';
import { useDispatch } from "react-redux";
import { setUserLocation  } from "src/redux/reducers/userLocation"
import { Vehicle } from 'static/types/vehicles';

export type MapProps = {
  data:Vehicle[];
}

const Map: React.FC<MapProps> = ({data}) => {
  const [userLastLocation, setUserLastLocation] = useState(null);
  const [scooterColorStatus, setScooterColorStatus] = useState(null)

  const dispatch = useDispatch()
  useEffect(() => {
      // Fetch the user's location when the component mounts
      MapboxGL.locationManager.getLastKnownLocation().then(location => {
        setUserLastLocation(location);
        dispatch(setUserLocation({lat: location.coords.latitude,long: location.coords.longitude}))
      });
  }, [userLastLocation]);

  const { getScooterColorStatus, handleMarkerClick } = MapHandler();

  const handleMarkerOnClick = item => {
    handleMarkerClick({
      name: item.name,
      battery: item.battery,
      location: getDistanceInMeters(userLastLocation.coords.latitude, userLastLocation.coords.longitude, item.lat, item.lng)
    });
    setScooterColorStatus(item);
  };

  return(
  <MapboxGL.MapView
    style={styles.map}
    scaleBarEnabled={false}
    gestureSettings={{
      pitchEnabled: false,
    }}
    attributionEnabled={false}
    compassEnabled={false}
    logoEnabled={false}
  >
    <MapboxGL.UserLocation visible={true}/>
      {data.map(item => {
      const scooterStatus = `scooter-${getScooterColorStatus(scooterColorStatus === item ? 'selected' : item.status)}`
        return (
                <MapboxGL.MarkerView
                key={item.id}
                id="pointAnnotation"
                allowOverlap={true}
                coordinate={[item.lat, item.lng]}
                >
                  {/** only can be selected in case of being AVAILABLE */}
                 <TouchableOpacity onPress={item.status === 0 ? () => handleMarkerOnClick(item) : null}>
                  <Icon name={scooterStatus}/>
                </TouchableOpacity> 
              </MapboxGL.MarkerView>
        )})}
  </MapboxGL.MapView>
)}

const styles = StyleSheet.create({
  map: {
    flex:1
  } 
});

export default Map;
