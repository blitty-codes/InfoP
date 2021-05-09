import React, { useContext, useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";

import { FilmContext } from "../Provider";
import CardFilm from "./Card/index";

import useFilm from "../../Hooks/useFilm";
import useFavFilms from "../../Hooks/useFavFilms";

import IFilmData from "../../Interface/IFilmData";
import IFilmUseState from "../../Interface/IFilmUseState";

import scrollViewStyle from "../../style/scollViewStyle";
import filmCardStyle from "../../style/filmCardStyle";

function Film(): any {
  const { titleFilm }: IFilmUseState = useContext(FilmContext);
  const info: IFilmData[] | undefined = useFilm(titleFilm);
  const { favFilms, setFavFilms } = useFavFilms();

  console.log("===============");
  console.log(info);
  console.log(favFilms);
  console.log("===============");

  const checkFav = (filmId: string) => {
    let star = "staro";

    if (favFilms !== []) {
      let i = favFilms.length - 1;
      console.log(i);
      while (star != "star" && i >= 0) {
        // I can do a binary search and sorting when is star
        if (favFilms[i--] === filmId) star = "star";
      }
    }

    return star;
  };

  return (
    <SafeAreaView style={scrollViewStyle.scrollContainer}>
      <ScrollView style={scrollViewStyle.scrollViewContainer}>
        {info != undefined &&
          info.map((film: IFilmData) => (
            <View style={filmCardStyle.container} key={film.id}>
              <CardFilm filmResult={film} star={checkFav(film.id)} favFilms={favFilms} setFavFilms={setFavFilms} />
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Film;
