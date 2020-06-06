import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  btn: {
    width: 40,
    height: 40,
    backgroundColor: '#808080',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    // neu man hinh hoac trong 1 hang co nhieu icon thi button khong bi thu lai, button size van la 40
    flexShrink: 0,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btnIcon: {
    fontSize: 18,
  },
});
