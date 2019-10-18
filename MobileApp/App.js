/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import PlaceList from './src/components/placelist';
import PlaceInput from './src/components/textInput';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import  {addPlace} from './src/store/actions/index';
import {deletePlace} from './src/store/actions/index';
import {
  StyleSheet,
  View,
} from 'react-native';
class App extends Component {
  // state = {
  //   places: []
  // }

  placeSumbit = (place) => {
    // this.setState(prevState => {
    //   console.log('prevState :', prevState);
    //   return {
    //     places: prevState.places.concat({ value: place, key: Math.random() })
    //   }
    // });
    this.props.onAddPlace(place);
  }
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
  render() {
    return (
      <View style={style.container} >
        <PlaceInput onAddInput={this.placeSumbit} ></PlaceInput>
        <PlaceList onItemDeleted={this.onItemDeletedHandler} places={this.props.places}></PlaceList>
      </View>
    );
  }
}

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


// export default App
export default connect(mapStateToProps,mapDispatchToProps)(App);
