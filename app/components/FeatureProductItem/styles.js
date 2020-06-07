import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: '#517ad5',
    borderRadius: 15,
    width: 220,
    height: 300,
    marginRight: 50,
  },
  productInfo: {
    padding: 20,
    height: 120,
  },
  productCate: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  productName: {
    fontSize: 25,
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  productPrice: {
    color: '#ffffff',
  },
  productImg: {
    width: '120%',
    height: 120,
    transform: [{rotate: '-30deg'}],
  },
});
