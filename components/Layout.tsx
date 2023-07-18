import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from '../styles/layout.style';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode,
}

function Layout({ children }: LayoutProps) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {children}
      </ScrollView>
    </View >
  );
}

export default Layout;
