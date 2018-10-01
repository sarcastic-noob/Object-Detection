import {
  StyleSheet
} from 'react-native';
import {
  paddings,
  auto,
  text
} from './Base';

var styles = StyleSheet.create({
  parentView: {
    flex: 1,
    padding: paddings.leftPadding,
    height: 120
  },
  thumbStyle: {
    width: auto.width,
    height: auto.height
  },
  autoHeight: {
    height: auto.height
  },
  text: {
    fontSize: text.fontSize,
    color: text.color,
    alignSelf: text.alignSelf
  }
});
module.exports = styles;
