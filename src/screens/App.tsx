import React, { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
//network
import fetchMainRoute from 'src/api/mainRoute';
import Color from '../../static/types/colors';
// components
import { Map, ScooterPanel, ButtonCustom } from 'src/components';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';
// utils
import { findClosestVehicle } from 'src/utils';
// types
import {MapProps} from 'src/components/Map/Map';
import { Vehicle } from 'static/types/vehicles';
// redux
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/configureStore'


type ClosesVehicle = {
  closestVehicle:Vehicle,
  distance:number
}
const App: React.FC = () => {
  const [closestVehicleState, setClosestVehicleState] = useState<ClosesVehicle>();
  const { lat, long } = useSelector((state: RootState) => state.rootReducer.userLocation);
  const [mappedScooterMakerData, setMappedScooterMakerData] = useState<MapProps['data']>([]);
  
  useEffect(() => {
    const fetchDataAndMap = async () => {
      try {
        // Fetch data from the API
        const data = await fetchMainRoute();
        setMappedScooterMakerData(data);
        const closestVehicleData = findClosestVehicle(lat, long, mappedScooterMakerData);
        setClosestVehicleState(closestVehicleData);
      } catch (error) {
        console.error(error)
      }
    };

    fetchDataAndMap();
  }, []);

  return(
    <>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Map data={mappedScooterMakerData}/>
            {closestVehicleState && <ScooterPanel closestVehicle={closestVehicleState.closestVehicle} distance={closestVehicleState.distance}/>}
          </View>
        </View>
      </SafeAreaView>
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Color.WHITE,
  },
  sectionContainer: {
    height: '100%',
    width: '100%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Color.BLACK,
  },
});

export default App;
