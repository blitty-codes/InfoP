import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { localStorageKey } from "../env";

function ffavFilms () {
  const [favFilms, setFavFilms] = useState<string[]>([]);

	useEffect(() => {
		console.log("--- useEffect ---");

		(async () => {
			await AsyncStorage.getItem(localStorageKey).then((value) => {
				if (value !== null)
					setFavFilms(JSON.parse(value));
			});
		})();

		console.log(favFilms);
		console.log("--- End ---");
	}, []);

	return { favFilms: favFilms, setFavFilms: setFavFilms };
}

export default ffavFilms;
