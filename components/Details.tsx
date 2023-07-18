import React from 'react'
import { View } from 'react-native';
import styles from '../styles/details.style';
import LittleDetail from './LittleDetail';
import Forecast from './Forecast';

function Details() {
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <View style={styles.littleGroup}>
          <LittleDetail isIcon={false} iconText='°C' title='Feel like' info='16°' />
          <LittleDetail isIcon={true} iconSize={20} icon='weather-windy' title='Wind' info='16 km/h' />
          <LittleDetail isIcon={true} iconSize={20} icon='umbrella-outline' title='Precipitation' info='79%' />
        </View>
        <View style={styles.littleGroup}>
          <LittleDetail isIcon={true} iconSize={24} icon='water-outline' title='Humidity' info='80%' />
          <LittleDetail isIcon={true} iconSize={24} icon='weather-pouring' title='Chance of rain' info='87%' />
          <LittleDetail isIcon={true} iconSize={24} icon='weather-sunny' title='UV index' info='6/10' />
        </View>
      </View>
      <View style={styles.forecastContainer}>
        <Forecast />
      </View>
    </View>
  );
}

export default Details;
