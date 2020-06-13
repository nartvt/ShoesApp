import React, { useEffect, useState } from 'react';
import { Animated, Image, Text, View } from 'react-native';
import { styles } from './styles';

const FeatureProductItem = props => {
  const {item, isCurrent} = props;
  const [flipAnim] = useState(new Animated.Value(0));
  const [widthAnim] = useState(new Animated.Value(220));
  const [heightAnim] = useState(new Animated.Value(300));

  useEffect(() => {
    if (isCurrent) {
      //make animation
      Animated.timing(widthAnim, {
        toValue: 300,
        duration: 300,
      }).start();

      Animated.timing(heightAnim, {
        toValue: 330,
        duration: 300,
      }).start();

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
    } else {
      Animated.timing(widthAnim, {
        toValue: 220,
        duration: 300,
      }).start();

      Animated.timing(heightAnim, {
        toValue: 300,
        duration: 300,
      }).start();
    }
  }, [isCurrent]);

  return (
    <Animated.View
      style={{
        ...styles.productContainer,
        transform: [
          {
            rotateY: flipAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '80deg'],
            }),
          },
        ],
        width: widthAnim,
        height: heightAnim,
        // opacity: fadeAnim,
        // transform: [{translateY: slideAnim}],
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
