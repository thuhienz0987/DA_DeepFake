import {
  SafeAreaView,
  StyleSheet,
  PermissionsAndroid,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {IMG_Logo, IMG_BulkHead,IMG_Logo2} from '../../assets/images';
import { color,FONT_FAMILY, scale } from '../../untils/constants';
import { SquareButton,ButtonComponent } from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {
  launchCamera,
  launchImageLibrary,
  MediaType,
} from 'react-native-image-picker';

import { useNavigation } from '@react-navigation/native';


const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const defaultImg =
    'https://raw.githubusercontent.com/mowshon/age-and-gender/master/example/result.jpg';
  const [cameraPhoto, setCameraPhoto] = useState(defaultImg);

  let options = {
    savePhotos: true,
    mediaType: 'photo' as MediaType,
  };

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      if (
        result &&
        result.assets &&
        result.assets.length > 0 &&
        !result.didCancel
      ) {
        setCameraPhoto(result.assets[0].uri || defaultImg);
      } else {
        console.error('Camera operation failed or was canceled');
      }
    }
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    if (!result.didCancel) {
      // Check if result.assets exists and has length > 0, then set the cameraPhoto state
      setCameraPhoto(result.assets?.[0]?.uri || defaultImg);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewHead}>
        <Image source={IMG_Logo} style={styles.imageHead} />
        <Text style={styles.textHead}>DEFAKE</Text>
      </View>

      <View style={styles.viewButton}>
        <SquareButton
        iconType='IC_Image'
          text={'Open Gallery'}
          onPress={openGallery}
          marginLeft={scale(80)}
        />
        <SquareButton
        iconType='IC_Camera'
          text={'Open Camera'}
          onPress={openCamera}
          marginLeft={scale(40)}
        />
        <Image source={IMG_BulkHead} style={styles.bulkHeadImage} />
      </View>

      <View style={styles.viewDetect}>
        <LinearGradient
          colors={[color.DeepAquamarine, color.SeaFoamGreen]}
          style={styles.imageContainer}>
          <Image source={{uri: cameraPhoto}} style={styles.imageDetect} />
        </LinearGradient>
        <ButtonComponent text={'Detect'} widthButton={scale(140)}  onPress={()=>navigation.push('Home')}/>
      </View>

      <TouchableOpacity onPress={()=>navigation.push('UserManual')}
          style={[styles.circle, { width: scale(40), height: scale(40) }]}>
          <View style={styles.circleContent}>
            <Text style={styles.largeText}>?</Text>
            
          </View>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.ChineseBlack,
    flex: 1,
  },
  viewHead: {
    marginVertical: scale(20),
    width: '100%',
    height: scale(50),
    flexDirection: 'row',
    paddingLeft: scale(30),
    alignItems: 'center',
  },
  imageHead: {
    width: scale(45),
    height: scale(45),
  },
  textHead: {
    marginTop: scale(10),
    alignSelf: 'center',
    marginLeft: scale(20),
    fontFamily: FONT_FAMILY.PoppinsSemiBold,
    fontSize: 20,
    color: color.White,
  },
  viewButton: {
    width: '100%',
    height: height / 4,
  },
  bulkHeadImage: {
    width: '100%',
    height: scale(78),
  },
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 30,
    width: scale(270),
    height: scale(270),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageDetect: {
    width: scale(265),
    height: scale(265),
    borderRadius: 30,
  },
  viewDetect: {
    alignItems: 'center',
    marginTop: scale(50),
  },
  circle: {
    position:'absolute',
    marginTop: scale(320),
    marginLeft: scale(330),
    borderRadius: scale(40),
    backgroundColor: color.DeepAquamarine,
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
