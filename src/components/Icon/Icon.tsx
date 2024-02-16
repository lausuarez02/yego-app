import React from 'react';
import { Image, ImageStyle } from 'react-native';

import {ASSET_IMAGES} from '../../../static/icons/IconJson'

type IconProps = {
    name: string,
    type?: string,
    style?: ImageStyle
}

const Icon: React.FC<IconProps> = ({name, style}) => {

    const defaultWidth = 50;
    const defaultHeight = 50;

    const customWidth = style?.width || defaultWidth;
    const customHeight = style?.height || defaultHeight;
    
  return( <Image resizeMode="contain" style={{width: customWidth, height: customHeight, ...(style as ImageStyle) }} source={ASSET_IMAGES[name].uri} />);

};

export default Icon;
