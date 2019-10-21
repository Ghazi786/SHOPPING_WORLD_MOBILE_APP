import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PlaceInput from './src/components/textInput';
const style = StyleSheet.create({
  h1: {
    textAlign: "center",
    color: "red"
  }
})
class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>{"Home Screen India"}</Text>
      </View>

    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(AppNavigator);