import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import { FilmContext } from '../Provider';
import Constants from 'expo-constants';

import useFilm from '../../Hooks/useFilm';
import { IFilmData } from '../../Interface/IFilmData';
import StyledIcon from '../StyledIcons';

const style = StyleSheet.create({
  container: {
    borderWidth: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    width: "min-content",
    backgroundColor: "silver"
  },
  scrollContainer: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollViewContainer: {
    // backgroundColor: "pink",
    marginHorizontal: 20,
  },
  tinyLogo: {
    margin: "auto",
    width: 200,
    height: 250,
  },
  allText: {
    margin: "auto",
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: "center",
  },
  description: {
    padding: 10,
  },
  decor: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  }
});

function Film(): any {
  const [titleFilm, setTitleFilm] = useContext(FilmContext);
  const [starRated, setStarRated] = useState("staro");
  const info: (IFilmData[] | undefined) = useFilm(titleFilm);

  return (
    <SafeAreaView style={style.scrollContainer}>
      <ScrollView style={style.scrollViewContainer}>
        {
          info != undefined && info.map((film: IFilmData) => (
            <View style={style.container} key={film.id}>
              <Image style={style.tinyLogo} source={{ uri: film.image.imageURL, }} />
              <StyledIcon name={starRated} size={36} style={{ width: "fit-content", position: 'absolute', right: 2 }} color="gold" onPress={() => { setStarRated((starRated == "star") ? "staro" : "star") }} />
              <View style={style.allText}>
                <Text style={style.title} >{film.title}</Text>
                <View style={style.description}>
                  <View>
                    <Text style={style.decor} >Rating:</Text>
                    <Text>{film.rank}</Text>
                  </View>
                  <View>
                    <Text style={style.decor}>Authors:</Text>
                    <Text>{film.authors}</Text>
                  </View>
                  <View>
                    <Text style={style.decor}>Year:</Text>
                    <Text>{film.year}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
}

export default Film;
