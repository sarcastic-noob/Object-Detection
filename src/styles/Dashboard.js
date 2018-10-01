import {
  StyleSheet,
} from 'react-native';
import {
  auto,
  flexSize,
  colors,
  statusBar
} from './Base';

var styles = StyleSheet.create({
  statusBarBackground: statusBar,
  menuBar: {
    flex: flexSize.flex1
  },
  header: {
    height: auto.height
  },
  scroll: {
    marginTop: 0,
    marginBottom: 0
  },
  background: { 
    flex: 1, 
    backgroundColor: colors.background 
  }
});

module.exports = styles;
