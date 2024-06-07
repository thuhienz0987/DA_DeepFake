import { SafeAreaView, StyleSheet, PermissionsAndroid, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { IMG_Logo, IMG_BulkHead } from '../../assets/images';
import { color, FONT_FAMILY, scale } from '../../untils/constants';
import { SquareButton, ButtonComponent, ResultComponent  } from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import { launchCamera, launchImageLibrary, MediaType } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import LoadingComponent from '../../components/LoadingComponent';
import ErrorComponent from '../../components/ErrorComponent';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation<any>();
    const defaultImg = 'https://raw.githubusercontent.com/mowshon/age-and-gender/master/example/result.jpg';
  const [cameraPhoto, setCameraPhoto] = useState(defaultImg);
  const [result, setResult] = useState('0');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const options = {
    savePhotos: true,
    mediaType: 'photo' as MediaType,
  };

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      if (result && result.assets && result.assets.length > 0 && !result.didCancel) {
        setCameraPhoto(result.assets[0].uri || defaultImg);
      } else {
        console.error('Camera operation failed or was canceled');
      }
    }
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    if (!result.didCancel) {
      setCameraPhoto(result.assets?.[0]?.uri || defaultImg);
    }
  };

  const handleSubmits = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('image', {
      name: 'image.png',
      uri: cameraPhoto,
      type: 'image/png',
    });

    try {
      const response = await axios.post('http://4.144.203.94:5000/api/method/average', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('success', response.data);
      if(response.data.fakeness >= 0.5){
        setResult('2')
      }else{
        setResult('1')
      }
      setLoading(false);
    } catch (err:any) {
      console.log(err)
      setError(true);
      setErrorMessage(err.message)
      setLoading(false);

    }
  };
  useEffect(() => {
    if (cameraPhoto !== defaultImg) {
      setResult('0');
    }
  }, [cameraPhoto]);

  return (
    <SafeAreaView style={styles.container}>
      {loading && <LoadingComponent visible={loading}/>}
      <ErrorComponent visible={error} message={errorMessage} onClose={() => {setErrorMessage(''), setError(false)}} />
      <View style={styles.viewHead}>
        <Image source={IMG_Logo} style={styles.imageHead} />
        <Text style={styles.textHead}>DEFAKE</Text>
      </View>

      <View style={styles.viewButton}>
        <SquareButton iconType='IC_Image' text={'Open Gallery'} onPress={openGallery} />
        <Image source={IMG_BulkHead} style={styles.bulkHeadImage} />
      </View>

      <View style={styles.viewDetect}>
        <LinearGradient colors={[color.DeepAquamarine, color.SeaFoamGreen]} style={styles.imageContainer}>
          <Image source={{ uri: cameraPhoto }} style={styles.imageDetect} />
        </LinearGradient>
        {result === '0' && <ButtonComponent text={'Detect'} widthButton={scale(140)} onPress={handleSubmits} />}
        {result !== '0' && <ResultComponent result={result} cameraPhoto={cameraPhoto}  title='fake' />}
      </View>

      <TouchableOpacity onPress={() => navigation.push('UserManual')} style={[styles.circle, { width: scale(40), height: scale(40) }]}>
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
    position: 'absolute',
    marginTop: scale(320),
    marginLeft: scale(330),
    borderRadius: scale(40),
    backgroundColor: color.DeepAquamarine,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContent: {},
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
