import React, { useContext } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { FilmContext } from '../Provider';
import CardFilm from './Card/index';

import useFilm from '../../Hooks/useFilm';
import IFilmData from '../../Interface/IFilmData';
import IFilmUseState from '../../Interface/IFilmUseState';

import scrollViewStyle from '../../style/scollViewStyle';
import filmCardStyle from '../../style/filmCardStyle';

function Film(): any {
  const { titleFilm }: IFilmUseState = useContext(FilmContext);
  const info: (IFilmData[] | undefined) = useFilm(titleFilm);

  console.log(info);

  return (
    <SafeAreaView style={scrollViewStyle.scrollContainer}>
      <ScrollView style={scrollViewStyle.scrollViewContainer}>
        {
          info != undefined && info.map((film: IFilmData) => (
            <View style={filmCardStyle.container} key={film.id}>
              <CardFilm filmResult={film} />
            </View>
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
}

export default Film;
