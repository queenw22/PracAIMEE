import React from 'react';
import {View, StyleSheet, Text } from 'react-native'


const Playlist = () => {
    return (
        <View style={sytles.container}>
            <Text>Playlist</Text>
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

export default Playlist;
