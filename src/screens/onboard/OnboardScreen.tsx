import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {IMG_Logo, IMG_Logo2} from '../../assets/images';
import {color, FONT_FAMILY, scale} from '../../untils/constants';

import { ButtonComponent } from '../../components';
import {useNavigation} from '@react-navigation/native';
const images = [
  {url: IMG_Logo, description: 'Combat deep fakes, safeguard authenticity', id: 1},
  {url: IMG_Logo2, description: 'Use artificial intelligence to combat artificial intelligence', id:2},
];

const {width, height} = Dimensions.get('window');

const OnBoardScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigation = useNavigation<any>();

  const renderImageIndicator = (index: number) => {
    return (
      <TouchableOpacity
      key={index}
        onPress={() => setCurrentImageIndex(index)}
        style={[styles.dot, index === currentImageIndex && styles.activeDot]}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        data={images}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({item}) => (
          <View style={styles.scrollContent}>
            <View style={styles.topContainer} >
              <Image source={item.url} style={styles.image} />
              <Text style={styles.largeText}>{item.description}</Text>
            </View>
          </View>
        )}
        onScroll={event => {
          const offsetX = event.nativeEvent.contentOffset.x;
          const index = Math.round(offsetX / width);
          setCurrentImageIndex(index);
        }}
      />
      <View style={styles.dotContainer}>
        {images.map((_, index: number) => renderImageIndicator(index))}
      </View>
      <ButtonComponent
        text={'Get Started'}
        widthButton={scale(280)}
        onPress={() => navigation.push('Home')}
      />
    </SafeAreaView>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.ChineseBlack,
  },
  scrollContent: {
    width: width,
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 1.5,
    height: height * 0.5,
    resizeMode: 'contain',
  },
  largeText: {
    width: width * 0.7,
    fontSize: 28,
    color: color.White,
    fontFamily: FONT_FAMILY.PoppinsSemiBold,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: color.White,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: color.DeepAquamarine,
  },
});
