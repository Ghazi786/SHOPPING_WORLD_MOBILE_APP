import React from 'react';
import { View,StyleSheet, Button,Text } from 'react-native';
const cardHeader=()=>{
    return (
        <View style={style.flexRow} >
            <Text>Best Selling Item</Text>
            <Button title="See All" onPress={()=>{}}></Button>
        </View>
    )
}
const style=StyleSheet.create({
    flexRow:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
});
export default cardHeader;