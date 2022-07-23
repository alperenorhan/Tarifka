import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const Detail = ({Meal, route}) => {
  const {strMeal} = route.params;
  const {error, data, loading} = useFetch(
    Config.API_URL + `search.php?s=${strMeal}`,
  );

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: data.meals[0].strMealThumb}}
        />
        <View style={styles.inner_container}>
          <Text style={styles.title}>{data.meals[0].strMeal}</Text>
          <Text style={styles.area}>{data.meals[0].strArea}</Text>
          <Text style={styles.instructions}>
            {data.meals[0].strInstructions}
          </Text>
          <View style={styles.button_container}>
            <TouchableOpacity style={styles.button_inner_container}>
              <Text
                style={styles.button_text}
                onPress={() => Linking.openURL(data.meals[0].strYoutube)}>
                Watch on Youtube!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;
