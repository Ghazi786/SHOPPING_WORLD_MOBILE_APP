import React from 'react';
import { View, Text, FlatList, Picker, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { ListItem, Icon, Overlay, Card } from 'react-native-elements'
import { Component } from "react";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
 const list = [
    {
      type: 'Profile',
      pic: 'assignment-ind',
      //nav: this.props.navigation.navigate('Profile', { user: this.state.user })
      nav: () => { console.log('pressing Profile!'); },
    },
    {
      type: 'Settings',
      pic: 'settings-applications',
      nav: () => { console.log('pressing Settings!'); }, 
    },
    {
      type: 'Logout',
      //nav: firebase.auth().signOut() // sign user out 
      nav: () => { console.log('pressing Logout!'); },
    }
]
const dropdown = [
    { name: "Edit", nav: () => { console.log('pressing Settings!'); },  },
    { name: "Delete", nav: () => { console.log('pressing Settings!'); },  },
]
class MyAddress extends Component {

    state = {
        rowNum: -1
    }


    renderRow = () => {
        return (
            <View >
                {
                    list.map((u, i) => {
                        return (
                            <View key={i} >
                                <ListItem
                                    bottomDivider
                                    title={u.type}>
                                </ListItem>
                                <View style={[{ position: 'absolute', flex: 1, right: 16, bottom: 5 }]}>
                                    <Icon onPress={() => {
                                        console.log('object :', 'preess', i);
                                        this.setState({ rowNum: i })
                                    }} name='more-horiz'></Icon>
                                </View>
                                <View>
                                    {

                                        this.state.rowNum == i && <View style={[{ width: '40%', elevation: 1 }, styles.list]}>
                                            {

                                                dropdown.map((item, i) => (
                                                    <View>
                                                        
                                                        <ListItem 
                                                            
                                                            onPress={() => {this.setState({rowNum:-1})}}
                                                            key={item.type}
                                                            title={item.name}
                                                        />
                                                    </View>
                                                ))
                                            }
                                        </View>
                                    }
                                </View>
                            </View>
                        );
                    })
                }
            </View>

        )
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={1} onPress={()=>{
                this.setState({rowNum:-1})
            }} style={{zIndex:-1,flex:1}}>
                 <View style={{ flex: 1, position: 'relative' }} >
                {this.renderRow()}
            </View>
            </TouchableOpacity>
           

        )
    }
}
const styles = StyleSheet.create({
    list: {
        position: 'absolute',
        top: -10,
        right: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowRadius: 2,
        zIndex:1
    }
})
export default MyAddress;