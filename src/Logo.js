import React from 'react';
import {  Image } from 'react-native';
import styles from './styles/Logo';

export default class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./338928.jpg')}
        style={styles.logo}
      />
    );
  }
}
