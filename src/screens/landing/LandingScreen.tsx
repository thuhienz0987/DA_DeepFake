import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { color, FONT_FAMILY } from '../../untils/constants';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const circleRadius = width / 2;

const LandingScreen = () => {
  const navigation = useNavigation<any>();
  const [countdown, setCountdown] = useState(3);
  const [navigate, setNavigate] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown === 1) {
          clearInterval(interval);
          setNavigate(true);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (navigate) {
      navigation.push('Onboard');
    }
  }, [navigate, navigation]);

  return (
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
      <View style={styles.skipButton}>
        <Text style={styles.countdownText}>Skip in {countdown}s</Text>
      </View>
    </LinearGradient>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeText: {
    fontFamily: FONT_FAMILY.Peralta,
    fontSize: 20,
    color: color.White,
    textAlign: 'center',
  },
  smallText: {
    fontSize: 10,
    color: color.White,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.PoppinsRegular,
  },
  countdownText: {
    fontSize: 14,
    color: color.White,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.PoppinsRegular,
  },
  skipButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: color.DeepAquamarine,
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,  // Adjust the width to fit the countdown text
    height: 40, // Adjust the height to fit the countdown text
  },
});
