import {StyleSheet} from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
        tabBarStyle: {
            borderTopWidth : 0,
            borderColor    : Colors.helioBlack,
            backgroundColor: Colors.helioBlack,
            opacity        : 1
        },
        tabIconStyle: {

        },
        container: {
          flex: 1,
        },
        navBar: {
          backgroundColor: Colors.helioBlack
        },
        title: {
          color: Colors.snow
        },
        leftButton: {
          tintColor: Colors.snow
        },
        rightButtonText: {
          color: Colors.snow,
          textAlign: 'center'
        },
        rightButton: {
          backgroundColor: Colors.helioRedSecondary,
          borderColor: Colors.helioRedSecondary,
          borderRadius: 5
        },
        drawer: {
          backgroundColor: Colors.helioBlack
        },
        main: {
          backgroundColor: Colors.helioBlackSecondary
        }
    });
