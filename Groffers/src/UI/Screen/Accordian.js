import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Colors } from './Colors';
import Icon from "react-native-vector-icons/MaterialIcons";
import { Card, Image } from 'react-native-elements';

export default class Accordian extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            expanded: false,
        }
    }
    callmyFunction() {
        return (
            this.state.data.map((item) => {
                return (
                    <Image source={item.path}
                        style={[{ width: 80, height: 80,
 
                            // Set border Hex Color Code Here.
                            borderColor: '#F44336', borderRightWidth:1,borderBottomWidth:1 },styles.btnActive]}
                        borderBottomRightRadius={10}
                        containerStyle={styles.btnActive}
                        color={true} >
                    </Image>
                )
            })

        )
    }

    render() {
        return (
            <View>
                <Card>
                    <TouchableOpacity style={styles.row} onPress={() => this.toggleExpand()}>
                        <Image source={this.props.title} style={{ width: 60, height: 60 }} >

                        </Image>
                        <View>
                            <Text>Up To 70%</Text>
                            <Text>Grocery & Staples</Text>
                            <Text>New Launches</Text>
                        </View>
                        {/* <Text style={[styles.title, styles.font]}>{this.props.title}</Text> */}
                        <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={Colors.DARKGRAY} />
                    </TouchableOpacity>
                    <View style={styles.parentHr} />
                    {
                        this.state.expanded &&
                        <View style={[styles.rowWrap]} >
                            {this.callmyFunction()}
                        </View>


                    }

                </Card>
            </View >
        )
    }

    onClick = (index) => {
        const temp = this.state.data.slice()
        temp[index].value = !temp[index].value
        this.setState({ data: temp })
        console.log('object :', "object");
    }

    toggleExpand = () => {
        this.setState({ expanded: !this.state.expanded })
    }

}

const styles = StyleSheet.create({
    rowWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    font: {
        // fontFamily: Fonts.bold,
    },
    button: {
        width: '100%',
        height: 54,
        alignItems: 'center',
        paddingLeft: 35,
        paddingRight: 35,
        fontSize: 12,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.DARKGRAY,
    },
    itemActive: {
        fontSize: 12,
        color: Colors.GREEN,
    },
    itemInActive: {
        fontSize: 12,
        color: Colors.DARKGRAY,
    },
    btnActive: {
        borderColor: Colors.GREEN,
    },
    btnInActive: {
        borderColor: Colors.DARKGRAY,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    childRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.GRAY,
    },
    parentHr: {
        height: 4,
        color: Colors.WHITE,
        width: '100%'
    },
    childHr: {
        height: 1,
        backgroundColor: Colors.LIGHTGRAY,
        width: '100%',
    },
    colorActive: {
        borderColor: Colors.GREEN,
    },
    colorInActive: {
        borderColor: Colors.DARKGRAY,
    }

});