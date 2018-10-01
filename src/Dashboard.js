import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import styles from './styles/Dashboard';
import LogoTitle from './Logo';

export default class Dashboard extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };
  render() {
    return (
      <View style={styles.background}>
        <View>
          <ScrollView style={[styles.scroll]}>
            <View>
              <Text> This the basic App</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
