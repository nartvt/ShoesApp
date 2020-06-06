import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  categoryContainer: {
    marginTop: 20,
  },
  categoryItem: {
    marginHorizontal: 15,
  },
  categoryName: {
    fontSize: 17,
  },
  active: {
    color: 'red',
  },
  productContainer: {
    backgroundColor: '#517ad5',
    borderRadius: 15,
    width: 220,
    height: 300,
    marginRight: 50,
  },
  productInfo: {
    padding: 20,
  },
  productCate: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  productName: {},
  productPrice: {},
  productImg: {
    width: '120%',
    height: 120,
    transform: [{rotate: '-30deg'}],
  },
  iconHeart: {},
});
