import { useDispatch } from "react-redux";
import { setClickedMarker } from "src/redux/reducers/clickedMarker";

const MapHandler = () => {
    const getScooterColorStatus = (status: number | 'selected'):string => {
        switch(status) {
            case 0:
                return "orange";
            case 1:
                return "black";
            case 'selected':
                return "green";
            case 3:
                return "red";
            default:
                return "red";
        }
    } 
    
    const dispatch = useDispatch()
    
    const handleMarkerClick = ({name, battery, location}) => {
        dispatch(setClickedMarker({ name: name, battery: battery, location: location }));
      };
    return {
        getScooterColorStatus,
        handleMarkerClick
    }
}

export default MapHandler;