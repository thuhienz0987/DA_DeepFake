import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { color,FONT_FAMILY,scale } from '../untils/constants';

import { IC_Camera,IC_Image } from '../assets/icons';

const {width, height} = Dimensions.get('window');

interface Props {
  text: string;
  iconType?: string;
  marginLeft?: number;
  onPress: () => void; // Define onPress as a function that doesn't take any arguments and returns void
}
export const SquareButton = (props: Props) => {
  const renderIcon = () => {
    switch (props.iconType) {
      case 'IC_Image':
        return <IC_Image width={25} height={25} />;
      case 'IC_Camera':
        return <IC_Camera width={25} height={25} />;
      default:
        return <IC_Camera width={25} height={25} />;
    }
  };

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.button, {marginLeft: props.marginLeft}]}>
      <LinearGradient
        colors={[color.DeepAquamarine, color.SeaFoamGreen]}
        style={styles.gradientButton}>
        <Text style={styles.buttonText}>{props.text}</Text>
        {renderIcon()}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf:'center',
    justifyContent:'center',
    marginTop: scale(20),
    flexDirection: 'row',
    width: width,
    height: scale(50),
  },
  gradientButton: {
    flexDirection: 'row',
    width: width * 0.7,
    height: scale(50),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    paddingHorizontal: scale(10),
    fontSize: 20,
    color: color.Black,
    fontFamily: FONT_FAMILY.PoppinsSemiBold,
  },
});
