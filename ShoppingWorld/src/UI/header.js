import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Icon, Badge } from 'react-native-elements';
const Header = (props) => {
    return (
        <View style={style.headerContainer}>
            <View style={style.row} >
                <View style={style.row}>
                    <Icon style={50, 50, 50} name='menu' color='white' ></Icon>
                    <Text style={style.TextSize}>Shopping World</Text>
                </View>
                <View style={style.row}>
                    <Icon name='notifications' color='white' ></Icon>
                    <Icon name='shopping-cart' color='white' ></Icon>
                    <Badge
                        status='error'
                        value="10"
                        containerStyle={{ position: 'absolute', top: -5, right: -10,borderColor:'white',borderRadius:2}}
                    />
                </View>
            </View>
            <View>
                <TextInput style={style.textInput} placeholder="Search for Products,Brands, and More"></TextInput>
            </View>

        </View>

    )
}

export default Header;

var style = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'blue',
        height: 110,
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    TextSize: {
        fontSize: 20,
        color: 'white'
    },
    textInput: {
        backgroundColor: 'white',
        marginTop: 15,
        borderRadius: 2
    }
})