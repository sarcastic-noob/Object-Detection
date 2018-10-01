import {
  StyleSheet,
  Platform,
} from 'react-native';
import {
  flexSize,
  text,
  colors,
  margin
} from './Base';

var styles = StyleSheet.create({
  faviconStyle: {
    height: 20,
    width: 20,
    marginRight: 8
  },
  error: text,
  text: text,
  activityIndicator: {
    flex: flexSize.flex1,
    padding: 20
  },
  parentView: {
    marginBottom: margin.marginBottom, 
    marginTop: margin.marginTop, 
    backgroundColor: colors.white
  }
});

module.exports = styles;
