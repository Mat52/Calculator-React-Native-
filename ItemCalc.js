import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class ItemCalc extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        console.log("Content")
    }
    onPress = () => this.props.updateState(this.props.number);
    render() {
        return (

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                <Text style={styles.text}> {this.props.number}  </Text>
                </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    text: { fontSize: 48, color: "white", textAlign: "center" },
    button: {
        flex:1,
        justifyContent:'center'
    }
});

export default ItemCalc;

