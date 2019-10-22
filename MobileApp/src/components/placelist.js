import React from 'react';
import { FlatList } from 'react-native'
import Item from './item'
const PlaceList = (props) => {
    // const placeListItem = props.places.map((ele, index) => {
    //   return  <Item placeName={ele} key={index} ></Item>
    // })
    return (
        <FlatList data={props.places} renderItem={(info) => {
            return (<Item onItemPressed={()=>props.onItemDeleted(info.item.key)} placeName={info.item.value}></Item>)
        }} ></FlatList>
    );
}
export default PlaceList;