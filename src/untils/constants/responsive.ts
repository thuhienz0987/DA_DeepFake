const designWidth = 379;
import {Dimensions} from 'react-native';

export function scale(number: number): number {
  let scaleNumber;
  const currentDeviceWidth = Dimensions.get('window').width;
  scaleNumber = (number / designWidth) * currentDeviceWidth;
  return scaleNumber;
}



