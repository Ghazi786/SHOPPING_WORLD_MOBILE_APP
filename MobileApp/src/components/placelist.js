import React from 'react';
import { FlatList } from 'react-native'
import Item from './item'
const placeList = (props) => {
    // const placeListItem = props.places.map((ele, index) => {
    //   return  <Item placeName={ele} key={index} ></Item>
    // })
    return (
        <FlatList data={props.places} renderItem={(info) => {
            return (<Item placeName={info.item.value}></Item>)
        }} ></FlatList>
    );
}
export default placeList;