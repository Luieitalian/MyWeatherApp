import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from '../styles/forecast.style';



function Forecast() {
  return (
    <View style={styles.container}>
      <Text style={styles.predictionText}>Prediction</Text>
      <View style={styles.forecastBold}>
        <Text style={styles.forecastBoldText}>Today</Text>
        <View style={styles.forecastGroup}>
          <Text style={styles.forecastBoldText}>30°</Text>
          <Text style={styles.forecastBoldText}>Sunny</Text>
        </View>
      </View>
      <View style={styles.forecast}>
        <Text style={styles.forecastText}>Tomorrow</Text>
        <View style={styles.forecastGroup}>
          <Text style={styles.forecastText}>28°</Text>
          <Text style={styles.forecastText}>Sunny</Text>
        </View>
      </View>
      <View style={styles.forecast}>
        <Text style={styles.forecastText}>Sept 11</Text>
        <View style={styles.forecastGroup}>
          <Text style={styles.forecastText}>27°</Text>
          <Text style={styles.forecastText}>Clear</Text>
        </View>
      </View>
    </View>
  )
}

export default Forecast