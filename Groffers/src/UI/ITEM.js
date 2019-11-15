import React from 'react';
import { View,StyleSheet } from "react-native"
import { Image ,Card} from "react-native-elements";

const Item = (props) => {
    return (
        <Card>
        <View>
            <Image source={props.path}
             style={{width:140,height:200}} >
            </Image>
        </View>

        </Card>
        
    )
}
export default Item;
const style=StyleSheet.create({
    itemContainer:{
        padding:5
    }
});

