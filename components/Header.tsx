import React, { useState } from 'react';
import { View, Text, } from 'react-native';
import styles from '../styles/header.style';
import { IconButton, MD3LightTheme, Menu } from 'react-native-paper';
import LightTheme from '../styles/themes';


function Header() {
  const [settingsVisible, setSettingsVisible] = useState(false);


  const openMenu = () => setSettingsVisible(true);
  const closeMenu = () => setSettingsVisible(false);

  return (
    <View style={styles.container}>
      <View style={styles.upperBox}>
        <View style={styles.infoGroup}>
          <Text style={styles.title}>{'LONDON'}</Text>
          <Text style={styles.date}>{'9:00 PM Sept 8'}</Text>
        </View>
        <Menu onDismiss={closeMenu} anchor={<IconButton onPress={openMenu} theme={LightTheme} style={styles.iconButton} size={32} icon='dots-vertical' mode='contained' />} visible={settingsVisible}>
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
      </View>
    </View>
  );
}

export default Header;
