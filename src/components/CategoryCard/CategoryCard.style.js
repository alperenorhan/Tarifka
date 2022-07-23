import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    margin: 5,
    padding: 5,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#eceff1',
    borderColor: '#8a8a8a',
  },
  title: {
    marginLeft: 10,
    fontSize: 30,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
