import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class VideoTest1 extends React.Component {
  static navigationOptions = {
    title: 'Camera Test1',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Video Test 1</Text>
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
    flex: 1,

  }
});
