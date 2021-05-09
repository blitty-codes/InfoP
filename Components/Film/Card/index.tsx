import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
// https://react-native-async-storage.github.io/async-storage/docs/api
import AsyncStorage from '@react-native-async-storage/async-storage';

import { localStorageKey } from '../../../env';

import IFilmData from '../../../Interface/IFilmData';
import StyledIcon from "../../StyledIcons";
import filmCardStyle from "../../../style/filmCardStyle";

function CardFilm (props: any): any {
  const film: IFilmData = props.filmResult;
  const [starRated, setStarRated] = useState(props.star);

  // not working
  const star = async () => {
    let favFilms = props.favFilms;
    let newFavFilms: string[] = [];

    if (starRated == "star") {
      newFavFilms = favFilms.filter((id: string) => {
        return id != film.id;
      });
      props.setFavFilms(newFavFilms);
      setStarRated("staro");
    } else {
      newFavFilms = newFavFilms.concat(favFilms, [film.id]);
      props.setFavFilms(newFavFilms);
      setStarRated("star");
    }

    await AsyncStorage.setItem(localStorageKey, JSON.stringify(newFavFilms))
  }

  return (
    <View>
      <Image style={filmCardStyle.tinyLogo} source={{ uri: film.image.imageURL, }} />
      <StyledIcon
        name={starRated}
        size={36}
        style={filmCardStyle.starStyle}
        color="gold"
        onPress={star}
      />
      <View style={filmCardStyle.allText}>
        <Text style={filmCardStyle.title} >{film.title}</Text>
        <View style={filmCardStyle.description}>
          <View>
            <Text style={filmCardStyle.decor} >Rating:</Text>
            <Text>{film.rank}</Text>
          </View>
          <View>
            <Text style={filmCardStyle.decor}>Authors:</Text>
            <Text>{film.authors}</Text>
          </View>
          <View>
            <Text style={filmCardStyle.decor}>Year:</Text>
            <Text>{film.year}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default CardFilm;
