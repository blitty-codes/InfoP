import { useState, useEffect } from "react";
import { rapidApiKey } from '../env'
var axios = require("axios").default;

interface IFilm {
  name: string,
}

function useFilm(nameFilm: IFilm) {
  const [film, setFilm] = useState(null);
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
        setFilm(response.data);
      }).catch(function (error: string) {
        console.error(error);
      });
    }
  }, [nameFilm]);

  return film;
}

export default useFilm
