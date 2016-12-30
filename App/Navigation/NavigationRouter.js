// @flow

import React, { Component } from 'react'
import {AppRegistry, Navigator, StyleSheet, Text, View} from 'react-native'
import { Scene, Router,  Actions } from 'react-native-router-flux'
import Styles from './Styles/TabBarStyle'
import { Metrics, Colors, Fonts } from '../Themes/'
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

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class TabIcon extends React.Component {
    render(){
        return (

            <Text
                //should eventually be relocated into its own TabBar Style
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: this.props.selected ? Colors.helioRedSecondary : 'white',
                }}
             >{this.props.title}
            </Text>
        );
    }
}

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='tabbar' tabs={true} hideNavBar tabBarStyle={Styles.tabBarStyle}>
          <Scene initial key='presentationScreen' icon={TabIcon} component={PresentationScreen} title='Helio Health Group' rightTitle='Log In' onRight={() => window.alert('Example Pressed')} />
            <Scene key='login' icon={TabIcon} component={LoginScreen} title='Login' hideNavBar />
          <Scene key='componentExamples' icon={TabIcon} component={AllComponentsScreen} title='Components' />
          <Scene key='usageExamples' icon={TabIcon} component={UsageExamplesScreen} title='Usage' rightTitle='Example' onRight={() => window.alert('Example Pressed')} />
            <Scene key='listviewExample' component={ListviewExample} title='Listview Example' />
            <Scene key='listviewGridExample' component={ListviewGridExample} title='Listview Grid' />
            <Scene key='listviewSectionsExample' component={ListviewSectionsExample} title='Listview Sections' />
            <Scene key='listviewSearchingExample' component={ListviewSearchingExample} title='Listview Searching' navBar={CustomNavBar} />
            <Scene key='mapviewExample' component={MapviewExample} title='Mapview Example' />
          <Scene key='apiTesting' icon={TabIcon} component={APITestingScreen} title='API Testing' />
          <Scene key='theme' icon={TabIcon} component={ThemeScreen} title='Theme' />

          {/* Custom navigation bar example */}
          <Scene key='deviceInfo' icon={TabIcon} component={DeviceInfoScreen} title='Device Info' />
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
