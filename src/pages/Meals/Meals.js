import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './Meals.style';
import MealCard from '../../components/MealCard';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const Meals = ({route, navigation}) => {
  const {strCategory} = route.params;
  const {data, loading, error} = useFetch(
    Config.API_URL + `filter.php?c=${strCategory}`,
  );

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  const handleFoodSelect = strMeal => {
    navigation.navigate('DetailPage', {strMeal});
  };

  const renderMeals = ({item}) => (
    <MealCard
      foodItem={item}
      onPressFunction={() => handleFoodSelect(item.strMeal)}
    />
  );

  return (
    <View>
      <FlatList data={data.meals} renderItem={renderMeals} />
    </View>
  );
};

export default Meals;
