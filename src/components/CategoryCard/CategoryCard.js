import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({categoryItem, onPressFunction}) => {
  return (
    <TouchableWithoutFeedback onPress={onPressFunction}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: categoryItem.strCategoryThumb}}
        />
        <Text style={styles.title}>{categoryItem.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
