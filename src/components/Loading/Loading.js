import React from 'react';
import {Text, View} from 'react-native';
import Lottie from 'lottie-react-native';

const Loading = () => {
  return <Lottie source={require('../../assets/loading.json')} autoPlay loop />;
};

export default Loading;
