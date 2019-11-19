import React from 'react';
import { View, Text, StyleSheet } from "react-native"

const DrawerHeader = () => {
    return (
        <View style={styles.container} >
            <Text style={{ padding: 20 }}>
                {"Welcome"}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
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
export default DrawerHeader;