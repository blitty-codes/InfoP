import { useState, useEffect } from "react";
import { rapidApiKey } from '../env';
import { IFilmData } from '../Interface/IFilmData';
var axios = require("axios").default;

interface IFilm {
  name: string,
}

function useFilm(nameFilm: IFilm) {
  const [film, setFilm] = useState<IFilmData[]>();
  let films: IFilmData[] = new Array(0);

  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/auto-complete",
      params: { q: nameFilm.name },
      headers: {
        "x-rapidapi-key": rapidApiKey,
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    };

    if (nameFilm.name != '') {
      axios.request(options).then(function (response: any) {
        response.data.d.forEach((film: any) => {
          films.push(
            {
              image: {
                height: film.i.height,
                width: film.i.width,
                imageURL: film.i.imageUrl,
              },
              id: film.id,
              title: film.l,
              rank: film.rank,
              authors: film.s,
              year: film.y,
            }
          )
        });
        setFilm(films);
        // console.log(film);
      }).catch(function (error: string) {
        console.error(error);
      });
    }
  }, [nameFilm]);

  return film;
}

export default useFilm
