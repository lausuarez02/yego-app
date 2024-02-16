
// components
import Icon from '../Icon';
import Panel from '../Panel';
import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';
// redux
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/configureStore'
// utils
import { getAmountOfBattery } from './ScooterPanel.helper';
//types
import { Vehicle } from '../../../static/types/vehicles';

export type ScooterPanelProps = {
    closestVehicle: Vehicle,
    distance: number
}

const ScooterPanel: React.FC<ScooterPanelProps> = ({closestVehicle, distance}) => { 
    const { name, battery, location } = useSelector((state: RootState) => state.rootReducer.clickedMarker);
    let iconBatteryName = getAmountOfBattery(battery ? battery : closestVehicle.battery)
return (
    <Panel>
      <View style={styles.panelScooterContainer}>
        <View style={styles.container}>
          <View style={styles.scooterIconStyle}>
            <Icon name='scooter' style={{ width: 120, height: 120 }} />
          </View>
            <View>
                <Text style={styles.titleText}>{ name ? name : closestVehicle.name}</Text>
                <View style={styles.batteryIconContainer}>
                  <Icon name={`battery-${iconBatteryName}`} style={{ width: 30, height: 30 }} />
                  <Text style={styles.batteryText}>{battery ? battery : closestVehicle.battery }%</Text>
                  <Icon name={"map"} style={{ width: 30, height: 30 }} />
                  <Text style={styles.batteryText}>{location ? location: distance}</Text>
                </View>
            </View>
        </View>
      </View>
    </Panel>
  );
};

const styles = StyleSheet.create({
    panelScooterContainer:{
        flex:2
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    scooterIconStyle:{
        marginRight: 50,
    },
    titleText: {
        marginBottom:10,
        fontSize: 25,
        fontWeight: 'bold',
    },
    batteryIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    batteryText: {
        marginLeft: 5,
    },
});

export default ScooterPanel;