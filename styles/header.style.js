import { StyleSheet } from 'react-native';
import LightTheme from './themes';
const styles = StyleSheet.create({
  infoGroup: {
    flex: 1,
    gap: 5,
  },
  upperBox: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  container: {
    flex: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: LightTheme.colors.primary,
  },
  button: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Barlow-Regular',
    color: LightTheme.colors.background,
  },
  date: {
    fontSize: 17,
    fontFamily: 'Barlow-Regular',
    color: LightTheme.colors.greyedText,
  },
  temperature: {
    fontSize: 170,
    fontFamily: 'Barlow-Regular',
    color: LightTheme.colors.whiteText,
    letterSpacing: -10,
    textShadowColor: '#666666',
    textShadowRadius: 10,
  },
  tempContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  degree: {
    position: 'absolute',
    fontSize: 170,
    right: -55,
    color: LightTheme.colors.whiteText,
    textShadowColor: '#666666',
    textShadowRadius: 10,
  },
});

export default styles;
