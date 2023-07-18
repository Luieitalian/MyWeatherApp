import { StyleSheet } from 'react-native';
import LightTheme from './themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  predictionText: {
    alignSelf: 'flex-start',
    color: LightTheme.colors.darkGrey,
    fontSize: 17,
    fontFamily: 'Barlow-SemiBold',
    marginBottom: 20,
  },
  forecast: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#1f87f00e',
    padding: 18,
  },
  forecastText: {
    fontSize: 16,
    fontFamily: 'Barlow-Regular',
    color: LightTheme.colors.blackText,
    letterSpacing: -0.4,
  },
  forecastBold: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#1f87f00e',
    backgroundColor: '#1f87f00e',
    padding: 18,
  },
  forecastBoldText: {
    letterSpacing: -0.4,
    fontSize: 16,
    fontFamily: 'Barlow-SemiBold',
    color: LightTheme.colors.blackText,
  },
  forecastGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
  },
});

export default styles;
