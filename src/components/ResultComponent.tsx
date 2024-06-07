import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {color, FONT_FAMILY, scale} from '../untils/constants';
import {IC_Facebook} from '../assets/icons';
import Share from 'react-native-share';
import RNFS from 'react-native-fs';

const {width, height} = Dimensions.get('window');

interface Props {
  result: String;
  title?: string;
  cameraPhoto: string; 
}

export const ResultComponent = (props: Props) => {
  const shareMessage = async () => {
    let message = 'From DeFake App\n';
    message += 'Image Analysis Result:\n';
    if (props.result === '1') {
      message += 'This image is Real.';
    } else if (props.result === '2') {
      message += 'This image is Fake.';
    } else {
      message += 'No analysis result.';
    }

    try {
      const option = {
        message: message,
        title: props.title,
      };
      const res = await Share.open(option);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const shareImage = async () => {
    try {

      let message = 'From DeFake App\n';
    message += 'Image Analysis Result:\n';
    if (props.result === '1') {
      message += 'This image is Real.';
    } else if (props.result === '2') {
      message += 'This image is Fake.';
    } else {
      message += 'No analysis result.';
    }


      const base64Data = await RNFS.readFile(props.cameraPhoto, 'base64');
      const imageUrl = `data:image/jpeg;base64,${base64Data}`;

      const option = {
        url: imageUrl,
        title: props.title,
        message: message,
      };
      const res = await Share.open(option);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleShare = async () => {
    await shareImage();

    // await shareMessage();
  };

  return (
    <View style={styles.outerContainer}>
      <LinearGradient
        colors={[color.White, color.DeepAquamarine]}
        style={styles.gradientBorder}>
        {props.result === '1' && (
          <LinearGradient
            colors={[color.AlienArmpit, color.SeaFoamGreen]}
            style={styles.button}>
            <Text style={styles.buttonText}>Real</Text>
          </LinearGradient>
        )}
        {props.result === '2' && (
          <LinearGradient
            colors={[color.Lust, color.PastelPink]}
            style={styles.button}>
            <Text style={styles.buttonText}>Fake</Text>
          </LinearGradient>
        )}
      </LinearGradient>

      <TouchableOpacity style={styles.viewShare} onPress={handleShare}>
        <Text style={styles.textShare}>Share with </Text>
        <IC_Facebook width={25} height={25} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    marginTop: scale(30),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  gradientBorder: {
    borderRadius: 50,
    padding: 5,
  },
  button: {
    width: scale(160),
    height: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    color: color.Black,
  },
  viewShare: {
    marginTop: scale(10),
    flexDirection: 'row',
  },
  textShare: {
    fontSize: 16,
    color: color.White,
    fontWeight: '500',
  },
});

export default ResultComponent;
