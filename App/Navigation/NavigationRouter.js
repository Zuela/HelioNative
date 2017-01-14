// @flow

import React, { Component } from 'react'
import { AppRegistry, Navigator, StyleSheet, Text, View, Image } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import Styles from './Styles/TabBarStyle'
import { Metrics, Colors, Fonts, Images } from '../Themes/'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import CustomNavBar from '../Navigation/CustomNavBar'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import AllComponentsScreen from '../Containers/AllComponentsScreen'
import UsageExamplesScreen from '../Containers/UsageExamplesScreen'
import LoginScreen from '../Containers/LoginScreen'
import ListviewExample from '../Containers/ListviewExample'
import ListviewGridExample from '../Containers/ListviewGridExample'
import ListviewSectionsExample from '../Containers/ListviewSectionsExample'
import ListviewSearchingExample from '../Containers/ListviewSearchingExample'
import MapviewExample from '../Containers/MapviewExample'
import APITestingScreen from '../Containers/APITestingScreen'
import ThemeScreen from '../Containers/ThemeScreen'
import DeviceInfoScreen from '../Containers/DeviceInfoScreen'
import Helio1 from '../Containers/Helio1'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class TabIcon extends React.Component {
    render(){
        return (
          //should eventually be relocated into its own TabBar Style
          <View style={Styles.tabBarStyle}>
            <Icon
              name={this.props.tabIcon}
              size={24}
              color={this.props.selected ? Colors.helioRedSecondary : 'white'}
            />
            <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: this.props.selected ? Colors.helioRedSecondary : 'white',
                }}
             >{this.props.title}
            </Text>
          </View>
        );
    }
}
// styles {navigationBarStyle/titleStyle} could be written more eloquently...
class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='tabbar' tabBarStyle={Styles.tabBarStyle} tabs={true} hideNavBar >
          <Scene key='login' component={LoginScreen} title='Login' hideNavBar />
          <Scene initial key='presentationScreen'
            navigationBarStyle={Styles.navBar}
            title='Helio Health Group' titleStyle={Styles.title}
            rightTitle='Log In' rightButtonTextStyle={Styles.rightButtonText} rightButtonStyle={Styles.rightButton} onRight={() => Actions.login()}
            leftButtonImage={Images.helioSymbolRedSmall} leftButtonIconStyle={Styles.leftButtonIcon} leftButtonTextStyle={Styles.leftButtonText} onLeft={() => window.alert('Example Pressed')}
            icon={TabIcon}
            component={PresentationScreen}
          />
          <Scene key='Helio1' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} icon={TabIcon} component={Helio1} title='HelioWIP' />
          <Scene key='componentExamples' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} icon={TabIcon} component={AllComponentsScreen} title='Components' />
          <Scene key='usageExamples' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} icon={TabIcon} component={UsageExamplesScreen} title='Usage' rightTitle='Example' onRight={() => window.alert('Example Pressed')} />
            <Scene key='listviewExample' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} component={ListviewExample} title='Listview Example' />
            <Scene key='listviewGridExample' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} component={ListviewGridExample} title='Listview Grid' />
            <Scene key='listviewSectionsExample' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} component={ListviewSectionsExample} title='Listview Sections' />
            <Scene key='listviewSearchingExample' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} component={ListviewSearchingExample} title='Listview Searching' navBar={CustomNavBar} />
            <Scene key='mapviewExample' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} component={MapviewExample} title='Mapview Example' />
          <Scene key='apiTesting' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} icon={TabIcon} component={APITestingScreen} title='API Testing' />
          <Scene key='theme' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} icon={TabIcon} component={ThemeScreen} title='Theme' />

        {/* Custom navigation bar example */}
          <Scene key='deviceInfo' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} icon={TabIcon} component={DeviceInfoScreen} title='Device Info' />
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
