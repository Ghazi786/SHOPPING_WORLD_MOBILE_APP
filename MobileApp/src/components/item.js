import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
const Item=(props)=>{
    return (
      <View style={styles.list}>
          <Text>{props.placeName}</Text>
      </View>
    );
}
const styles=StyleSheet.create({
    list:{
        backgroundColor:'gray',
        marginBottom:5
    }
})
export default Item;