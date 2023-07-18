import React, { ReactNode } from 'react'
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from '../styles/LittleDetailGroup.style';

type LittleDetailGroupProps = {
  children: ReactNode
}

function LittleDetailGroup(props: LittleDetailGroupProps) {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  )
}

export default LittleDetailGroup;
