import React from 'react';
import { View } from 'react-native';

import Search from '../../Search';

function HomeScreen(): any {
	return (
		<View style={{ flex: 1, alignItems: 'center' }}>
			<Search />
		</View>
	);
}

export default HomeScreen;
