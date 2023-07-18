import React, { useContext, useState } from 'react';
import { View, Text, } from 'react-native';
import styles from '../styles/header.style';
import { IconButton, Menu, Surface } from 'react-native-paper';
import LightTheme from '../styles/themes';
import { apiKeyContext } from '../contexts/apiKeyContext';



const WEATHER_ICONS = {
  Sunny: 'white-balance-sunny',
  PartlyCloudy: 'weather-partly-cloudy',
  Cloudy: 'weather-cloudy',
  Snowy: 'weather-snowy-heavy',
  Rainy: 'weather-rainy',
  Clear: 'white-balance-sunny',
}

type HeaderProps = {
  location: string
}

function Header(props: HeaderProps) {
  const [settingsVisible, setSettingsVisible] = useState(false);

  const apikey = useContext(apiKeyContext);
  const openMenu = () => setSettingsVisible(true);
  const closeMenu = () => setSettingsVisible(false);

  return (
    <Surface elevation={3}>
      <View style={styles.container}>
        <View style={styles.upperBox}>
          <View style={styles.infoGroup}>
            <Text style={styles.title}>{props.location}</Text>
            <Text style={styles.date}>{'9:00 PM Sept 8'}</Text>
          </View>
          <Menu onDismiss={closeMenu} anchor={<IconButton onPress={openMenu} theme={LightTheme} style={styles.iconButton} size={28} icon='dots-vertical' mode='contained' />} visible={settingsVisible}>
            <Menu.Item leadingIcon='arrow-left' title='Close' onPress={closeMenu}></Menu.Item>
          </Menu>
        </View>
        <View style={styles.tempContainer}>
          <View>
            <Text style={styles.temperature}>{'30'}</Text>
            <Text style={styles.degree}>{'°'}</Text>
          </View>
        </View>
        <View style={styles.conditionTextContainer}>
          <Text style={styles.conditionText}>Sunny</Text>
          <IconButton iconColor='white' style={styles.weatherIcon} icon={WEATHER_ICONS.Sunny}></IconButton>
        </View>
      </View>
    </Surface>
  );
}

export default Header;
