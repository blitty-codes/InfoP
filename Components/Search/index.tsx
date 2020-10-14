import React from 'react';
import { TextInput, View } from 'react-native';

import StyledIcon from '../StyledIcons';
import Style from './bar/styles';

function Search(): any {
  const [value, onChangeText] = React.useState('Placeholder');

  const someFunc = (text: string): any => {
    alert(text)
  }

  return (
    <View style={Style.container}>
      <TextInput
        style={Style.textInput}
        value={value}
        // onKeyPress={someFunc(value)}
        onChangeText={text => onChangeText(text)}
      />
      <StyledIcon
        name="search1"
        size={30}
        color="tomato"
        onPress={() => {
          someFunc(value)
        }}
      />
    </View>
  );
}

export default Search;
