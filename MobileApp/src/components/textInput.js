import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native';
class PlaceInput extends Component {
    state = {
        placeName: 'ghazi'
    }
    placeInputHandler = (input) => {
        this.setState({ placeName: input })
    }
    onAdd = () => {
        this.props.onAddInput(this.state.placeName);
    }
    render() {
        return (
            <View>
                <TextInput value={this.state.placeName} onChangeText={this.placeInputHandler} placeholder="Enter Place Name" ></TextInput>
                <Button title="Add" onPress={this.onAdd}></Button>
            </View >
        );
    }
}
export default PlaceInput;
