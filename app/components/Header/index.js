import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HeaderComponent = props => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Icon name="search1" style={styles.btnIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Icon name="bells" style={styles.btnIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderComponent;
