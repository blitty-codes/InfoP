import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

interface PropsStyledIcon {
  name: string,
  size: number,
  color: string,
  onPress: any,
};

function StyledIcon({name, size, color, onPress}: PropsStyledIcon): any {
  return (
    <View>
      <Icon
        name={name}
        size={size}
        color={color}
        onPress={onPress}
      />
    </View>
  );
}

export default StyledIcon;
