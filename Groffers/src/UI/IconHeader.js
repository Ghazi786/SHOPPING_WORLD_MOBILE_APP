import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Icon, Badge,Button } from 'react-native-elements';
class IconHeader extends Component {
    render(){
        return (
            <View style={style.headerContainer}>
                <View style={style.row} >
                    <View style={style.row}>
                        <Icon style={50, 50, 50} name='menu' color='white'
                        onPress={()=>{this.props.navigation.toggleDrawer()}} ></Icon>
                        <View style={style.address} >
                         <Text style={style.smallText}>Delivery Location</Text>
                         <View style={style.row}>
                         <Text style={style.normalText}>Reliance Corporate Park,Navi Mumbai...</Text>
                            <Icon iconStyle={style.editIcon} name='edit' color="white" size={15}></Icon>
                         </View>
                        </View>
                        
                    </View>
                    <View style={style.row}>
                        <Icon name='notifications' color='white' ></Icon>
                        <Icon name='shopping-cart' color='white' ></Icon>
                        <Badge                    
                            status='error'
                            value="10"
                            containerStyle={{ position: 'absolute', top: -5, right: -10, borderColor: 'white', borderRadius: 2 }}
                        />
                    </View>
                </View>
                <View style={style.rowFlex} >
                    <Button buttonStyle={style.catButton} title="Categories" onPress={()=>{this.props.navigation.navigate('welcome')}} ></Button>
                    <TextInput style={style.textInput} placeholder="Search for Products.."></TextInput>
                </View>
                
    
            </View>
        );
    }
}
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
    rowFlex:{
        flexDirection: 'row'
    },
    normalText: {
        fontSize: 13,
        color: 'white'
    },
    smallText:{
        fontSize: 10,
        color: 'white'   
    },
    editIcon:{
        marginLeft:10
    },
    textInput: {
        backgroundColor: 'white',
        marginTop: 15,
        borderRadius: 2,
        width:'70%',
        paddingTop:0,
        paddingBottom:0
    },
    catButton:{
        marginTop:18,
        marginRight:10,
        backgroundColor:'black'
    },
    address:{
        marginLeft:10
    }
})
export default IconHeader;