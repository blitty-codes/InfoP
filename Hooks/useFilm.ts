import { useState, useEffect } from "react";
import { rapidApiKey } from '../env';
import IFilmData from '../Interface/IFilmData';
var axios = require("axios").default;

function useFilm(nameFilm: string) {
  const [film, setFilm] = useState<IFilmData[]>();
  let films: IFilmData[] = new Array(0);

  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/auto-complete",
      params: { q: nameFilm },
      headers: {
        "x-rapidapi-key": rapidApiKey,
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    };

    if (nameFilm != '') {
      axios.request(options).then(function (response: any) {
        response.data.d.forEach((film: any) => {
          films.push(
            {
              image: {
                height: 0 ?? film.i.height,
                width: 0 ?? film.i.width,
                imageURL: null ?? film.i.imageUrl,
              },
              id: film.id,
              title: film.l,
              rank: null ?? film.rank,
              authors: '' ?? film.s,
              year: null ?? film.y,
            }
          )
        });
        setFilm(films);
        console.log(response.data.d);
      }).catch(function (error: string) {
        console.error(error);
      });
    }
  }, [nameFilm]);

  return film;
}

export default useFilm
