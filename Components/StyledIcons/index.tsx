import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

interface PropsStyledIcon {
  name: string,
  size: number,
  color: string,
  onPress?: any,
  style?: any,
};

function StyledIcon({name, size, color, onPress, style}: PropsStyledIcon): any {
  return (
    <Icon
      name={name}
      size={size}
      color={color}
      onPress={onPress}
      style={style}
    />
  );
}

export default StyledIcon;
