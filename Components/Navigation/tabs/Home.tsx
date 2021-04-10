import React from 'react';

import Search from '../../Search';
import Film from '../../Film/index';
import Provider from '../../Provider';

function HomeScreen(): any {
	return (
		<Provider>
			<Search />
			<Film />
		</Provider>
	);
}

export default HomeScreen;
