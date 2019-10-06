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
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView
} from 'react-native';


export default class App extends Component {
  state = {
    places: []
  }

  placeSumbit = (place) => {
    this.setState(prevState => {
      console.log('prevState :', prevState);
      return {
        places: prevState.places.concat({ value: place, key: Math.random() })
      }
    });
  }
  onItemDeletedHandler = (key) => {
    this.setState((prevState) => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      }
    })
  }
  render() {
    return (

      <View style={style.container} >
        <PlaceInput onAddInput={this.placeSumbit} ></PlaceInput>
        <PlaceList onItemDeleted={this.onItemDeletedHandler} places={this.state.places}></PlaceList>
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

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
