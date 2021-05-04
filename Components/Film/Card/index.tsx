import React from 'react';
import { View, Text } from 'react-native';

import { IFilmData } from '../../../Interface/IFilmData';

function CardFilm (props: any): any {
  const filmResult: IFilmData = props.filmResult;
  return (
    <View>
      <Text>{filmResult.title}</Text>
    </View>
  );
}

export default CardFilm;
