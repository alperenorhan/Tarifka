import {StyleSheet, Dimensions} from 'react-native';

const deviceSizeW = Dimensions.get('window').width;
const deviceSizeH = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: deviceSizeW,
    height: deviceSizeH / 3,
  },
  inner_container: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#a5292a',
  },
  area: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#a5292a',
  },
  instructions: {
    marginTop: 5,
  },
  button_container: {
    margin: 10,
    alignItems: 'center',
  },
  button_inner_container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: deviceSizeW - 20,
    padding: 10,
    borderRadius: 10,
  },
  button_text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});
