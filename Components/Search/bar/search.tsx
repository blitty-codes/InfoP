import React, { useContext, useEffect, useState } from 'react';

import { TextInput, View } from 'react-native';

import Style from './styles';
import { MAIN_COLOR } from '../../../config/style-conf'

import { FilmContext } from "../../Provider/index";
import StyledIcon from '../../StyledIcons';

import IFilmUseState from '../../../Interface/IFilmUseState';

function SearchEngine () : any {
  const [text, setText] = useState('Frozen');
  const { setTitleFilm }: IFilmUseState = useContext(FilmContext);

  useEffect(() => setText(text), [text]);

  return (
    <View
      style={Style.container}
    >
      <TextInput
        style={Style.textInput}
        value={text}
        // onKeyPress={someFunc(value)}
        onChangeText={text => setText(text)}
      />
      <StyledIcon
          name="search1"
          size={30}
          color={MAIN_COLOR}
          onPress={() => {
            setTitleFilm(text)
          }}
      />
    </View>
  );
}

export { SearchEngine };
