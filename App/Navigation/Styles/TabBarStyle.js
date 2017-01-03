import {StyleSheet} from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
        tabBarStyle: {
            borderColor    : Colors.helioBlack,
            backgroundColor: Colors.helioBlack,
            opacity        : 1
        },
        tabIconStyle: {

        },
        navBar: {
          backgroundColor: Colors.helioBlack,
        },
        title: {
          color: Colors.snow
        },
        leftButtonText: {
        },
        leftButton: {
        },
        rightButtonText: {
          color: Colors.snow,
          textAlign: 'center',
          textAlignVertical: 'center'
        },
        rightButton: {
          backgroundColor: Colors.helioRedSecondary,
          borderColor: Colors.helioRedSecondary,
          borderRadius: 5
        }
    });
