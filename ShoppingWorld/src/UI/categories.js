import React from 'react';
import { View, FlatList, StyleSheet } from "react-native"
import ImageList from './imageList';
import image1 from '../assets/offerZone.jpg';
import image2 from '../assets/mobiles.jpg';
import image3 from '../assets/flights.jpg';
import image4 from '../assets/home.jpg';
import image5 from '../assets/beauti.jpg';
import image6 from '../assets/electronics.jpg';
import image7 from '../assets/sport.jpg';
import image8 from '../assets/toybaby.jpg';
import { Icon } from 'react-native-elements';


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
const callList=(item,index)=>{
    if(index==0){
        return (<Icon containerStyle={{paddingTop:5}} reverse={true}
            name='menu' type='material' color='blue'/>)
    }
    else {
       return <ImageList path={item.path} title={item.title}
                    ></ImageList>
    }
}
const Categories = () => {
    return (
        <View style={{flexDirection:'row',backgroundColor:'white'}}>

            
            <FlatList data={Data}
                renderItem={({ item,index }) => (
                    
                    callList(item,index)
                    
                )}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >

            </FlatList>
        </View>

    )
}
const style = StyleSheet.create({
    buttonRound: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 50,
    }
})
export default Categories;