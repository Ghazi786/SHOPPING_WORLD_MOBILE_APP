import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

export default class DetailsComponent extends Component{
    render(){
        return (
            <View>
                <Text>Welcome to Secode Screen</Text>
                <Button title="Go" onPress={()=>{this.props.navigation.navigate("Go")}}/>
            </View>
        )
    }
}