import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import CategoryCard from '../../components/CategoryCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import styles from './Categories.style';

const Categories = ({navigation}) => {
  const {error, data, loading} = useFetch(Config.API_URL + 'categories.php');

  const renderMeals = ({item}) => (
    <CategoryCard
      categoryItem={item}
      onPressFunction={() => handleCategorySelect(item.strCategory)}
    />
  );
  const handleCategorySelect = strCategory => {
    navigation.navigate('MealsPage', {strCategory});
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error error={error} />;
  }
  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderMeals} />
    </View>
  );
};

export default Categories;
