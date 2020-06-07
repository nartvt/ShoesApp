import React, {useEffect, useState} from 'react';
import {Text, View, Animated, Image} from 'react-native';
import {styles} from './styles';

const FeatureProductItem = props => {
  const {item, isCurrent} = props;

  const [flipAnim] = useState(new Animated.Value(0));
  const [widthAnim] = useState(new Animated.Value(220));
  const [heightAnim] = useState(new Animated.Value(300));
  useEffect(() => {
    if (isCurrent) {
      // make animation
      Animated.timing(widthAnim, {
        toValue: 80,
        duration: 300,
      });
      Animated.timing(heightAnim, {
        toValue: 80,
        duration: 300,
      });

      Animated.sequence([
        Animated.timing(flipAnim, {
          toValue: 1,
          duration: 300,
        }),

        Animated.spring(flipAnim, {
          toValue: 0,
          duration: 300,
          friction: 1,
          tension: 1,
        }),
      ]).start();
    }
  }, [isCurrent, flipAnim, widthAnim, heightAnim]);
  return (
    <Animated.View
      style={{
        ...styles.productContainer,
        opacity: 1,
        transform: [
          {
            rotateY: flipAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 80],
            }),
          },
        ],
      }}>
      <View style={styles.productInfo}>
        <Text style={styles.productCate}>{item.categories[0].category}</Text>
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
  );
};

export default FeatureProductItem;
