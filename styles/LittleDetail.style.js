import { StyleSheet } from 'react-native';
import LightTheme from './themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconButton: {
    backgroundColor: LightTheme.colors.buttonBackground,
    width: 50,
    height: 50,
    borderRadius: 100,
    margin: 0,
  },
  button: {
    backgroundColor: LightTheme.colors.buttonBackground,
    borderRadius: 100,
    width: 50,
    height: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Barlow-SemiBold',
    color: LightTheme.colors.blackText,
  },
  infoGroup: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: 10,
    color: LightTheme.colors.grey,
    fontFamily: 'Barlow-SemiBold',
  },
  info: {
    fontSize: 16,
    color: LightTheme.colors.blackText,
    fontFamily: 'Barlow-SemiBold',
  },
});

export default styles;
