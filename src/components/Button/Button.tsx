import React from 'react';
import {
  Button,
  ButtonProps,
} from 'react-native';

const ButtonCustom:React.FC<ButtonProps> = ({ title, onPress }) => {
    return (
        <Button
          onPress={onPress}
          title={title}
        />
    );
  }
  
  export default ButtonCustom;