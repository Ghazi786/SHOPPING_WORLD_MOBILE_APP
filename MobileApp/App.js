import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PlaceScreen from './src/screen/home';
import DetailsComponent from './src/screen/details';

let RootStack=createStackNavigator({
  PlaceScreen:PlaceScreen,
  DetailsScreen:DetailsComponent,
  Go:PlaceScreen

})
let Navigation = createAppContainer(RootStack);
export default class App extends Component {
  render() {
    return (
      <Navigation/>
    );
  }
}

