import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/layout.style';

function Layout({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

export default Layout;
