import React, { createContext, useState } from 'react';
import { View } from 'react-native';

import IFilmUseState from '../../Interface/IFilmUseState';

const p: IFilmUseState = {
  titleFilm: '',
  setTitleFilm: null,
}

export const FilmContext = createContext(p);

export default function Provider ({ children }: any) {
    const [titleFilm, setTitleFilm] = useState('');
    return (
      <FilmContext.Provider value={{titleFilm: titleFilm, setTitleFilm: setTitleFilm}}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          {children}
        </View>
      </FilmContext.Provider>
    );
}
