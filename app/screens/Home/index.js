import React, {useEffect, useState} from 'react';
import {Animated, Image, SafeAreaView, Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import HeaderComponent from '../../components/Header';
import {actFetchCategoriest} from '../../redux/actions';
import {styles} from './style';
import {PRODUCTS} from './temp_product';

const HomeScreen = props => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(-200));
  const categoryCollections = useSelector(
    state => state.category.categoryCollections,
  );

  useEffect(() => {
    dispatch(actFetchCategoriest());
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start();

    Animated.spring(slideAnim, {
      toValue: 0,
      duration: 2000,
      friction: 1,
      tension: 1,
    }).start();
  }, [dispatch]);

  const handleChangeCategory = id => {
    setSelectedCategory(id);
  };
  return (
    <SafeAreaView>
      <HeaderComponent title="Discover" />
      <View style={styles.categoryContainer}>
        <FlatList
          data={categoryCollections}
          keyExtractor={item => item.id}
          horizontal
          renderItem={({item, index}) => {
            const isSelected = item.id === selectedCategory;

            const categoryNameStyle = isSelected
              ? {...styles.categoryName, ...styles.active}
              : styles.categoryName;

            return (
              <TouchableOpacity
                onPress={() => handleChangeCategory(item.id)}
                style={styles.categoryItem}>
                <Text style={categoryNameStyle}>{item.category}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View>
        <FlatList
          data={PRODUCTS}
          keyExtractor={item => item.id}
          horizontal
          renderItem={({item}) => (
            <Animated.View
              style={{
                ...styles.productContainer,
                opacity: 1,
                transform: [{translateY: slideAnim}],
              }}>
              <View style={styles.productInfo}>
                <Text style={styles.productCate}>
                  {item.categories[0].category}
                </Text>
                <Text style={styles.productName}>
                  {item.name
                    .toLowerCase()
                    .replace(item.categories[0].category.toLowerCase(), '')
                    .trim()}
                </Text>
                <Text style={styles.productPrice}>${item.price}</Text>
              </View>
              <Image source={{uri: item.image}} style={styles.productImg} />
              {/* <Icon name="hearto" style={styles.iconHeart} /> */}
            </Animated.View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
