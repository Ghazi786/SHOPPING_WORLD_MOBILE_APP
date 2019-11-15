import React from 'react';
import { Image } from 'react-native-elements';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
const ImageList=(props)=>{
    return (

    <View style={style.imageContainer}>
        <Image source={props.path}
        style={{width:60,height:60}}
        PlaceholderContent={<ActivityIndicator></ActivityIndicator>}>            
        </Image>
    </View>
    )
}
const style=StyleSheet.create({
    imageContainer:{
        padding:10
    },
    productName:{
        paddingLeft:10,
        fontSize:10
    }
})
export default ImageList;