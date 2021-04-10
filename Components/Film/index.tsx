import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { FilmContext } from '../Provider';

import useFilm from '../../Hooks/useFilm';

function Film(): any {
  const [titleFilm, setTitleFilm] = useContext(FilmContext);
  const info: any = useFilm(titleFilm);

  return (
    <View>
      {
        info != null && info.d.map((film: any) => (
          <View key={film.id}>
            <Text>{film.l}</Text>
            <Text>{film.rank}</Text>
            <Text>{film.y}</Text>
          </View>
        ))
      }
    </View>
  );
}

export default Film;
