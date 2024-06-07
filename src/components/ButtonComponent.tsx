import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { color,FONT_FAMILY, scale } from '../untils/constants';


const {width, height} = Dimensions.get('window');

interface Props {
  text: string;
  widthButton: number;
  // marginLeft?: number;
  onPress: () => void;
}
export const ButtonComponent = (props: Props) => {
  // const {text} = props;
  return (
    <TouchableOpacity style={[styles.button, { width: props.widthButton ||scale(280) }]} onPress={props.onPress}>
      <LinearGradient
        colors={[color.DeepAquamarine, color.SeaFoamGreen]}
        style={styles.gradientButton}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // width: scale(160),
    height: scale(150),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center'
  },
  gradientButton: {
    width: '100%',
    height: scale(50),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: color.Black,
    // fontFamily: FONT_FAMILY.PoppinsSemiBold,
  },
});
