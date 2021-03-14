import React from 'react';
import {View, StyleSheet, Text } from 'react-native'


const Player = () => {
    return (
        <View style={sytles.container}>
            <Text>Player</Text>
        </View>
    )
}

const sytles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Player;
