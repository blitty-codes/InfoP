import React, { createContext, useState } from 'react';
import { View } from 'react-native';

export default ({ children }: any) =>{
    const [state, setState] = useState({ name: '' });
    return (
      <FilmContext.Provider value={[state, setState]}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          {children}
        </View>
      </FilmContext.Provider>  
    );
}

export const FilmContext = createContext([{ name: '' }]);
