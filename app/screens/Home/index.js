import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import FeatureProductItem from '../../components/FeatureProductItem';
import HeaderComponent from '../../components/Header';
import {actFetchCategoriest, actGetProductById} from '../../redux/actions';
import {PRODUCTS} from './data';
import {styles} from './style';

const HomeScreen = props => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);
  // const [fadeAnim] = useState(new Animated.Value(0));
  // const [slideAnim] = useState(new Animated.Value(-200));
  const [currentItemOnview, setCurrentItemOnview] = useState(0);
  const categoryCollections = useSelector(
    state => state.category.categoryCollections,
  );

  const productSelected = useSelector(state => state.product.productCurrent);

  useEffect(() => {
    dispatch(actFetchCategoriest());
  }, [dispatch]);

  const handleChangeCategory = id => {
    setSelectedCategory(id);
    dispatch(actGetProductById(id));
  };
  const handleChange = useCallback(params => {
    // console.log(params.changed);
    setCurrentItemOnview(params.changed[0].index);
  }, []);
  const viewabilityConfig = {
    waitForInteraction: true,
    viewAreaCoveragePercentThreshold: 80,
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
          viewabilityConfig={viewabilityConfig}
          onViewableItemsChanged={handleChange}
          renderItem={({item, index}) => (
            <FeatureProductItem
              item={item}
              isCurrent={index === currentItemOnview}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
