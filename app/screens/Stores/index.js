import React, {useEffect, useCallback, useState} from 'react';
import {Text, SafeAreaView, Platform, PermissionsAndroid} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MakerIcon from '../../assets/user_location.png';

const STORES = [
  {latitude: 10.772836685180664, longitude: 106.772836685180664},
  {latitude: 10.772836685180664, longitude: 106.772836685180663},
  {latitude: 10.772836685180664, longitude: 106.772836685180661},
  {latitude: 10.772836685180664, longitude: 106.772836685180651},
];

const StoreScreen = () => {
  const [userLocation, setUserLocation] = useState({
    latitude: 10.772836685180664,
    longitude: 106.6690902709961,
  });
  useEffect(() => {
    if (Platform.OS === 'ios') {
      geolocation();
    } else if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Please active your location !',
          message: 'For fetch location store',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      )
        .then(granted => {
          console.log(granted);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            geolocation();
            console.log('You can use the location');
          } else {
            console.log('Location permission denied');
          }
        })
        .catch(err => console.log('PermissionsAndroid'));
    }
  }, []);
  const geolocation = useCallback(() => {
    Geolocation.watchPosition(
      info => {
        console.log(info);
        setUserLocation({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });
      },
      error => {
        console.log(error);
      },
      {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Store Screen</Text>
      {userLocation && (
        <MapView
          style={{flex: 1}}
          provider={PROVIDER_GOOGLE}
          zoomControlEnabled
          zoomEnabled
          minZoomLevel={15}
          initialRegion={{
            ...userLocation,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {STORES.map((item, index) => {
            return (
              <Marker
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}
                image={require('../../assets/user_location.png')}
              />
            );
          })}
        </MapView>
      )}
    </SafeAreaView>
  );
};

export default StoreScreen;
