import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createAppContainer, createSwitchNavigator, ScrollView } from 'react-navigation';
import WelcomeScreen from './src/UI/Screen/welcome';
import Dashboard from './src/UI/Screen/dashboard';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const RootStack = createStackNavigator({
  // dashboard:Dashboard
  dashboard: {
    screen: Dashboard

  }
});

// let Navigation=createAppContainer(RootStack);
const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: RootStack,
    navigationOptions: {
      drawerIcon:
        <View>
          <Icon name='location-city'></Icon>
        </View>
    }
  },
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      drawerIcon: <View>
        <Icon name="location-city"></Icon>
      </View>
    }
  }
},
  {
    drawerBackgroundColor: 'white',
    contentComponent:props => <ScrollView><Text>Your Own Header Area Before</Text><DrawerItems {...props} /><Text>Footer</Text></ScrollView>
  });

const AppSwitchNavigator = createSwitchNavigator({
  Dashboard: { screen: AppDrawerNavigator },
  Welcome: { screen: WelcomeScreen },

});

const Navigation = createAppContainer(AppSwitchNavigator);
class App extends Component {
  render() {
    return (
      <Navigation />

    )
  }
}


export default connect(null, null)(App);
