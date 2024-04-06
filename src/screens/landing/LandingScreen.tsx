import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { color, FONT_FAMILY } from '../../untils/constants';

import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const circleRadius = width / 2;

const LandingScreen = () => {
  const navigation = useNavigation<any>();
  console.log(navigation)

  return (
    <TouchableWithoutFeedback onPress={()=>navigation.push('Onboard')}>
      <LinearGradient
        colors={[color.Black, color.DeepAquamarine, color.SeaFoamGreen]}
        style={styles.container}>
        <View
          style={[styles.circle, { width: circleRadius, height: circleRadius }]}>
          <View style={styles.circleContent}>
            <Text style={styles.largeText}>DEFAKE</Text>
            <Text style={styles.smallText}>- DeepFake detect...!!!</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    borderRadius: circleRadius,
    backgroundColor: color.DarkGunmetal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContent: {
    // justifyContent: 'center',
  },
  largeText: {
    fontFamily: FONT_FAMILY.Peralta,
    fontSize: 20,
    color: color.White,
    textAlign: 'left',
  },
  smallText: {
    fontSize: 10,
    color: color.White,
    textAlign: 'right',
    fontFamily: FONT_FAMILY.PoppinsRegular,
  },
});
