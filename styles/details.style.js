import { StyleSheet } from 'react-native';
import LightTheme from './themes';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  littleGroup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 25,
    gap: 25,
  },
  forecastContainer: {
    flex: 1,
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#0000000b',
    padding: 25,
  },
});

export default styles;
