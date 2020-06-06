Redux have 3 main part
1. Action
2. Reducer
3. Store: 
	- moi du lieu tren store duoc quan ly boi reducer 
	- bat ki hanh dong chinh sua du lieu tren store deu phai thong qua reducer
	- moi store co 1 cai root reducer, quan ly tat ca moi thu trong store
	- moi khi muon chinh sua tren store thi goi 1 action len root reducer, no se phan phoi cho tung reducer xu ly

# install navigation
  yarn add @react-navigation/native --save
# Animation for navigation
  yarn add react-native-reanimated react-native-gesture-handler 
  react-native-screens react-native-safe-area-context 
  @react-native-community/masked-view --save

must be: 
  1. npm install --save react-native-vector-icons	
  2. npx react-native link react-native-vector-icons

react-native elements
1. yarn add react-native-elements --save

Styled-component

# navigation to another screen, CartButton
1. yarn add @react-navigation/compat --save

# bottom tabs:
  + yarn add @react-navigation/bottom-tabs --save
# HOC

disable header navigation of bottom tabs or manual custom header 

dock middleware because middleware not destroy if user navigate to another page different with truyen thong, 
se bi huy neu roi khoi trang cos goi request len server
Platform: check device is android or ios, and check version of os
Example: 
    + console.log(Platform.OS);
    + console.log(Platform.Version);

1. Traditional
2. React Hook
3. React-native image picker
4. Add movie

useEffect: didmount, unmount, didupdate

lodash
moment.js

## From React Native 0.60 and higher, linking is automatic. So you don't need to run react-native link.
-- react native slash screen