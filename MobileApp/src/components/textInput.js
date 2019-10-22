import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native';
class PlaceInput extends Component {
    state = {
        placeName: 'GhaziSir'
    }
    placeInputHandler = (input) => {
        console.log('object :');
        this.setState({ placeName: input })
    }
    onAdd = () => {
        this.props.onAddInput(this.state.placeName);
    }
    render() {
        return (
            <View>
                <TextInput value={this.state.placeName} onChangeText={this.placeInputHandler} placeholder="Enter Place Name" ></TextInput>
                <Button title="Add Place" onPress={this.onAdd}></Button>
            </View >
        );
    }
}
export default PlaceInput;
