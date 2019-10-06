import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
const Item = (props) => {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>

            <View style={styles.list}>
                <Text>{props.placeName}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    list: {
        backgroundColor: 'gray',
        marginBottom: 5
    }
})
export default Item;