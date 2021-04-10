import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { COLOR_PRIMARY } from '../../config/style-conf';
import AntDesign from 'react-native-vector-icons/AntDesign';

import HomeScreen from './tabs/Home';
import AboutScreen from './tabs/About';
import FavFilmsScreen from './tabs/FavFilms';

const Tab = createBottomTabNavigator();

function Navigation(): any {
	return (
		<NavigationContainer>
			<Tab.Navigator
        screenOptions={({ route }: any) => ({
          tabBarIcon: ({ focused, color, size }: any) => {
            let iconName = '';

            if (route.name === 'Search') {
              iconName = 'search1';
            } else if (route.name === 'About') {
              iconName = focused ? 'infocirlce' : 'infocirlceo';
            } else if (route.name === 'Favourites') {
              iconName = focused ? 'star' : 'staro';
            }

            // You can return any component that you like here!
            return <AntDesign name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: COLOR_PRIMARY,
          inactiveTintColor: 'gray',
        }}
      >
				<Tab.Screen name="Search" component={HomeScreen} />
        <Tab.Screen name="Favourites" component={FavFilmsScreen} />
				<Tab.Screen name="About" component={AboutScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default Navigation;
