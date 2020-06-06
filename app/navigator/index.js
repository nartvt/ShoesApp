import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import FavoriteScreen from '../screens/Favourites';
import CartScreen from '../screens/Cart';
import ProfileScreen from '../screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import SignInScreen from '../screens/SignIn';
import ProductDetailScreen from '../screens/ProductDetail';
import CategoryScreen from '../screens/Category';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTab = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
      }}>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesignIcon name="home" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesignIcon name="hearto" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Home-a"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesignIcon name="aliwangwang" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesignIcon name="shoppingcart" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesignIcon name="user" size={25} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" component={BottomTab} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
