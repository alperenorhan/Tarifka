import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './MealCard.style';

const MealCard = ({foodItem, onPressFunction}) => {
  return (
    <TouchableWithoutFeedback onPress={onPressFunction}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: foodItem.strMealThumb}} />
        <View style={styles.title_container}>
          <Text style={styles.title}>{foodItem.strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
