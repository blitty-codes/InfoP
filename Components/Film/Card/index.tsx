import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import IFilmData from '../../../Interface/IFilmData';
import StyledIcon from "../../StyledIcons";
import filmCardStyle from "../../../style/filmCardStyle";

function CardFilm (props: any): any {
  const film: IFilmData = props.filmResult;
  const [starRated, setStarRated] = useState("staro");

  return (
    <View>
      <Image style={filmCardStyle.tinyLogo} source={{ uri: film.image.imageURL, }} />
      <StyledIcon name={starRated} size={36} style={{ width: "fit-content", position: 'absolute', right: 2 }} color="gold" onPress={() => { setStarRated((starRated == "star") ? "staro" : "star") }} />
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
