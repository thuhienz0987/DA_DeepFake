import React, {useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';
import { color,FONT_FAMILY,scale } from '../../untils/constants';
import {IMG_Logo} from '../../assets/images';
import { useNavigation } from '@react-navigation/native';


const UserManual = () => {
  const translateY = useRef(new Animated.Value(scale(50))).current;
  const navigation = useNavigation<any>();

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textHead}>User Manual</Text>
      <Animated.View style={[styles.bottomFrame, {transform: [{translateY}]}]}>
        <View style={styles.line}></View>

        <View style={styles.headLine}>
          <Image source={IMG_Logo} style={styles.image}></Image>
          <Text style={styles.textHeadLine}>DEFAKE</Text>
        </View>
        <Text style={styles.bottomFrameText}>
          Your user manual content here
        </Text>
        <Text style={styles.bottomFrameText}>
          Your user manual content here
        </Text>
        <Text style={styles.bottomFrameText}>
          Your user manual content here
        </Text>
        <Text style={styles.bottomFrameText}>
          Your user manual content here
        </Text>
        <Text style={styles.bottomFrameText}>
          Your user manual content here
        </Text>
        <Text style={styles.bottomFrameText}>
          Your user manual content here
        </Text>

        <TouchableOpacity style={styles.viewButton} onPress={()=>navigation.goBack()}>
          <Text style={styles.textButton}>Close</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

export default UserManual;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.ChineseBlack,
    alignItems: 'center',
  },
  textHead: {

    color: color.White,
    fontSize: 24,
    fontFamily: FONT_FAMILY.PoppinsSemiBold,
    marginVertical: scale(20),
  },
  bottomFrame: {
    width: '100%',
    height: '100%',
    backgroundColor: color.DarkGunmetal,
    borderRadius: 30,
    alignItems: 'center',
  },
  line: {
    marginVertical: scale(30),
    backgroundColor: color.White,
    height: scale(3),
    width: scale(30),
    alignItems: 'flex-start',
  },

  headLine: {
    marginVertical: scale(20),
    width: '100%',
    height: scale(50),
    flexDirection: 'row',
    paddingLeft: scale(30),
    alignItems: 'center',
  },
  image: {
    width: scale(45),
    height: scale(45),
  },
  textHeadLine: {
    marginTop: scale(10),
    alignSelf: 'center',
    marginLeft: scale(20),
    fontFamily: FONT_FAMILY.PoppinsSemiBold,
    fontSize: 20,
    color: color.White,
  },
  bottomFrameText: {
    color: color.White,
    fontSize: 13,
    fontFamily: FONT_FAMILY.PoppinsThin,
  },
  viewButton: {
    position: 'absolute',
    top: '80%',
    left: '75%',
    backgroundColor: color.LightSilver,
    width: scale(77),
    height: scale(34),
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: color.Black,
    fontSize: 14,
    fontFamily: FONT_FAMILY.PoppinsSemiBold,
  },
});
