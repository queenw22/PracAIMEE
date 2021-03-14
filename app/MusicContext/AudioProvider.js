import React, { Component, createContext} from 'react';
import { View, Text, Alert } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

export const AudioContext = createContext()
export default class AudioProvider extends Component {
  
  
  
  constructor(props) {
    super(props);
    
  }

  getPermission = async () => {

    // {
    //"accessPrivileges": "none",
    //"canAskAgain": true,
    //"expires": "never",
    //"granted": false,
    //"status": "undetermined",
 // }
      const permission = await MediaLibrary.getPermissionsAsync();
      if(permission.granted)
      {
        this.getAudioFiles()
        //want to get all audio files 
      }

      if(!permission.granted && permission.canAskAgain)
      {
        const {status, canAskAgain} = await MediaLibrary.requestPermissionsAsync();
        if(status === 'denied' && canAskAgain)
        {
          //display alert that user must allow this permission
          this.permissionAlert()

        }

        if(status == 'granted')
        {
          this.getAudioFiles(); 
        }

        if(status == 'denied' && !canAskAgain) 
        {
          //display some error 
        }

      }
  }

  permissionAlert = () => {
    Alert.alert("Permission Required", "This app needs to read audio files!",
    [{
       text: 'I am ready',
       onPress: () => this.getPermission()

    }, 
    {
      text: 'cancel',
      onPress: () => this.permissionAlert()
    }])

  }

  getAudioFiles = async () => {
    const media = await MediaLibrary.getAssetsAsync({
      mediaType: 'audio'
    })
    console.log(media);
  }

 

  componentDidMount(){
    this.getPermission();
  }

  render() {
    return (
      <AudioContext.Provider value={{}}>
        {this.props.children}
      </AudioContext.Provider>
    );
  }
}
