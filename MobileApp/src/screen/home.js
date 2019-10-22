import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PlaceInput from '../components/textInput';
import PlaceList from '../components/placelist';
import  {addPlace} from '../../src/store/actions/index';
import {deletePlace} from '../../src/store/actions/index';
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
    this.props.onDeletePlace(key);
  }
   placeSumbit = (place) => {
    this.props.onAddPlace(place);
  }
  
  
  render() {
    return (
      <View  style={style.container}>
        <PlaceInput onAddInput = {this.placeSumbit} ></PlaceInput>
        <PlaceList onItemDeleted={this.onItemDeletedHandler} places={this.props.places}></PlaceList>
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
let PlaceScreen= connect(mapStateToProps,mapDispatchToProps)(HomeScreen);
export default PlaceScreen;