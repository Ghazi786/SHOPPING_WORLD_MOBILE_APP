import React from 'react';
import { View, Text, StyleSheet } from "react-native"

const DrawerFooter = () => {
    return (
        <View style={styles.containerFoo} >
            <Text style={{alignItems:"flex-end",padding: 20 }}>
                {"About Us"}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    containerFoo: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },

})
export default DrawerFooter;