import {StyleSheet} from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
        tabBarStyle: {
            borderTopWidth : .5,
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
        rightButton: {
          color: Colors.snow
        },
        drawer: {
          backgroundColor: Colors.helioBlack
        },
        main: {
          backgroundColor: Colors.helioBlackSecondary
        }
    });
