import {
  Platform,
} from 'react-native';
export const size100 = {
  height: '100%',
  width: '100%'
};
export const size50 = {
  height: '50%',
  width: '50%'
};
export const position = {
  relative: 'relative'
};
export const paddings = {
  leftPadding: 5,
  rightPadding: 5
};
export const colors = {
  text: '#0A6C6C',
  background: '#DBDCDE',
  white: '#FFFFFF'
};
export const auto = {
  height: 'auto',
  width: 'auto'
};
export const text = {
  fontSize: 16,
  alignSelf: 'center',
  color: '#0A6C6C'
};
export const flexSize = {
  flex1: 1
};
export const flexDirection = {
  row: 'row',
  col: 'column'
};
export const shadow = {
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 3
  },
  shadowRadius: 5,
  shadowOpacity: 0.1
};
export const statusBar = {
  height: (Platform.OS === 'ios') ? 18 : 0,
  backgroundColor: 'white',
  position: position.relative
};

export const logo = {
  height: 50,
  width: 80,
};

export const margin = {
  marginBottom: 5, 
  marginTop: 5
}