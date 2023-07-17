import React from 'react';
import { View, Text, } from 'react-native';
import styles from '../styles/header.style';
import { IconButton } from 'react-native-paper';


function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.upperBox}>
        <View style={styles.infoGroup}>
          <Text style={styles.title}>{'LONDON'}</Text>
          <Text style={styles.date}>{'9:00 PM Sept 8'}</Text>
        </View>
        <IconButton size={32} icon='dots-vertical' mode='contained' />
      </View>
      <View style={styles.tempContainer}>
        <View>
          <Text style={styles.temperature}>{'30'}</Text>
          <Text style={styles.degree}>{'°'}</Text>
        </View>
      </View>
    </View>
  );
}

export default Header;
