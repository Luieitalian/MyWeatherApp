import React, { useContext, useEffect, useState } from 'react'
import { View } from 'react-native';
import styles from '../styles/details.style';
import LittleDetail from './LittleDetail';
import Forecast from './Forecast';
import Geolocation from '@react-native-community/geolocation';
import { apiKeyContext } from '../contexts/apiKeyContext';

function Details() {
  const getCoords = () => {
    Geolocation.getCurrentPosition(info => {
      setCoords(() => `${info.coords.latitude},${info.coords.longitude}`);
    }, error => {
      console.log(JSON.stringify(error));
    });
  }

  const [coords, setCoords] = useState<string | null>(null);
  const [feellike, setFeellike] = useState<string>('');
  const [wind, setWind] = useState<string>('');
  const [windDir, setWindDir] = useState<string>('');
  const [humidity, setHumidity] = useState<string>('');
  const [visibility, setVisibility] = useState<string>('');
  const [uvIndex, setUvIndex] = useState<string>('');

  const apikey = useContext(apiKeyContext);

  const getDetails = async () => {
    const API_URL = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${coords}`
    const res = await fetch(API_URL);
    const data = await res.json();
    setFeellike(data.current.feelslike_c);
    setWind(data.current.wind_kph);
    setWindDir(data.current.wind_dir);
    setHumidity(data.current.humidity);
    setVisibility(data.current.vis_km);
    setUvIndex(data.current.uv);
  }

  useEffect(() => {
    getCoords();
    getDetails();
  }, [coords])


  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <View style={styles.littleGroup}>
          <LittleDetail isIcon={false} iconText='°C' title='Feel like' info={feellike + ' °'} />
          <LittleDetail isIcon={true} iconSize={20} icon='weather-windy' title='Wind' info={wind + ' km/h'} />
          <LittleDetail isIcon={true} iconSize={24} icon='compass-outline' title='Wind Direction' info={windDir} />
        </View>
        <View style={styles.littleGroup}>
          <LittleDetail isIcon={true} iconSize={24} icon='water-outline' title='Humidity' info={humidity + '%'} />
          <LittleDetail isIcon={true} iconSize={20} icon='eye-outline' title='Visibility' info={visibility + ' km'} />
          <LittleDetail isIcon={true} iconSize={24} icon='weather-sunny' title='UV index' info={uvIndex + '/10'} />
        </View>
      </View>
      <View style={styles.forecastContainer}>
        <Forecast />
      </View>
    </View>
  );
}

export default Details;
