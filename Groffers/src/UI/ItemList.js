import React, { Component } from 'react';
import { StyleSheet, FlatList,View } from 'react-native';
import image1 from '../assets/image/offerZone.jpg';
import image2 from '../assets/image/mobiles.jpg';
import image3 from '../assets/image/flights.jpg';
import image4 from '../assets/image/home.jpg';
import image5 from '../assets/image/beauti.jpg';
import image6 from '../assets/image/electronics.jpg';
import image7 from '../assets/image/sport.jpg';
import image8 from '../assets/image/toybaby.jpg';
import Item from './ITEM';
const Data = [
    {
        id: '1',
        title: 'Mobile',
        path: image1
    },

    {
        id: '2',
        title: 'Groceries',
        path: image2
    },
    {
        id: '3',
        title: 'Mobile',
        path: image3
    },
    {
        id: '4',
        title: 'Groceries',
        path: image4
    },
    {
        id: '5',
        title: 'Groceries',
        path: image5
    },
    {
        id: '6',
        title: 'Mobile',
        path: image6
    },
    {
        id: '7',
        title: 'Mobile',
        path: image7
    },
    {
        id: '8',
        title: 'Mobile',
        path: image8
    },
    {
        id: '9',
        title: 'Mobile',
        path: image1
    },
    {
        id: '10',
        title: 'Mobile',
        path: image2
    },
    {
        id: '11',
        title: 'Groceries',
        path: image3
    },
    {
        id: '12',
        title: 'Mobile',
        path: image1
    },
    {
        id: '13',
        title: 'Groceries',
        path: image2
    },
];

export default class ItemList extends Component {
    render(){
        return (
    <View style={style.rowFlex}>
        <FlatList data={Data}
            renderItem={({ item, index }) => (
                <Item path={item.path}>
                </Item>
            )}
            keyExtractor={(item)=>item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>

        </FlatList>
    </View>

        )
    }
            }
const style = StyleSheet.create({
    rowFlex: {
        flexDirection: 'row'
    }
});

