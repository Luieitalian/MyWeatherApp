import { StyleSheet } from 'react-native';
import LightTheme from './themes';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: LightTheme.colors.primary,
    paddingTop: 10,
    paddingBottom: 30,
    shadowRadius: 20,
    shadowColor: 'black',
  },
  infoGroup: {
    flex: 1,
    gap: 5,
  },
  upperBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Barlow-SemiBold',
    color: LightTheme.colors.background,
  },
  date: {
    fontSize: 17,
    fontFamily: 'Barlow-Regular',
    color: LightTheme.colors.greyedText,
  },
  temperature: {
    fontSize: 190,
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
    fontSize: 150,
    right: -55,
    color: LightTheme.colors.whiteText,
    textShadowColor: '#666666',
    textShadowRadius: 10,
  },
  iconButton: {
    margin: 0,
  },
  conditionTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
  },
  conditionText: {
    fontSize: 17,
    fontFamily: 'Barlow-Regular',
    color: LightTheme.colors.whiteText,
    letterSpacing: -0.4,
  },
  weatherIcon: {
    paddingTop: 4,
  },
});

export default styles;
