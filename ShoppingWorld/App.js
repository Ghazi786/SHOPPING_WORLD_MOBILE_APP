/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { connect } from 'react-redux';
import {Image} from 'react-native-elements';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Header from './src/UI/header';
import Categories from './src/UI/categories';
import { BackgroundCarousel } from './src/shared/component/BackgroundCarousel';
import a from './src/assets/a.jpg';
import b from './src/assets/b.jpg';
import c from './src/assets/c.jpg';
import d from './src/assets/d.jpg';
import e from './src/assets/e.jpg';
import f from './src/assets/f.jpg';
import g from './src/assets/h.jpg';
import h from './src/assets/g.jpg';
const images = [
  a,b,c,d,e,f,g,h
];
const App = () => {
  return (
    <View>
      <Header style={style.headerContainer}  data={"My Header"}></Header>
      <Categories></Categories>
      <BackgroundCarousel images={images}></BackgroundCarousel>
    </View>
  );
};


const style=StyleSheet.create({
  headerContainer:{
    padding:100
  }
})
export default connect(null, null)(App);
