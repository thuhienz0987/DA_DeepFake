import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { color, scale } from '../untils/constants';

interface Props {
  text: string;
  widthButton: number;
  selected: boolean;
  onPress: () => void;
}

export const CategoriesComponent = (props: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: props.widthButton || scale(280),
          backgroundColor: props.selected ? color.DeepAquamarine : color.LightSilver,
        },
      ]}
      onPress={props.onPress}>
      <LinearGradient
        colors={[props.selected ? color.DeepAquamarine : color.LightSilver, props.selected ? color.DeepAquamarine : color.LightSilver]}
        style={styles.gradientButton}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: scale(30),
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  gradientButton: {
    width: '100%',
    height: scale(30),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: color.Black,
  },
});
