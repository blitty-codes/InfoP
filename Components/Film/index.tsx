import React, { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { FilmContext } from '../Provider';
import Constants from 'expo-constants';

import useFilm from '../../Hooks/useFilm';
import { IFilmData } from '../../Interface/IFilmData';

const style = StyleSheet.create({
  container: {
    backgroundColor: "cyan",
    borderColor: "darksalmon",
    borderWidth: 5,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  scrollContainer: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollViewContainer: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  }
});

function Film(): any {
  const [titleFilm, setTitleFilm] = useContext(FilmContext);
  const info: (IFilmData[] | undefined) = useFilm(titleFilm);

  return (
    <SafeAreaView style={style.scrollContainer}>
      <ScrollView style={style.scrollViewContainer}>
        {
          info != undefined && info.map((film: IFilmData) => (
            <View style={style.container} key={film.id}>
              <Text>Title: {film.title}</Text>
              <Text>Rating: {film.rank}</Text>
              <Text>Authors: {film.authors}</Text>
              <Text>Year: {film.year}</Text>
            </View>
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
}

export default Film;
