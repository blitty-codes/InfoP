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
              image: (film.hasOwnProperty('i')) ?
                {
                  height: film.i.height,
                  width: film.i.width,
                  imageURL: film.i.imageUrl,
                }
              :
                {
                  height: 0,
                  width: 0,
                  imageURL: '',
                },
              id: film.id,
              title: film.l,
              rank: null ?? film.rank,
              authors: null ?? film.s,
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
