import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import SquareButton from '../components/SquareButton';

export default class DemoHome extends React.Component {
  static navigationOptions = {
    title: 'Demo Home'
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
          <SquareButton
            to={'CameraTest1'}
            title={'Camera Test 1'}
            navigation={this.props.navigation}/>
          <SquareButton
            to={'VideoTest1'}
            title={'Video Test 1'}
            navigation={this.props.navigation}/>
          <SquareButton
            to={'CameraTest1'}
            title={'Camera Test 1'}
            navigation={this.props.navigation}/>
          <SquareButton
            to={'CameraTest1'}
            title={'Camera Test 1'}
            navigation={this.props.navigation}/>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
    // backgroundColor: '#ff7d6e',
  },

  innerContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
});
