import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAppContainer, createSwitchNavigator, ScrollView } from 'react-navigation';
import WelcomeScreen from './src/UI/Screen/welcome';
import Dashboard from './src/UI/Screen/dashboard';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import DrawerHeader from './src/UI/Screen/DrawerHeader';
import DrawerFooter from './src/UI/Screen/DrawerFooter';
import MyAddress from './src/UI/Screen/MyAdress';
const RootStack = createStackNavigator({
  dashboard: {
    screen: Dashboard,
    navigationOptions: {
      headerShown: false
    }

  },
  //  Welcome:WelcomeScreen
  Welcome: {
    screen: WelcomeScreen
  },
  MyAddress:{
    screen:MyAddress,
  }

});

// let Navigation=createAppContainer(RootStack);
const AppDrawerNavigator = createDrawerNavigator({
  Address: {
    screen: MyAddress,
    navigationOptions:{
      drawerIcon:<View>
        <Icon name='contact-phone'></Icon>
      </View>
    }
    
  },
  MyAddress: {
    screen: MyAddress,
    navigationOptions:{
      drawerIcon:<View>
        <Icon name='contact-phone'></Icon>
      </View>
    }
    
  },
  MyOrder: {
    screen: WelcomeScreen,
    navigationOptions:{
      drawerIcon:<View>
        <Icon name='contact-phone'></Icon>
      </View>
    }
    
  },
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
  },

},
  {
    initialRouteName: 'Dashboard',
    drawerBackgroundColor: 'white',
    contentComponent: props => <View style={{ flex: 1 }} ><ScrollView><DrawerHeader></DrawerHeader><DrawerItems {...props} /></ScrollView><DrawerFooter></DrawerFooter></View>
  });

const AppSwitchNavigator = createSwitchNavigator({
  Dashboard: { screen: AppDrawerNavigator }

}, {
  backBehavior: "order"
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
