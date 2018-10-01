import {
  StyleSheet
} from 'react-native';
import {
  flexSize, 
  flexDirection,
  size50
} from './Base';

var styles = StyleSheet.create({
  rowStyle: {
    flex: flexSize.flex1,
    flexDirection: flexDirection.row
  },
  lastRowStyle: {
    flex: flexSize.flex1,
    flexDirection: flexDirection.row,
    width: size50.width
  },
  container: {
    flex: flexSize.flex1,
    flexDirection: flexDirection.col
  }
});
module.exports = styles;
