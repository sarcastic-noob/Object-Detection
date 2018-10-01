import {
  StyleSheet,
} from 'react-native';
import {
  text,
  flexSize,
  colors
} from './Base';

var styles = StyleSheet.create({
  error: text,
  text: text,
  activityIndicator: {
    flex: flexSize.flex1,
    padding: 20
  },
  background:{
    backgroundColor: colors.background
  }
});

module.exports = styles;
