import React, { useEffect } from 'react'
import {
  View,
  StyleSheet,
  AsyncStorage,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { Text } from 'react-native-elements'
import AppIntroSlider from 'react-native-app-intro-slider'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const slides = [
  {
    key: '1',
    text: 'Browse the menu and order directly from the application',
    image: require('../../Assets/Images/Food.png'),
  },
  {
    key: '2',
    text: 'Your order will be immediately collected and sent to you',
    image: require('../../Assets/Images/Delivery.png'),
  },
  {
    key: '3',
    text: 'Pick up delivery at your door and enjoy',
    image: require('../../Assets/Images/Eating.png'),
  },
]

const IntroScreen = ({ navigation }) => {
  const setFirstTimeUser = async () => {
    try {
      await AsyncStorage.setItem('FirstTimeUser', 'NO')
      navigation.navigate('Loading')
    } catch (e) {
      console.log(e)
    }
  }

  _renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <View>
          <Image source={item.image} style={styles.image} />
        </View>
        <View>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    )
  }

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign name="arrowright" size={hp('3.5%')} color="black" />
      </View>
    )
  }

  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Entypo name="check" size={hp('3.5%')} color="black" />
      </View>
    )
  }

  _renderPrevButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign name="arrowleft" size={hp('3.5%')} color="black" />
      </View>
    )
  }

  _renderSkipButton = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>
    )
  }

  return (
    <AppIntroSlider
      activeDotStyle={{ backgroundColor: 'rgba(102, 68, 204, .35)' }}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
      renderSkipButton={_renderSkipButton}
      showSkipButton={true}
      data={slides}
      renderItem={_renderItem}
      onDone={setFirstTimeUser}
      onSkip={setFirstTimeUser}
    />
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    height: hp('40%'),
    width: width,
  },
  text: {
    fontSize: hp('3.5%'),
    marginHorizontal: hp('6%'),
    marginVertical: hp('7%'),
    textAlign: 'center',
  },
  buttonCircle: {
    width: wp('12%'),
    height: hp('6%'),
    backgroundColor: 'rgba(102, 68, 204, .2)',
    borderRadius: hp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  skip: {
    fontSize: hp('2%'),
    marginTop: hp('1.4%'),
    marginHorizontal: hp('0.5%'),
    color: '#6644CC',
  },
})

//make this component available to the app
export default IntroScreen
