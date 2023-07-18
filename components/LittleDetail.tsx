import React from 'react'
import { View, Text } from 'react-native';
import { IconButton, Button, Surface } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/src/components/Icon';
import styles from '../styles/littleDetail.style';
import LightTheme from '../styles/themes';

type LittleDetailProps = {
  icon?: IconSource | any;
  title: string;
  info: string;
  iconSize?: number;
  iconText?: string;
  isIcon: boolean;
}

function LittleDetail(props: LittleDetailProps) {

  return (
    props.isIcon ? (
      <View style={styles.container}>
        <IconButton size={props.iconSize} iconColor={LightTheme.colors.blackText} icon={props.icon} style={styles.iconButton}></IconButton>
        <View style={styles.infoGroup}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.info}>{props.info}</Text>
        </View>
      </View>
    )
      :
      <View style={styles.container}>
        <Surface style={styles.button} mode='flat'>
          <Text style={styles.buttonText}>{props.iconText}</Text>
        </Surface>
        <View style={styles.infoGroup}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.info}>{props.info}</Text>
        </View>
      </View>
  );


}

export default LittleDetail;
