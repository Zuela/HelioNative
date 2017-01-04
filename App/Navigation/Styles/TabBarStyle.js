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
        leftButtonIcon: {
          flex: 1,
          flexDirection: 'column',
          height: 20,
          width: 20,
          resizeMode: 'contain',
        },
        rightButtonText: {
          color: Colors.snow,
          textAlign: 'center',
          textAlignVertical: 'center'
        },
        rightButton: {
          top: 20,
          right: 0,
          borderRadius: 0,
          borderRightWidth: 2,
          borderBottomWidth: 2,
          height: Metrics.navBarHeight - 21,
          backgroundColor: Colors.helioRedSecondary,
          borderColor: Colors.helioRedSecondary,
          justifyContent: 'center',
        }
    });
