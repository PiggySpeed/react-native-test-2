import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Camera from 'react-native-camera';

export default class CameraTest1 extends React.Component {
  static navigationOptions = {
    title: 'Camera Test1',
  };

  _takePicture = () => {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Camera Test 1</Text>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this._takePicture}>[CAPTURE]</Text>
        </Camera>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
  },
  innerContainer: {
    flex: 1
  },
  preview: {
    flex: 1,
    height: 500,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
