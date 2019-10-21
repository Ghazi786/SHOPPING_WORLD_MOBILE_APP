import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PlaceInput from '../components/textInput';
import placeList from '../components/placelist';
const style = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 50,
    paddingRight: 20,
    backgroundColor: '#FCFCFC',
    flex: 1,
    position: 'relative'
  },
  customize: {
    backgroundColor: 'green'
  }
})
class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Counter!',
  };
   onItemDeletedHandler = (key) => {
    // this.setState((prevState) => {
    //   return {
    //     places: prevState.places.filter(place => {
    //       return place.key !== key;
    //     })
    //   }
    // })
    this.props.onDeletePlace(key);
  }
   placeSumbit = (place) => {
    // this.setState(prevState => {
    //   console.log('prevState :', prevState);
    //   return {
    //     places: prevState.places.concat({ value: place, key: Math.random() })
    //   }
    // });
    this.props.onAddPlace(place);
  }
  
  
  render() {
    return (
      <View  style={style.container}>
        <PlaceInput onAddInput={this.placeSubmit}></PlaceInput>
        <placeList onItemDeleted={this.onItemDeletedHandler}></placeList>
      </View>

    );
  }
}
const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(addPlace(placeName)),
    onDeletePlace: key => dispatch(deletePlace(key))
  };
}
let placeScreen= connect(mapStateToProps,mapDispatchToProps)(HomeScreen);
export default placeScreen;