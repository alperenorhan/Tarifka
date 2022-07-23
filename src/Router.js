import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesPage"
          component={Categories}
          options={{
            headerTintColor: '#ffa500',
            title: 'Kategoriler',
            headerTitleStyle: {color: '#ffa500'},
          }}
        />
        <Stack.Screen
          name="MealsPage"
          component={Meals}
          options={{
            headerTintColor: '#ffa500',
            title: 'Yemekler',
            headerTitleStyle: {color: '#ffa500'},
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            headerTintColor: '#ffa500',
            title: 'Yemek Tarifi',
            headerTitleStyle: {color: '#ffa500'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
