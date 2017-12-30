import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class Screen2 extends React.Component {
  static navigationOptions = {
    title: 'Screen 2',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Screen 222</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#69d1ff',
  },
});
