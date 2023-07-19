import React, { useContext, useEffect, useState } from 'react';
import { View, Text, } from 'react-native';
import styles from '../styles/header.style';
import { IconButton, Menu, Surface } from 'react-native-paper';
import LightTheme from '../styles/themes';
import { apiKeyContext } from '../contexts/apiKeyContext';
import DateTime from './DateTime';
import Geolocation from '@react-native-community/geolocation';

const WEATHER_ICONS: { [index: string]: any } = {
  "Sunny": 'white-balance-sunny',
  "PartlyCloudy": 'weather-partly-cloudy',
  "Cloudy": 'weather-cloudy',
  "Snowy": 'weather-snowy-heavy',
  "Rainy": 'weather-rainy',
  "Clear": 'white-balance-sunny',
}

function Header({ navigation }: any) {
  const getCoords = () => {
    Geolocation.getCurrentPosition(info => {
      setCoords(() => `${info.coords.latitude},${info.coords.longitude}`);
    }, error => {
      console.log(JSON.stringify(error));
    });
  }


  const [settingsVisible, setSettingsVisible] = useState(false);
  const [coords, setCoords] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [temperature, setTemperature] = useState<string | null>(null);
  const [condition, setCondition] = useState<string | null>(null);
  const openMenu = () => setSettingsVisible(true);
  const closeMenu = () => setSettingsVisible(false);

  const apikey = useContext(apiKeyContext);

  const getDetails = async () => {
    const API_URL = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${coords}`
    const res = await fetch(API_URL);
    const data = await res.json();
    setLocation(data.location.name);
    setTemperature(data.current.temp_c);
    setCondition(data.current.condition.text);
  }

  useEffect(() => {
    getCoords();
    getDetails();
    console.log('coordinates: ', coords);
  }, [coords])

  return (
    <Surface elevation={3}>
      <View style={styles.container}>
        <View style={styles.upperBox}>
          <View style={styles.infoGroup}>
            <Text style={styles.title}>{location}</Text>
            <DateTime style={styles}></DateTime>
          </View>
          <Menu onDismiss={closeMenu} anchor={<IconButton onPress={openMenu} theme={LightTheme} style={styles.iconButton} size={28} icon='dots-vertical' mode='contained' />} visible={settingsVisible}>
            <Menu.Item leadingIcon='arrow-left' title='Close' onPress={closeMenu}></Menu.Item>
            <Menu.Item leadingIcon='cog-outline' title='Settings' onPress={() => { navigation.navigate('Settings'); closeMenu() }}></Menu.Item>
          </Menu>
        </View>
        <View style={styles.tempContainer}>
          <View>
            <Text style={styles.temperature}>{temperature}</Text>
            <Text style={styles.degree}>{'°'}</Text>
          </View>
        </View>
        <View style={styles.conditionTextContainer}>
          <Text style={styles.conditionText}>{condition}</Text>
          <IconButton iconColor='white' style={styles.weatherIcon} icon={WEATHER_ICONS[`${condition}`]}></IconButton>
        </View>
      </View>
    </Surface>
  );
}

export default Header;
