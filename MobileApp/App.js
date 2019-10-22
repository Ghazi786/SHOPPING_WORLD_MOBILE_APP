import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PlaceScreen from './src/screen/home';

let RootStack=createStackNavigator({
  screen:PlaceScreen
})
let Navigation = createAppContainer(RootStack);
export default class App extends Component {
  render() {
    return (
      <Navigation/>
    );
  }
}

